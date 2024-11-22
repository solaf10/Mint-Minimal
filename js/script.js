// try slider
/* const images = document.querySelector(".partners .container");
var count =0;
setInterval(() => {
    count++;
  images.style.transform = `translateX(-${count*100}px)`;
}, 1000); */
// test2
/* const images = document.querySelectorAll(".partners .image");
var count = 0;
setInterval(() => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translateX(-${count * 75}px)`;
  }
  if (count <= 6) {
    count++;
  } else {
    count = 0;
  }
}, 1000);
 */
// filter in work section
const shuffle = document.querySelector(".work .shuffle ");
const images = document.querySelectorAll(".work .images > .image");
const imagesHolder = document.querySelector(".work .images");
const moreBtn = document.querySelector(".work span.more");
const dropDown = document.querySelector(".work .drop-down");
var content = [];
/* work.addEventListener("click",(e)=>{
  if(e.target.classList.tagName.toLocaleLowerCase()=="li"){

  }
}) */
function showCertainImages(cnt, images) {
  imagesHolder.innerHTML = "";
  content = [];
  for (let i = 0; i < cnt; i++) {
    content.push(images[i]);
    imagesHolder.appendChild(images[i]);
  }
}
window.addEventListener("load", () => {
  showCertainImages(6, images);
});
moreBtn.addEventListener("click", (e) => {
  moreBtn.classList.toggle("show-less");
  // finding the filtered images
  let filteredOn, filterdImages;
  for (let i = 0; i < shuffle.children.length; i++) {
    if (shuffle.children[i].classList.contains("active")) {
      filteredOn = shuffle.children[i].innerHTML.toLocaleLowerCase();
    }
  }
  if (filteredOn == "all") {
    filterdImages = images;
  } else {
    filterdImages = Array.from(images).filter((image) =>
      image.classList.contains(filteredOn)
    );
  }
  if (moreBtn.classList.contains("show-less")) {
    moreBtn.innerText = "SHOW ME LESS";
    showCertainImages(filterdImages.length, filterdImages);
  } else {
    moreBtn.innerText = "SHOW ME MORE";
    if (filterdImages.length > 6) {
      showCertainImages(6, filterdImages);
    } else {
      showCertainImages(filterdImages.length, filterdImages);
    }
  }
});
shuffle.addEventListener("click", (e) => {
  // filtering the images based on there type
  if (e.target.tagName == "LI") {
    if (e.target.innerHTML.toLocaleLowerCase() == "all") {
      showCertainImages(6, images);
      moreBtn.style.display = "inline-block";
    } else {
      const imagesAsArray = Array.from(images);
      let filterdImages = imagesAsArray.filter((image) =>
        image.classList.contains(e.target.innerText.toLowerCase())
      );
      content = filterdImages;
      imagesHolder.innerHTML = "";
      filterdImages.forEach((image) => imagesHolder.appendChild(image));
      if (filterdImages.length <= 6) {
        moreBtn.style.display = "none";
      }
    }
    // toggling the active class on lis
    for (let i = 0; i < shuffle.children.length; i++) {
      if (
        shuffle.children[i].classList.contains("active") &&
        shuffle.children[i] != e.target
      ) {
        shuffle.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
  }
  // filtering the images based on there date
  else {
    dropDown.style.display = "block";
  }
});
dropDown.addEventListener("mouseleave", (e) => {
  dropDown.style.display = "none";
});
dropDown.addEventListener("click", (e) => {
  showCertainImages(content.length, content.reverse());
});
// burger menu in navbar
const burgerIcon = document.querySelector("header .burger-icon");
const menu = document.querySelector("header .links");
burgerIcon.addEventListener("click", (e) => {
  burgerIcon.classList.toggle("close");
  if (e.target.classList.contains("close")) {
    burgerIcon.className = "burger-icon fa fa-close close";
    menu.style.display = "flex";
  } else {
    burgerIcon.className = "burger-icon fa fa-navicon";
    menu.style.display = "none";
  }
});
// darkMode
const darkModeIcon = document.querySelector("header .icon");
darkModeIcon.addEventListener("click", () => {
  darkModeIcon.classList.toggle("dark");
  if (darkModeIcon.classList.contains("dark")) {
    darkModeIcon.className = "dark icon material-icons";
    darkModeIcon.innerHTML = "wb_sunny";
    darkModeIcon.style.transform = "rotate(-45deg)";
    document.body.classList.add("dark");
  } else {
    darkModeIcon.innerHTML = "";
    darkModeIcon.className = "icon fas fa-moon";
    darkModeIcon.style.transform = "rotate(0deg)";
    document.body.classList.remove("dark");
  }
});
