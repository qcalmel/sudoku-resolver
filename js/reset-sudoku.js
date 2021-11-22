const resetSudokuGrid = () => {
    document.querySelectorAll('.cell input').forEach((e)=> e.value = '')
}
document.getElementById("button-reset").onclick = () => resetSudokuGrid()