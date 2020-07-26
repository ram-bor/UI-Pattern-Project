// create your nouns or variables
let links = [
  {
    name: "Margarita",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
  },
  {
    name: "Mint Julep",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mint_julep",
  },
  {
    name: "Mojito",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito",
  },
  {
    name: "Moscow Mule",
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=moscow%20mule",
  },
  {
    name: "Aperol Spritz",
    url:
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol%20spritz",
  },
];

// var for the drink and  modal divs
let drink = document.querySelectorAll(".drink");
let modal = document.querySelectorAll("#myModal");
// var for the original image (so to be used as the modal image)
let image = document.querySelectorAll("#images");
// console.log(image[0].attributes[0].value)

// var for the modal image
let modalImg = document.querySelectorAll("#modal-image");
// console.log(modalImg[0].attributes[0].value)

// var for the modal info a.k.a. the text
let modalText = document.querySelectorAll("#info");
// console.log(modalText[0].innerText);

// var for closing button to close modal
let close = document.querySelectorAll(".close-button");

let drinkNames = document.querySelectorAll("h3");
// console.log(drinkNames[1].textContent);

// create for loop for every image div, then add click event listener to image to prompt the modal to open once clicked
for (let i = 0; i < drink.length; i++) {
  image[i].addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e);
    modal[i].style.display = "block";
    modalImg[i].attributes[0].value = image[i].attributes[0].value; // image for modal

    const drinkName = drinkNames[i].textContent;

    if (links[i].name == drinkName) {
      fetch(links[i].url)
        .then((res) => {
          console.log("Success!", res);
          return res.json();
        })
        .then((data) => {
          // console.log(data.drinks[0].strIngredient1);
          console.log(data.drinks[0]);
          let name = data.drinks[0].strDrink;
          console.log(name);
          modalText[i].innerHTML = `${name}`;
          let ingredients = document.createElement("p");
          let instructions = document.createElement("p");
          ingredients.innerHTML = `Ingredients: ${data.drinks[0].strIngredient1}. ${data.drinks[0].strIngredient2}. ${data.drinks[0].strIngredient3}. ${data.drinks[0].strIngredient4}.`;
          instructions.innerHTML = `Instructions: ${data.drinks[0].strInstructions}`;
          modalText[i].appendChild(ingredients);
          modalText[i].appendChild(instructions);
          console.dir(ingredients.innerHTML);
          console.dir(instructions.innerHTML);
        })
        .catch((err) => {
          console.log("Error!", err);
        });
    }
  });

  // close button click event listener
  close[i].addEventListener("click", function (e) {
    e.preventDefault();
    modal[i].style.display = "none";
  });
}
