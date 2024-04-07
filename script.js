let color = 'black';
let size = 16;
let click = false;

// function that makes a grid
function makeGrid(size) {
    let board = document.querySelector(".board"); 
    squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove())
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div")
        row.classList.add("row");
        board.appendChild(row)

        for (let j = 0; j < size; j++) {
            let colum = document.createElement("div")
            colum.classList.add('box');
            row.appendChild(colum);

            // Add hover effect
            colum.addEventListener("mouseover", colorBox);
        }
    }
}

makeGrid(size);

// function that clears a board
function clearBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.background = 'white');
}

// function that changes a color
function changeColor(input) {
    color = input;
}

// function that change color of box
function colorBox() {
    // rgb color
    if (click) {
        if (color === 'rgb') {
            this.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.background = color;
        }
    }
    
}


// function that change a size 
function changeSize() {
    let input = document.getElementById("size_pad");
    size = input.value;
    if (size >= 2 && size <= 100) {
        makeGrid(size);
    } else {
        console.log("Error, too big")
    }
    
}

document.querySelector("body").addEventListener("click", () => {
    click = !click; 
    if (click) {
        document.querySelector('.mode').textContent ="Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring";
    }
})