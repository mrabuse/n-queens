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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
