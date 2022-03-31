function randomColor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const COLOR = `rgb(${R},${G},${B})`;
    
    return COLOR;
}

function createGrid(GRID_SIZE) {
    let gridHouse = document.querySelector('#gridHouse');
    gridHouse.innerHTML = null;
    let gridWidth = 720/GRID_SIZE;
    
    for (let count = 0; count < GRID_SIZE; count++) {
        let newDiv = document.createElement('div');
        newDiv.style.width = gridWidth;
        for (let count2 = 0; count2 < GRID_SIZE; count2++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = `${gridWidth-2}px`;
            cell.style.height = `${gridWidth-2}px`;
            newDiv.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                if (cell.style.backgroundColor == "") {
                    cell.style.backgroundColor = randomColor();
                }
                
                else {
                    let color = cell.style.backgroundColor;
                    const numbersString = color.substring(4, color.length-1);
                    const colorNumbers = numbersString.split(',');
                    
                    let R = Number(colorNumbers[0]);
                    let G = Number(colorNumbers[1]);
                    let B = Number(colorNumbers[2]);
                    
                    R -= 25; G -= 25; B -= 25;
                    
                    const NEW_COLOR = `rgb(${R},${G},${B})`;
                    cell.style.backgroundColor = NEW_COLOR;
                }
            });
        }
        gridHouse.appendChild(newDiv);
    }  
}

createGrid(16);

let resetButton = document.querySelector('#btn-reset');

resetButton.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size');
    
    createGrid(newSize);
});