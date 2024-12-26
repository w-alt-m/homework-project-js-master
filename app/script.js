const apiUrl = "https://hp-api.onrender.com/api/characters";
const $container = document.querySelector("#characters-container");

// Fetch character data

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Loop through each character and add their card to the container
    data.forEach((character) => {
      $container.innerHTML += `
      <div class="character-card">
      <img src="${character.image}" alt="Image of ${character.name}">
      <h3>${character.name}</h3>
      <p><b>House:</b> ${character.house || "Unknown"}</p>
      </div> 
    `;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
