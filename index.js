let gameover = false;
let score = 0;
// const genratevalue = () => {

//   return val;
// };

let getId = (i, j) => {
  return i.toString() + j.toString();
};
const startnewgame = () => {
  let el = document.getElementById("grid");
  el.innerHTML = "";
  creategame();
};
const gamefinish = () => {
  if (!gameover) {
    return;
  }
  if (gameover === true) {
    alert("gameover");
    startnewgame();
  }
};
gamefinish();
const updatescore = (score) => {
  let sc = document.getElementById("score");
  sc.innerHTML = "score: " + score;
};

const displaybomb = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let el = document.getElementById(getId(i, j));
      if (el.innerHTML === "bomb") {
        el.className = "cell center text display";
      }
    }
  }
};
let count = 0;
const handleclickevent = (cell, countbomb) => {
  cell.className = "cell center text";
  count++;
  console.log(count);
  setTimeout(() => {
    if (count === 81 - countbomb) {
      alert("win the game");
      startnewgame();
    }
  }, 1000);
  // let value = Math.ceil(Math.random() * 81);
  // if (value === 77 || value === 70 || value === 4) {
  //   value = "💣";
  // }
  // cell.innerHTML = value;
  if (cell.innerHTML === "bomb") {
    displaybomb();
    gameover = true;
    setTimeout(() => {
      gamefinish();
    }, 10);
  } else {
    score++;
    updatescore(score);
  }
};
let countbomb = 0;
const creategame = () => {
  let el = document.getElementById("grid");
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("div");
      cell.className = "cell center";
      cell.setAttribute("id", getId(i, j));
      let value = Math.ceil(Math.random() * 81);
      if (value === 77 || value === 70 || value === 4 || value === 9) {
        value = "bomb";
        countbomb++;
      }
      cell.innerHTML = value;

      cell.addEventListener("click", (event) =>
        handleclickevent(cell, countbomb)
      );
      row.appendChild(cell);
    }
    el.appendChild(row);
  }
  console.log(countbomb);
};
creategame();
updatescore(0);
