/* Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.

 <div class="container">
    h1>Name of game</h1>
    <div class="image" style="background-image:('https://via.placeholder.com/1000')"
    ></div>
    <div class="description">Description goes here</div>
 </div><

Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.

Use either the background_image or background_image_additional property as the background image of the <div class="image"> element. */

const gamesUrl = "https://api.rawg.io/api/games/4200";

fetch(gamesUrl)
    .then(response => response.json())
    .then(json => createGamesDetails(json))
    .catch(error => console.log(error));

function createGamesDetails(json) {
    const results = json.results;
    console.dir(results);

    const heading = document.querySelector("h1");
    const imageContainer = document.querySelector(".image");
    const descriptionContainer = document.querySelector(".description");

    results.forEach(result => {
        let gameName = result.name;
        let imageUrl = "https://via.placeholder.com/1000";
        let gameDescription = result.description;

        if (result.background_image) {
            imageUrl = result.background_image;
        } else if (result.background_image_additional) {
            imageUrl = result.background_image_additional;
        }
    });

    heading.innerText.replace("${gameName}");
    imageContainer.style("background-image") = `${imageUrl}`;
    descriptionContainer.innerText.replace("${gameDescription}");
}
