const gridContainer = document.getElementById('grid-container')




for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement("div")
    gridItem.classList.add("grid-item")

    gridItem.addEventListener("mouseenter", () => colorGridItem(gridItem))
    
    gridContainer.appendChild(gridItem)
}

function colorGridItem(gridItem) {
    gridItem.classList.add("grid-color")
}
