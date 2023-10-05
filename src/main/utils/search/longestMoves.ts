import PathFinder from "./PathFinder";

const finder = new PathFinder();

const rows = 8;
const columns = 8;
const moves = getAllPoints();
let maxMove: [number, number][][] = [];

function getAllPoints() {
  const moves: [number, number][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      moves.push([i, j]);
    }
  }

  return moves;
}

moves.forEach(start => {
  moves.forEach(goal => {
    const path = finder.findShortestPath(start, goal)
    if (path.length === 7) {
      maxMove.push(path);
    }
  })
})
