console.log("Breathe, you got this!")

// create your nouns or variables
let links = [ 

    {
    name: "Margarita",        
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
},
    {
    name: "Mint Julep",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mint_julep"
},
    {
    name: "Mojito",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito"
},
    {
    name: "Moscow Mule",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=moscow%20mule"
},
    {
    name: "Aperol Spritz",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol%20spritz"
    }
]


// var for the drink and  modal divs
let drink = document.querySelectorAll(".drink")
let modal = document.querySelectorAll("#myModal")
console.log(modal)
// var for the original image (so to be used as the modal image)
let image = document.querySelectorAll("#images")
// console.log(image[0].attributes[0].value)

// var for the modal image 
let modalImg = document.querySelectorAll("#modal-image")
// console.log(modalImg[0].attributes[0].value)

// var for the modal info a.k.a. the text
let modalText = document.querySelectorAll("#info")
console.log(modalText[0].innerText)

// var for closing button to close modal
let close = document.querySelectorAll(".close-button")

let drinkName = document.querySelectorAll("h3")



// create for loop for every image div, then add click event listener to image to prompt the modal to open once clicked
for (let i=0; i < drink.length; i++) {

    image[i].addEventListener('click', function(e) {
        e.preventDefault()
        modal[i].style.display = "block"
        modalImg[i].attributes[0].value = image[i].attributes[0].value


        fetch(links[i].url)
            .then(res => {
                console.log("Success!", res)
                return res.json()
        })
            .then(data => {
                console.log(data.drinks[i].strIngredient2)
                let name = data.drinks[i].strDrink
                modalText[i].innerHTML = `You've selected ${name} !`
                let ingredients = document.createElement("p")
                ingredients.innerHTML = `Ingredients include: ${data.drinks[i].strIngredient1}. ${data.drinks[i].strIngredient2}. ${data.drinks[i].strIngredient3}. ${data.drinks[i].strIngredient4}.`
                modalText[i].appendChild(ingredients)
                console.log(ingredients)
        })
            .catch(err => {
                console.log("Error!", err)        
        })
    }) 

    close[i].addEventListener('click', function(e) {
        e.preventDefault()
        modal[i].style.display = "none"
    })

}