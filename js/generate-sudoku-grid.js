const generateGridTest = () => {
    let sudokuGrid = ""
    for (let i = 0 ; i < 81 ; i++ ){
        sudokuGrid += `<div class="cell" id="${i}"><input type="text"></div>`
    }
    return sudokuGrid
}
document.getElementById("sudoku-grid").innerHTML = generateGridTest()