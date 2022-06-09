const rightButton = document.querySelector("#rightBtn");
const leftButton = document.querySelector("#leftBtn");
const pictures = document.querySelectorAll(".img-slider img");
const text = document.querySelectorAll(".text-slider");
const toggleButton = document.getElementById("toggle-nav");
const navbar = document.getElementById("navbar");

//Close mobile navbar  if width is larger than 900px

window.onresize = function resizeWindow(){
  if(window.innerWidth>900){
    navbar.classList.remove("show");
    document.querySelector("body").classList.remove("menu-open");
    toggleButton.classList.remove("active");
  }
}

//Hamburger menu and background opacity
toggleButton.addEventListener("click", () =>{
  navbar.classList.toggle("show");
 document.querySelector("body").classList.toggle("menu-open");
 toggleButton.classList.toggle("active");
});



//Image and text slider

let imgNum = 0;
let textNum = 0;

rightButton.addEventListener("click" , () =>{
displayNone();
imgNum += 1;
if(imgNum===pictures.length){
  imgNum = 0;
}
pictures[imgNum].style.display = "block";

textNum += 1;
if(textNum===text.length){
  textNum = 0;
}
text[textNum].style.display = "block";
})


leftButton.addEventListener("click" , ()=>{
  displayNone();
  imgNum -= 1;

  if(imgNum === -1){
  imgNum = pictures.length - 1;
  }
pictures[imgNum].style.display = "block";

textNum -=1;
if(textNum === -1){
  textNum = text.length -1;
}
text[textNum].style.display = "block";

})

const displayNone = () =>{
  pictures.forEach((img) =>{
    img.style.display = "none";
  })

  text.forEach((text) => {
    text.style.display = "none";
  })

}


