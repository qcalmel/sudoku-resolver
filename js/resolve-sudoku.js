const testGridHard = [
    7, "", "", "", "", "", 4, "", "",
    "", "", 8, 9, "", 5, "", 2, "",
    "", "", "", "", 3, "", "", "", "",
    "", "", 3, "", 2, "", "", "", "",
    8, "", "", 6, "", 3, "", "", 7,
    "", "", "", "", 1, "", "", 6, "",
    "", "", 5, 8, "", 6, "", 9, "",
    "", "", "", 1, "", "", "", "", "",
    "", 9, "", "", "", "", "", "", 2
]
const testGridEasy = [
    5, "", 6, 9, 1, 8, "", 2, 3,
    7, 1, 3, 6, "", 2, "", 4, 9,
    "", 8, "", "", "", "", "", 5, 1,
    6, "", 4, "", "", "", "", "", 2,
    "", 2, 7, 8, 6, "", "", "", "",
    "", "", "", "", "", 4, 1, "", "",
    3, "", "", 1, 4, "", 2, "", "",
    "", "", "", 5, "", 6, 3, "", 8,
    "", 7, "", "", "", "", "", "", 6
]

const getStartingGrid = () => {
    let startingGrid = []
    document.querySelectorAll("input").forEach((e) => {
        startingGrid.push(e.value ? parseInt(e.value) : e.value)
    })
    return startingGrid
}

const showResult = (grid) => {
    document.querySelectorAll("input").forEach((e, index) => {
        e.value = grid[index]
    })
}
let countLimit = 0
let max = 0
const resolveSudoku = () => {
    const startingGrid = getStartingGrid()
    let grid = [...startingGrid]
    for (let i = 0; i >= 0 && i < 81; i++) {
        if (i > max) {
            max = i
        }
        if (countLimit > 1000000) {
            console.log(max)
            console.log(countLimit)
            return
        }
        countLimit++
        if (!startingGrid[i]) {
            let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            if (grid[i]) {
                possibilities = possibilities.filter((number => number > grid[i]))
            }
            // Check Line
            const lineNumber = Math.floor(i / 9)
            for (let k = 0; k < 9; k++) {
                const position = lineNumber * 9 + k
                if (grid[position] && position !== i) {
                    const index = possibilities.indexOf(grid[position])
                    if (index > -1) {
                        possibilities.splice(index, 1)
                    }
                }

            }
            // Check Column
            const columnNumber = i % 9
            for (let k = 0; k < 9; k++) {
                const position = columnNumber + k * 9
                if (grid[position] && position !== i) {
                    const index = possibilities.indexOf(grid[position])
                    if (index > -1) {
                        possibilities.splice(index, 1)
                    }
                }

            }
            // Check Region
            const regionNumber = Math.floor(i % 9 / 3) + Math.floor(i / 9 / 3) * 3
            for (let k = 0; k < 9; k++) {
                const position = (regionNumber % 3) * 3 + k - (Math.floor(k / 3) * 3) + Math.floor(k / 3) * 9 + Math.floor(i / 27) * 27
                if (grid[position] && position !== i) {
                    const index = possibilities.indexOf(grid[position])
                    if (index > -1) {
                        possibilities.splice(index, 1)
                    }
                }

            }
            if (possibilities.length === 0) {
                grid[i] = ""
                i = i - 2
                while (startingGrid[i + 1]) {
                    i--
                }
            } else {
                grid[i] = possibilities[0]
            }

        }

    }

    showResult(grid)
    console.log(countLimit)
}
showResult(testGridHard)
document.getElementById('button-resolve').onclick = () => {
    resolveSudoku()
}