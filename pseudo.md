**HTML & CSS**

1. Create and format structure of page to contain images of cocktails, modals
   and close button

2. Populate text information to divs

3. Style modal boxes to appear when images are clicked. Make background dim and
   transparent.

4. Style image with timed zoom animation property, hover properties attached to
   images and close button

5. Add media styling to create blocks whenever browser width decreases in size

**Javascript**

I will be using the Cocktail API as part of my UI project. I will use the modal
UI pattern to incorporate functionality that displays cocktail names +
information once image is clicked. Link = "https://www.thecocktaildb.com/api".

1. Create array of names and links related to each particular drink

2. Create variables using DOM manipulation for images, modals, buttons, and text
   information

3. Create for loop that iterates through links array an adds click event
   listener to each element.

4. Click event listener should display correct image and size on the browser
   once clicked.

5. Use fetch method to obtain link and drink information. It should return the
   chosen drink's name and specific ingredients. Do this by creating an if
   statement where if the link's name matches the name of the drink, then return
   the appropriate url about that particular drink along.

6. In fetch method, return the correct JSON object, create elements to hold
   drink information to display in modal such as name, ingredients and
   instructions.

7. Fetch method will be located inside click event in order to return all
   appropriate API data needed to display information underneath the image.
