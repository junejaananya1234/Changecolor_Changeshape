let dataColorChange = document.querySelector('.header_1') ;
let dataChangeShape = document.querySelector('.header_12');
let changeColorButton= document.querySelector('#changeColor');
let changeShapeButton=document.querySelector('#changeShape');


const shapes = ['header_12','triangle','star','hexagon','heart'];


// console.log(dataColorChange,changeColorButton,changeShapeButton)

let currentIndex = 0;
changeColorButton.addEventListener('click', function(){
    let randomColor = getRandomColor();
    dataColorChange.style.backgroundColor = randomColor;
});
let toggleState=true;
changeShapeButton.addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % shapes.length;
    const currentShape = shapes[currentIndex];
    dataChangeShape.setAttribute('class', currentShape);
})
// currentIndex = (currentIndex + 1) % shapes.length;
// const currentShape = shapes[currentIndex];
// dataChangeShape.setAttribute('class', currentShape);
function getRandomHSLColor(){
    let hue = Math.floor(Math.random() * 360); 
    let saturation = Math.floor(Math.random() * 101); 
    let lightness = Math.floor(Math.random() * 101); 

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}