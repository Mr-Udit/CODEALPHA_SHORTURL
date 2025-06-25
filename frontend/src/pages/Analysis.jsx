import React, { useState } from "react";
import Header from "../components/Header";

const Analysis = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = event.target[0].value;
    if (!url) {
      alert("Please enter a URL");
      return;
    }

    const shortId = url.substring(url.length - 8,url.length);

    const baseurl = "http://localhost:3000/api/analytics";
    const queryString = new URLSearchParams({ shortId }).toString();
    const queryurl = `${baseurl}?${queryString}`;

    fetch(queryurl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        setAnalyticsData(data);
        console.log("Analytics Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching analytics data:", error);
      });
  };

  return (
    <div>
      <Header />
      <h1 className='home-h1'>URL Analysis</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" placeholder="Enter shortened URL" required />
        <button type="submit">Analyze</button>
      </form>

      {analyticsData && (
        <div className="analytics-result">
          <h3>Analytics Result:</h3>
          <p><strong>Short ID:</strong> {analyticsData.shortId}</p>
          <p><strong>Original URL:</strong> {analyticsData.redirectedUrl}</p>
          <p><strong>Click Count:</strong> {analyticsData.visitHistory.length}</p>
          <p><strong>Created At:</strong> {analyticsData.createdAt}</p>
          <p><strong>Last Clicked At:</strong> {analyticsData.lastClickedAt ? analyticsData.lastClickedAt : "Never"}</p>
          <p><strong>Last Clicked IP:</strong> {analyticsData.lastClickedIp}</p>

        </div>
       )} 
    </div>
  );
};

export default Analysis;
