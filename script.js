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


let drink = document.querySelectorAll(".drink");
let modal = document.querySelectorAll("#myModal");
let image = document.querySelectorAll("#images");
let modalImg = document.querySelectorAll("#modal-image");
let modalText = document.querySelectorAll("#info");
let close = document.querySelectorAll(".close-button");
let drinkNames = document.querySelectorAll("h3");

for (let i = 0; i < drink.length; i++) {
  image[i].addEventListener("click", function (e) {
    e.preventDefault();
    modal[i].style.display = "block";
    modalImg[i].attributes[0].value = image[i].attributes[0].value;

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

  close[i].addEventListener("click", function (e) {
    e.preventDefault();
    modal[i].style.display = "none";
  });
}
