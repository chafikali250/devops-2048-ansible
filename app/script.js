document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('game-board');
  const scoreDisplay = document.getElementById('score');
  let score = 0;
  let grid = Array(16).fill(0);

  function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 16; i++) {
      let tile = document.createElement('div');
      tile.classList.add('tile');
      if (grid[i] !== 0) {
        tile.innerText = grid[i];
        tile.classList.add(`tile-${grid[i]}`);
      }
      board.appendChild(tile);
    }
    scoreDisplay.innerText = score;
  }

  function generateTile() {
    let emptyTiles = grid.map((val, idx) => val === 0 ? idx : null).filter(val => val !== null);
    if (emptyTiles.length > 0) {
      let randIdx = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
      grid[randIdx] = Math.random() > 0.1 ? 2 : 4;
      createBoard();
    }
  }

  function slide(row) {
    let arr = row.filter(val => val !== 0);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        score += arr[i];
        arr[i + 1] = 0;
      }
    }
    arr = arr.filter(val => val !== 0);
    while (arr.length < 4) arr.push(0);
    return arr;
  }

  function moveLeft() {
    for (let i = 0; i < 4; i++) {
      let row = grid.slice(i * 4, (i + 1) * 4);
      let newRow = slide(row);
      for (let j = 0; j < 4; j++) grid[i * 4 + j] = newRow[j];
    }
    generateTile();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveLeft();
  });

  // Initialisation
  generateTile();
  generateTile();
});
