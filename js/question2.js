/* Make a call to https://api.rawg.io/api/games and pass the JSON object it returns to a function called createGames.

For each game object in the results, the createGames function should create the following HTML in a loop. Replace the placeholder values with the relevant properties from each object:

<div class="game">
    <h2>Name of game</h2>
    <img src="/path/to/image" alt="Name of game">
</div>

After the loop, all the HTML that was created should be assigned as the innerHTML value to the element above. */

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games`;

fetch(gamesUrl)
    .then(response => response.json())
    .then(json => createGames(json))
    .catch(error => console.log(error));

function createGames(json) {
    const resultsContainer = document.querySelector(".results");

    const results = json.results;
    console.dir(results);

    let html = "";

    results.forEach(result => {
        let imageUrl = result.background_image;
        let gameName = result.name;

        html += `<div class="game">
                    <h2>${gameName}</h2>
                    <img src="${imageUrl}" alt=${gameName}>
                </div>`;
    });

    resultsContainer.innerHTML = html;
}
