const generateGridTest = () => {
    let htmlGrid = ""
    for (let i = 0 ; i < 81 ; i++ ){
        htmlGrid += `<div class="cell" id="${i}"><input type="text"></div>`
    }
    htmlGrid += ""
    return htmlGrid
}
document.getElementById("sudoku-grid").innerHTML = generateGridTest()