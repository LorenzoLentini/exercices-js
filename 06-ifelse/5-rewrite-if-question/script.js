/*
if (a + b < 4) {
      result = 'Below';
    } else {
      result = 'Over';
    }
*/
let a = Number(prompt("a = ?"));
let b = Number(prompt("b = ?"));
let belOrOv = (a + b < 4) ? alert("Below") : alert("Over");
