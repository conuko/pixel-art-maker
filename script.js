// Create the Grid Table when click on submit button
document.getElementById('sizePicker').onsubmit =  () => {   
    //submit form
    form();
};

// Use the input from width and height to call the makeGrid function
function form() {
    event.preventDefault(); //stop renedring
    // get width for grid
    const gridWidth = document.getElementById('inputWidth').value;
    // get height for grid
    const gridHeight = document.getElementById('inputHeight').value;
}

function makeGrid(width, height) {
    let grid = "";
    // get table to place grid
    const gridTable = document.getElementById('pixelCanvas');
    // Iterate Over rows with the height from the gridHeight input
    for (let i = 0; i < height; i++) {
        // add table row
        grid += '<tr class="row-' + i + '">';
        // Iteration over column with the width from the gridWidth input
        for (let j = 0; j < width; j++) {
            // add table data for columns/cells
            grid += '<td class="cell"></td>';
        }
        // end table row
        grid += '</tr>';
    }
    // place grid in table
    gridTable.innerHTML = grid;

    // function call to add event listener to each cell
    eventForCells();
}

// Event listener of each of grid's cell to make it possible to give color to the clicked cells
function eventForCells() {
    // get all cells
    const numberOfCells = document.getElementsByClassName('cell');
    // get color picker element
    const colorPicker = document.getElementById("colorPicker");
    // loop over all cells
    for (let i = 0; i < numberOfCells.length; i++) {
        // give the clicked cell the with "colorPicker" choosen color
        numberOfCells[i].addEventListener("click", (event) => {
            let cellClick = event.target;
            cellClick.style.backgroundColor = colorPicker.value;
        });
    }
}