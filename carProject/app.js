let carData = [
  {
    model: "Toyota Yaris",
    details: {
      colors: [
        "Red",
        "orange",
        "White",
        "Silver Metallic",
        "Attitude Black",
      ],
      engine: "1.5L 4-cylinder",
      css: "Compact sedan",
      price: "$17,500",
      reviews: "131 Reviews",
      image:
        "https://cache2.pakwheels.com/system/car_generation_pictures/6392/medium/Toyota_Yaris_Front_Right_Angled.jpg?1650541837",
    },
  },
  {
    model: "Toyota Hilux",
    details: {
      colors: ["Black", "Silver", "Gray"],
      engine: "1.8L 4-cylinder",
      css: "Compact sedan",
      price: "$20,000",
      image:
        "https://cache2.pakwheels.com/system/car_generation_pictures/6006/medium/Revo_-_PNG.png?1635483853",
    },
  },
  {
    model: "Toyota Fortuner",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$24,000",
      image:
        "https://cache4.pakwheels.com/system/car_generation_pictures/7335/medium/Fortuner_-_PNG.png?1677568997",
    },
  },
  {
    model: "Toyota Parado",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$84,000",
      image:
        "https://cache1.pakwheels.com/system/car_generation_pictures/5245/medium/prado.jpg?1595594818",
    },
  },
  {
    model: "Toyota Land Cruiser",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$104,000",
      image:
        "https://cache1.pakwheels.com/system/car_generation_pictures/6008/medium/Land_Cruiser_300_-_PNG.png?1635484577",
    },
  },
  {
    model: "Toyota Hiace",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$104,000",
      image:
        "https://cache2.pakwheels.com/system/car_generation_pictures/5443/medium/hiace-cover.jpg?1615979645",
    },
  },

  {
    model: "Toyota Prius",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$104,000",
      image:
        "https://cache1.pakwheels.com/system/car_generation_pictures/7604/medium/20230110_01_06.jpg?1701413618",
    },
  },

  {
    model: "Toyota Camry",
    details: {
      colors: ["Attitude Black", "Silver", "Strong Blue"],
      engine: "2.5L 4-cylinder",
      css: "Mid-size sedan",
      price: "$104,000",
      image:
        "https://cache2.pakwheels.com/system/car_generation_pictures/6423/medium/Toyota_Camry_Front.jpg?1651129122",
    },
  },
];

// let divOne = document.createElement("div")

// divOne.className = "outerMain"
// divOne.style.backgroundColor = "red"
// divOne.style.padding = "1rem"
// divOne.style.display = "flex"
// document.body.appendChild(divOne)
// console.log(divOne)

let container = document.createElement("div");
container.className = "main-container"; // Add a class for styling if needed
container.style.display = "flex";
container.style.flexWrap = "wrap"; // Allow cards to wrap to the next row if needed
container.style.justifyContent = "space-around"; // Center the cards horizontally

// Append the main container div to the body
document.body.appendChild(container);

carData.map((car) => {
  // Create main container div
  let div = document.createElement("div");
  div.className = "main card flex-container ";
  // console.log(div);
  div.style.width = "18rem";

  // Create h3 element for car model
  let h3 = document.createElement("h3");
  h3.innerHTML = car.model;

  // Create p element for car price
  let p = document.createElement("p");
  p.innerHTML = car.details.price;

  // Create img element for car image
  let img = document.createElement("img");
  img.src = car.details.image;
  img.alt = "";


let btn = document.createElement("button")
btn.innerText = "red"
btn.value = "https://cache2.pakwheels.com/system/car_generation_pictures/6423/medium/Toyota_Camry_Front.jpg?1651129122"
btn.onclick = ()=>{img.src = btn.value} 
console.log(btn)

  // Append elements to main container div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(btn);

  // Append main container div to body
  container.appendChild(div);

  // return 3
});
