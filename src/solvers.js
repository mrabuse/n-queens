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

  var search = function(board, row) {
    var Row = board.get(row);
    console.log("column value", Row);

    for (var col = 0; col < n; col ++) {
      array = [];
      for (var i = 0; i < n; i ++) {
        if (i !== col) {
          array.push(0);
        } else {
          array.push(1);
        }
      }

      var newRow = board.set(row, array);

      console.log("newRow", newRow);

      if (!board.hasAnyColConflicts() &&
          !board.hasAnyRowConflicts() &&
          !board.hasAnyMajorDiagonalConflicts() &&
          !board.hasAnyMinorDiagonalConflicts()) {
        if (row === n - 1) {
          solution = board.attributes;

          //return solution;
        } else {
          search(board, row + 1);
        }
      }
      for (var i = 0; i < n; i++) {
        array.push(0);
      }
      board.set(row, array);
    }
  };
  search(fullBoard, 0);
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
