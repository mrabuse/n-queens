/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];

  // for (let i = 0; i < n; i++) {
  //   solution.push(new Array(n))
  // }

  for (let i = 0; i < n; i++) {
    var row = [];

    for (let l = 0; l < n; l++) {
      if (i === l) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    solution.push(row);
  }






  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var fullBoard = new Board({n: n});
  var board = fullBoard.attributes;

  var search = function(matrix, row) {
    for (var col = 0; col < n; col ++) {
      matrix[row][col] = 1;

      if (!fullBoard.hasAnyColConflicts() && !fullBoard.hasAnyRowConflicts()) {
        if (row === n - 1) {
          solutionCount++;
        } else {
          search(matrix, row + 1);
        }
      }
      matrix[row][col] = 0;
    }
  };

  search(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var fullBoard = new Board({n: n});
  var solution = [];

  var search = function(board, row) {
    var Row = board.get(row);

    for (var col = 0; col < n; col ++) {
      console.log('row', col);
      console.log('column', col);
      board.togglePiece(row, col);

      if (!board.hasAnyColConflicts() &&
          !board.hasAnyRowConflicts() &&
          !board.hasAnyMajorDiagonalConflicts() &&
          !board.hasAnyMinorDiagonalConflicts()) {
        console.log('board', board);
        if (row === n - 1) {
          for (var i = 0; i < n; i++) {
            console.log('woo');
            solution.push(board.get(i));
          }
        } else {
          search(board, row + 1);
        }
      } else {
        board.set(row, Row);
      }
    }
  };

  search(fullBoard, 0);

  if (solution.length === 0) {
    solution = {n: n};
  }

  console.log('Solution', solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var fullBoard = new Board({n: n});
  var board = fullBoard.attributes;


  var search = function(matrix, row) {
    for (var col = 0; col < n; col ++) {
      matrix[row][col] = 1;
      if (!fullBoard.hasAnyColConflicts() &&
          !fullBoard.hasAnyRowConflicts() &&
          !fullBoard.hasAnyMajorDiagonalConflicts() &&
          !fullBoard.hasAnyMinorDiagonalConflicts()) {
        if (row === n - 1) {
          solutionCount++;
        } else {
          search(matrix, row + 1);
        }
      }
      matrix[row][col] = 0;
    }
  };

  search(board, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
