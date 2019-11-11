function rotateGrid(grid, k) {
    let rotation = 0;
    while (rotation !== k) {
        grid = rotateOnesClocwise(grid)
        rotation++;
    }
   return grid;
}
function rotateOnesClocwise(grid) {
    let gridAfterRotation = [];
    let n = grid.length;
    for (let column = 0; column < n; column++) {
        let rowArr = [];
        for (let row = n - 1; row > -1; row--) {
            rowArr.push(grid[row][column])
        }
        gridAfterRotation.push(rowArr);
    }
    return gridAfterRotation;
}
rotateGrid([
    [0, 16, 255],
    [8, 128, 32],
    [0, 0, 0]
], 2);

module.exports = rotateGrid;