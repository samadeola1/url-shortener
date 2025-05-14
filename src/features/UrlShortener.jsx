import React, { useState } from "react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const token = import.meta.env.VITE_API_KEY;
  const handleShortenUrl = async () => {
    if (!url) {
      setError("Please add a link!");
      return;
    }

    try {
      setError("");
      setLoading(true);

      // Log the URL being sent to the API
      console.log("Fetching API with URL:", url);

      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST", // CleanURI API uses POST requests
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Correct Content-Type for form-encoded data
        },
        body: new URLSearchParams({ url }), // Pass the URL in the request body as form-encoded
      });

      // Log the raw response
      console.log("Raw Response:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch the shortened URL");
      }

      const data = await response.json();

      // Log the API response
      console.log("API Response:", data);

      if (data.result_url) {
        const newShortenedUrl = data.result_url;
        setShortenedUrl(newShortenedUrl);
        setHistory((prevHistory) => [
          ...prevHistory,
          { original: url, shortened: newShortenedUrl },
        ]);
      } else {
        setError("Failed to shorten the URL. Please try again.");
        console.error("API Error:", data);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = (urlToCopy) => {
    navigator.clipboard.writeText(urlToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-[#F0F1F6]  px-4 md:px-20 lg:px-[130px] pt-5">
      <div className="bg-[url('src/assets/bg-shorten-desktop.svg')] p-6 rounded-lg shadow-md py-10  bg-[#3A3053]  ">
        <div className="flex  flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white w-full md:w-fit md:px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2BD1D0]"
          />
          <button
            onClick={handleShortenUrl}
            className="bg-[#2BD1D0] text-white w-full md:w-fit md:px-6 py-3 rounded-lg hover:bg-[#9DE1E2]"
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {shortenedUrl && (
          <div className="mt-6">
            <p className="text-gray-700">Shortened URL:</p>
            <div className="flex items-center space-x-4">
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2BD1D0] font-bold"
              >
                {shortenedUrl}
              </a>
              <button
                onClick={() => handleCopyToClipboard(shortenedUrl)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Copy
              </button>
            </div>
          </div>
        )}
        {history.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#36343F] mb-4">
              Shortened Links History
            </h3>
            <ul className="space-y-4">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-4 rounded-lg"
                >
                  <p className="text-gray-700">
                    <span className="font-bold">Original:</span> {item.original}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <a
                      href={item.shortened}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2BD1D0] font-bold"
                    >
                      {item.shortened}
                    </a>
                    <button
                      onClick={() => handleCopyToClipboard(item.shortened)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      Copy
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
