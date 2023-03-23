const gridContainer = document.getElementById("grid-container");
const gridChangeBtn = document.getElementById("change-grid-btn");
const rgbBtn = document.getElementById("rgb-btn");
const gridBtn = document.getElementById("grid-btn");

let rgbMode = false;
let gridMode = false;
let gridDimensions = 256;


// grid items and functionality 
createGrid(gridDimensions);

function createGrid(gridDimensions) {
    for (let i = 0; i < gridDimensions; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        
        gridItem.addEventListener("mouseenter", () => colorGridItem(gridItem));
        
        gridContainer.appendChild(gridItem);
    }
}

function colorGridItem(gridItem) {
    if(rgbMode) {
        gridItem.style.backgroundColor = createRandomRGBvalue();
    }
    else {
        gridItem.style.backgroundColor = "black";
    }
}

// grid Dimensions button functionality
gridChangeBtn.addEventListener('click', () => {
    let gridPromptAmount = parseInt(prompt("Enter grid amount (max-limit: 100)"));
    let checkedGridPromptAmount = checkGridPromptAmount(gridPromptAmount);
    let newGridDimensions = checkedGridPromptAmount * checkedGridPromptAmount;
    let newGridItemSize = 400 / checkedGridPromptAmount;

    removeAllChildNodes(gridContainer);
    createGrid(newGridDimensions);
    setGridItemDimensions(newGridItemSize);
})

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setGridItemDimensions(newGridItemSize) {
    let gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.style.width = `${newGridItemSize}px`;
        item.style.height = `${newGridItemSize}px`;
    })
}

function checkGridPromptAmount(changeGridPrompt) {
    let promptInputAmount = changeGridPrompt;

    if(isNaN(promptInputAmount)) {
        alert("not a number!");
        return 16;
    }
    else if(promptInputAmount >= 100) {
        return 100;
    } 
    else {
        return promptInputAmount;
    }
}

// RGB color toggle btn
rgbBtn.addEventListener('click', () => {
    rgbMode = !rgbMode;
})

function createRandomRGBvalue() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//Grid mode toggle btn
gridBtn.addEventListener('click', () => {
    let gridProperty = document.getElementsByClassName("grid-item")
    gridMode = !gridMode
    if(gridMode) {
        for (let i = 0; i < gridProperty.length; i++) {
            gridProperty[i].style.border = "1px none black"
        }
    }
    else {
        for (let i = 0; i < gridProperty.length; i++) {
            gridProperty[i].style.border = "1px solid rgba(47, 46, 46, 0.365)"
        }
    }
})



