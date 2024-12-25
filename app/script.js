const apiUrl = "https://hp-api.onrender.com/api/characters";

// Fetch character data

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log("characters fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
