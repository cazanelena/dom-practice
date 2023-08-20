// import "./styles.css";
// import {products} from "./data.mjs"

// // Select html elements
// const form = document.querySelector("form")
// const mainContainer = document.getElementById("main-container")

// // Function to display the products
// function displayProducts(products) {
//   // Clear the existing divs
//   mainContainer.innerHTML = "";

//   for (const product of products) {
//     const productDiv = document.createElement("div");
//     const name = document.createElement("h2");
//     name.textContent = product["name"];
//     productDiv.appendChild(name)

//     const image = document.createElement("img");
//     image.src = product["imageUrl"]
//     productDiv.appendChild(image)

//     const btnDetails = document.createElement("BUTTON")
//     const textBtn = document.createTextNode("View Details")
//     btnDetails.id = product["id"]
//     btnDetails.className = "btn-details"
//     btnDetails.appendChild(textBtn)
    

//     productDiv.appendChild(btnDetails) 
//     mainContainer.appendChild(productDiv)
//   }

// }
// // Function to filter by category
// function filterCategory(dataproducts, input) {
//   return dataproducts.filter(elem => elem["category"] === input)
// }

// // Event handler for buttons
// function viewDetails(btns) {
//   for (const btn of btns) {
//     btn.addEventListener("click", (event) => {
//       let idBtn = event.target.id;
//       const description = getDescription(idBtn)
//       const descriptionHtml = document.createElement("h3");
      
//       descriptionHtml.textContent = description
//       const parentDiv = event.target.parentElement
//       parentDiv.appendChild(descriptionHtml)

//     })
//   }
// }

// // Get Description based on id
// function getDescription(id) {
//   for (const product of products) {
//     if (product["id"] == id) {
//       return product["description"]
//     }
//   }
// }

// // Event listner for the form
// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const valueForm  = form.category.value

//   if (valueForm === 'All') {
//     displayProducts(products)
//     // Add event listner for the buttons
//     const btns = document.querySelectorAll(".btn-details")

//     viewDetails(btns)
//   }
//   else if(valueForm === "Electronics") {
//     const electronicProducts = filterCategory(products, "Electronics");
//     displayProducts(electronicProducts)
    
//   }
//   else if(valueForm === "Clothing") {
//     const clothingProducts = filterCategory(products, "Clothing");
//     displayProducts(clothingProducts)
//   }
//   else if(valueForm === "Home & Kitchen") {
//     const homeAndKitchenProducts = filterCategory(products, "Home & Kitchen");
//     displayProducts(homeAndKitchenProducts)
//   }
// })

// Refactored the code from above

import "./styles.css";
import { products } from "./data.mjs";

// Select html elements
const form = document.querySelector("form");
const mainContainer = document.getElementById("main-container");

// Map category names to filter values
const categoryFilters = {
  All: products,
  Electronics: "Electronics",
  Clothing: "Clothing",
  "Home & Kitchen": "Home & Kitchen",
};

// Function to display the products
function displayProducts(products) {
  mainContainer.innerHTML = "";

  for (const product of products) {
    const productDiv = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = product["name"];
    productDiv.appendChild(name);

    const image = document.createElement("img");
    image.src = product["imageUrl"];
    productDiv.appendChild(image);

    const btnDetails = document.createElement("button");
    btnDetails.textContent = "View Details";
    btnDetails.dataset.id = product["id"];
    btnDetails.className = "btn-details";
    productDiv.appendChild(btnDetails);

    mainContainer.appendChild(productDiv);
  }
}

// Event handler for buttons
mainContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-details")) {
    const id = event.target.dataset.id;
    const description = getDescription(id);
    const descriptionHtml = document.createElement("h3");
    descriptionHtml.textContent = description;

    event.target.parentElement.appendChild(descriptionHtml);
  }
});

// Get Description based on id
function getDescription(id) {
  const product = products.find((product) => product["id"] == id);
  return product ? product["description"] : "";
}

// Event listener for the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valueForm = form.category.value;
  const filteredProducts =
    valueForm === "All"
      ? products
      : products.filter((product) => product["category"] === categoryFilters[valueForm]);

  displayProducts(filteredProducts);
});
