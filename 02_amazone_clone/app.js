const images = document.querySelectorAll(".header-slider ul img");
// console.log(images)
// images.forEach((img,ind)=>{
// console.log(img,ind)
// })
const prev_btn = document.querySelector(".control-prev");
// console.log(prev_btn)
const next_btn = document.querySelector(".control-next");
// console.log(next_btn)

let n = 0;

function changeSlide() {
  // for (let i = 0; i < images.length; i++) {
  //   // console.log(i);
  //   console.log(images[i]);
  //   images[i].style.display = "none";
  // }

  images.forEach((image) => {
    image.style.display = "none";
  });

  images[n].style.display = "block";
}

changeSlide();

prev_btn.addEventListener("click", function (e) {
  if (n > 0) {
    n--;
  } else {
    n = images.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", function (e) {
  if (n < images.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollConatiner = document.querySelectorAll(".products");
console.log(scrollConatiner);

for (let item of scrollConatiner) {
  item.addEventListener("wheel", function (event) {
    event.preventDefault();
    console.log(event);
    item.scrollLeft += event.deltaY;
  });
}
