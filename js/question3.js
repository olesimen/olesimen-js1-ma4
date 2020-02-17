/* Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.

 <div class="container">
    h1>Name of game</h1>
    <div class="image" style="background-image:('https://via.placeholder.com/1000')"
    ></div>
    <div class="description">Description goes here</div>
 </div><

Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.

Use either the background_image or background_image_additional property as the background image of the <div class="image"> element. */

const gameUrl = "https://api.rawg.io/api/games/4200";

fetch(gameUrl)
    .then(response => response.json())
    .then(json => createGameDetails(json))
    .catch(error => console.log(error));

function createGameDetails(json) {
    // console.dir(json);

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const image = document.querySelector(".image");
    if (json.background_image) {
        image.style.backgroundImage = `url("${json.background_image}")`;
    } else if (json.background_image_additional) {
        image.style.backgroundImage = `url("${json.background_image_additional}")`;
    }

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}
