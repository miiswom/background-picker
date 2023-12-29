//SKINS//

const skinOne = document.getElementById("skin-1");
const skinTwo = document.getElementById("skin-2");
const skinThree = document.getElementById("skin-3");
const skinFour = document.getElementById("skin-4");
const skinFive = document.getElementById("skin-5");
const skinSix = document.getElementById("skin-6");

const face = document.getElementById('face');

skinOne.addEventListener('click', () => {
  face.style.background = '#472818'
})

skinTwo.addEventListener('click', () => {
  face.style.background = '#6B3B24'
})

skinThree.addEventListener('click', () => {
  face.style.background = '#8E522D'
})

skinFour.addEventListener('click', () => {
  face.style.background = '#A86E3C'
})

skinFive.addEventListener('click', () => {
  face.style.background = '#E7A575'
})

skinSix.addEventListener('click', () => {
  face.style.background = '#F8DDD4'
})

//LIPS //

const lipstickOne = document.getElementById("lipstick-1");
const lipstickTwo = document.getElementById("lipstick-2");
const lipstickThree = document.getElementById("lipstick-3");
const lisptickFour = document.getElementById("lipstick-4");
const lipstickFive = document.getElementById("lipstick-5");
const lipstickSix = document.getElementById("lipstick-6");

const lips = document.getElementById('lips');

const para = document.getElementById('lipstick-name')

lipstickOne.addEventListener('click', () => {
  lips.style.fill = "#762126";
  para.innerHTML = "Intense Burnt Orange."
  ;
})

lipstickTwo.addEventListener('click', () => {
  lips.style.fill = "#CA5E4F";
  para.innerHTML = "Blue Midtone Rosey Pink."
  ;
})

lipstickThree.addEventListener('click', () => {
  lips.style.fill = "#D01E29";
  para.innerHTML = "..."
  ;
})

lisptickFour.addEventListener('click', () => {
  lips.style.fill = "#A92922";
  para.innerHTML = "..."
  ;
})

lipstickFive.addEventListener('click', () => {
  lips.style.fill = "#CE8467";
  para.innerHTML = "..."
  ;
})

lipstickSix.addEventListener('click', () => {
  lips.style.fill = "#ED3921";
  para.innerHTML = "..."
  ;
})