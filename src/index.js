import "./style.css";

const API_KEY = "YOUR_KEY_HERE";

async function fetchWeather(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&unitGroup=metric`;

  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  console.log("Raw API data:", data);
  return data;
}

