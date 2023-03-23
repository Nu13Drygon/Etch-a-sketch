const gridContainer = document.getElementById("grid-container")
const gridChangeBtn = document.getElementById("change-grid-btn")
let gridDimensions = 256


// grid items and functionality 
createGrid(gridDimensions)

function createGrid(gridDimensions) {
    for (let i = 0; i < gridDimensions; i++) {
        let gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")
        
        gridItem.addEventListener("mouseenter", () => colorGridItem(gridItem))
        
        gridContainer.appendChild(gridItem)
    }
}

function colorGridItem(gridItem) {
    gridItem.classList.add("grid-color")
}

// grid button functionality
gridChangeBtn.addEventListener('click', () => {
    let gridPromptAmount = parseInt(prompt("Enter grid amount (max-limit: 100)"))
    let checkedGridPromptAmount = checkGridPromptAmount(gridPromptAmount)
    // sets new dimension of grid
    let newGridDimensions = checkedGridPromptAmount * checkedGridPromptAmount
    // calculates new size of grid-item 
    let newGridItemSize = 400 / checkedGridPromptAmount
    removeAllChildNodes(gridContainer)
    createGrid(newGridDimensions)
    setGridItemStyles(newGridItemSize)
})

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function setGridItemStyles(newGridItemSize) {
    let gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        item.style.width = `${newGridItemSize}px`
        item.style.height = `${newGridItemSize}px`
    })
}

function checkGridPromptAmount(changeGridPrompt) {
    let promptInputAmount = changeGridPrompt
    if(isNaN(promptInputAmount)) {
        alert("not a number!")
        return 16
    }
    else if(promptInputAmount >= 100) {
        return 100
    } 
    else {
        return promptInputAmount
    }
}


