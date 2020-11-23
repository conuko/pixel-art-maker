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