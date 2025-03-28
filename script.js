
let money = 100;
let character = '';

function selectCharacter(name) {
  character = name;
  document.getElementById("character-select").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("character-name").innerText = name;
  document.getElementById("character-img").src = name === 'Gergő' ? 'gergo.png' : 'dori.png';
  createFarm();
}

function createFarm() {
  const grid = document.getElementById("farm-grid");
  for (let i = 0; i < 6; i++) {
    const plot = document.createElement("div");
    plot.classList.add("plot");
    plot.dataset.state = "empty";
    plot.onclick = () => plantCarrot(plot);
    grid.appendChild(plot);
  }
}

function plantCarrot(plot) {
  if (plot.dataset.state !== "empty" || money < 10) return;
  plot.dataset.state = "carrot";
  plot.classList.add("carrot");
  money -= 10;
  document.getElementById("money").innerText = money;
}
