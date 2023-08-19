import "./styles.css";

import { dataBooks } from "./data.mjs";

// Select the HTML elements
const containerBook = document.getElementById("container-book");

const form = document.querySelector("form");


function displayBooks (dataBooks) {
  // Clear existing book divs
  containerBook.innerHTML = '';
  
  for (const book of dataBooks) {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-div"
    // bookDiv.dataset.state = "active";
  
    const title = document.createElement("h2");
    title.textContent = "Title: " + book['title'];
    bookDiv.appendChild(title)
  
    const author = document.createElement("h3")
    author.textContent = "Author: " + book["author"]
    bookDiv.appendChild(author)
  
    const genre = document.createElement("h3");
    genre.textContent = "Genre: " + book["genre"];
    bookDiv.appendChild(genre);
  
    containerBook.appendChild(bookDiv)
  }
}

function filterByGenre(dataBooks, input) {
  return dataBooks.filter(elem => elem["genre"] === input)
}

form.addEventListener("submit", (event) =>{
  event.preventDefault()
  const selectedGenre = form.genre.value;
 
  if (selectedGenre === "all") {
    displayBooks(dataBooks)
  }
  else if (selectedGenre === "Romance") {
    const romanceBooks = filterByGenre(dataBooks, "Romance")
    displayBooks(romanceBooks)
  }
  else if (selectedGenre === "Classic") {
    const classicBooks = filterByGenre(dataBooks, "Classic")
    displayBooks(classicBooks)
  }
  else if (selectedGenre === "Fantasy") {
    const fantasyBooks = filterByGenre(dataBooks, "Fantasy")
    displayBooks(fantasyBooks)
  }
})


