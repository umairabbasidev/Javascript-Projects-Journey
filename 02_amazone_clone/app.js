// import img from "./assets/box1-1.jpg";

let cards = [
  {
    h3: "Free international returns",
    img: "./assets/box1-1.jpg",
    btn: "Shop More",
  },
  {
    h3: "Lunar New Year",
    img: "./assets/box1-2.jpg",
    btn: "Shop More",
  },
  {
    h3: "Toy under $25",
    img: "./assets/box1-3.jpg",
    btn: "Shop More",
  },
  {
    h3: "Deals in PCs",
    img: "./assets/box1-4.jpg",
    btn: "Shop More",
  },
  {
    h3: "Grooming Products",
    img: "./assets/box2-1.jpg",
    btn: "Shop More",
  },
  {
    h3: "Latest Devices",
    img: "./assets/box2-2.jpg",
    btn: "Shop More",
  },
  {
    h3: "Pets Food",
    img: "./assets/box2-3.jpg",
    btn: "Shop More",
  },
  {
    h3: "Smart Watches",
    img: "./assets/box2-4.jpg",
    btn: "Shop More",
  },
];

const images = document.querySelectorAll(".header-slider ul img");
// console.log(images)
const prev_btn = document.querySelector(".control-prev");
// console.log(prev_btn)
const next_btn = document.querySelector(".control-next");
// console.log(next_btn)

let n = 0;

function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    // console.log(i);
    // console.log(images[i]);
    images[i].style.display = "none";
  }

  images[n].style.display = "block";
}

changeSlide();

prev_btn.addEventListener("click", function (e) {
  if (n > 0) {
    console.log(n > 0, n);
    n--;
  } else {
    n = images.length - 1;

    console.log(n);
  }
  changeSlide();
});

next_btn.addEventListener("click", function (e) {
  if (n < images.length - 1) {
    console.log(n < images.length - 1, n);
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

let mainBox = document.createElement("div");
cards.map((card) => {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let p = document.createElement("p");

  mainBox.style.display = "flex";
  mainBox.style.justifyContent = "center";

  mainBox.style.gap = "1rem";
  mainBox.style.margin = "auto";
  // mainBox.style.maxWidth = "95%"
  mainBox.style.alignItems = "center";
  mainBox.style.flexWrap = "wrap";
  div.style.backgroundColor = "white";
  div.style.borderRadius = "2px";
  div.style.padding = "20px";
  // mainBox.style.backgroundColor = "red"
  h3.innerText = card.h3;
  img.src = card.img;
  img.style.width = "16rem";
  h3.style.marginBottom = "8px";
  p.innerText = card.btn;
  p.style.cursor = "pointer";
  p.style.marginTop = "8px";
  mainBox.style.position = "absolute";
  mainBox.style.top = "55%";

  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(p);
  mainBox.appendChild(div);
  // console.log(div)
  document.body.appendChild(mainBox);
});

// let h1 = document.createElement("h1");
// h1.innerText = "Umair Abbasi";
// document.body.appendChild(h1);
