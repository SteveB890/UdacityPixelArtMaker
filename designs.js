// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizeElement = document.getElementById("sizePicker");
sizeElement.addEventListener("submit", makeGrid);

//called when a cell is clicked. Will fill the cell with the current color
function fillCell(event){
    //get the element that was clicked
    const currentElement = event.target;

    //read the current color from the color picker
    const currentColor = document.getElementById("colorPicker").value;

    //set the backgroundColor of the clicked cell.
    currentElement.style.backgroundColor = currentColor;
}

//this funciton will handle redrawing the grid when the size is changed.
function makeGrid(event) {
    //read the height and width from the html form
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;

    //get the table, row, and cell elements that we will be working 
    var table = document.getElementById("pixelCanvas");
    var newRow;
    var newCell;
    //hide the table to save on reflows as the grid is built
    table.hidden = true;

    //remove all existing rows in the grid
    table.innerHTML = "";

    //create the number of rows required by height
    for (rowNumber=1;rowNumber<=height;rowNumber++){
        newRow = document.createElement("tr");
        newRow.id="GridRow:" + rowNumber;

            //create a TD element to fill the row in with the number of
            //cells specified in width
            for (columnNumber=1;columnNumber<=width;columnNumber++){
                newCell = document.createElement("td");
                newCell.id="GridCell" + columnNumber + "." + rowNumber;
                newCell.addEventListener("click",fillCell,true);
                newRow.appendChild(newCell);
            }

        //once all the cells are added, add the new row to the table.
        table.appendChild(newRow);
    }

    //show the table once the grid is built
    table.hidden = false;

    //prevent the default action from reloading the page
    event.preventDefault();
}
