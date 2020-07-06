console.log("Breathe, you got this!")

// create your nouns or variables
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

// var for the drink and  modal divs
let drink = document.querySelectorAll(".drink")
let modal = document.querySelectorAll("#myModal")

// var for the original image (so to be used as the modal image)
let image = document.querySelectorAll("#images")

// var for the modal image 
let modalImg = document.querySelectorAll("#modal-image")

// var for the modal info a.k.a. the text
let modalText = document.querySelectorAll("#info")

// var for closing button
let close = document.querySelectorAll


// create for loop for every image div, then add click event listener to image to prompt the modal to open once clicked

for (let i=0; i < drink.length; i++) {

    image[i].addEventListener('click', function(e) {
        modal.style.display = "block"
        modalImg.src = image.src
        console.log(e)
    })
}