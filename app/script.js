const apiUrl = "https://hp-api.onrender.com/api/characters";

// Fetch character data

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector("#characters-container");

    // Loop through all characters
    data.forEach((character) => {
      console.log("Character Name:", character.name); // Log each name to confirm it's working
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
