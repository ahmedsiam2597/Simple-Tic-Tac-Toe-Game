let title = document.getElementById("title");
let allCells = document.querySelectorAll(".cell");
let resetBtn = document.getElementById("reset");
let trun = "x";
let cells = [];


allCells.forEach((cell) => {
  cell.addEventListener("click", function () {
    game(this.id);
    winner();
  });
});
resetBtn.onclick = ()=>{
    resetGame();
}

function game(id) {
  let x = document.getElementById(id);
  if (trun === "x" && x.innerHTML == "") {
    x.innerHTML = "&#x2715;";
    trun = "o";
    title.innerHTML = "&#9711;";
  } else if (trun === "o" && x.innerHTML == "") {
    x.innerHTML = " &#9711;";
    trun = "x";
    title.innerHTML = "&#x2715;";
  }
}
function winner() {
  for (let i = 1; i < 10; i++) {
    cells[i] = document.getElementById(`item${i}`).innerHTML;
  }
  check(1, 2, 3);
  check(4, 5, 6);
  check(7, 8, 9);

  check(1, 4, 7);
  check(2, 5, 8);
  check(3, 6, 9);

  check(1, 5, 9);
  check(3, 5, 7);
}

function check(n1, n2, n3) {
  if (cells[n1] == cells[n2] && cells[n2] == cells[n3] && cells[n1] != "") {
    finished(n1, n2, n3);
  }
}

function finished(...num) {
  title.innerHTML = `${cells[num[1]]} Winner`;
  for (let i = 0; i < num.length; i++) {
    document.getElementById("item" + num[i]).style.opacity = ".5";
  }
  allCells.forEach((cell) => {
    cell.style.pointerEvents = "none";
  });
}
function resetGame() {
  title.innerHTML = "&#x2715; &#9711; Game";
  allCells.forEach((cell) => {
    cell.style.opacity = "1";
    cell.style.pointerEvents = "auto";
    cell.innerHTML = "";
  });
  trun = "x";
}
