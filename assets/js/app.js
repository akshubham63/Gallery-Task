const cl = console.log;

// Declarations
const selectColor = document.getElementById("selectColor");
const all = Array.from(document.querySelectorAll(".all"));
const img = Array.from(document.querySelectorAll(".img"));
const allImg = Array.from(document.querySelectorAll(".allImg"));
const selectAirCarft = document.getElementById("selectAirCarft");

// callback functions

const onColorHandler = (eve) => {
    let color = eve.target.value;
    all.forEach(eve => eve.classList.add("d-none"));
    let colorDivs = Array.from(document.querySelectorAll("." + color));
    colorDivs.forEach(eve => eve.classList.remove("d-none"));
}; 

const onAirCarftHandler = (eve) => {
    let airCarft = eve.target.value;
    allImg.forEach(eve => eve.classList.add("d-none"));
    let airCraftImg = Array.from(document.querySelectorAll("." + airCarft));
    airCraftImg.forEach(eve => eve.classList.remove("d-none"));
};

// Events
selectColor.addEventListener("change",onColorHandler);
selectAirCarft.addEventListener("change",onAirCarftHandler);