console.log("Breathe, you got this!")

// create your nouns or variables
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
let url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mint_julep"
let url3 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito"
let url4 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=moscow%20mule"
let url5 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aperol%20spritz"



// var for the drink and  modal divs
let drink = document.querySelectorAll(".drink")
let modal = document.querySelectorAll("#myModal")

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

// let name = document.querySelectorAll("h3")




// JSON data
// modalText.addEventListener("click", loadInfo)

// function loadInfo(e) {
//     e.preventDefault()
//     fetch(url)
//         .then(res => {
//             console.log("Success!", res)
//             return res.json()
//         })
//         .then(data => {
//             console.log(data.url)
//         })
//         .catch(err => {
//             console.log("Error!", err)        
//         })
// }


// create for loop for every image div, then add click event listener to image to prompt the modal to open once clicked
for (let i=0; i < drink.length; i++) {

    image[i].addEventListener('click', function(e) {
        e.preventDefault()
        console.log(e)
        modal[i].style.display = "block"
        modalImg[i].attributes[0].value = image[i].attributes[0].value


        fetch(url)
            .then(res => {
                console.log("Success!", res)
                return res.json()
        })
            .then(data => {
                console.log(data.drinks[i].strDrink)
                let name = data.drinks[i].strDrink
                modalText[i].innerHTML = `You've selected ${name} !`
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