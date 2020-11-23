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