const data = window.ALMALEK_MENU;
const params = new URLSearchParams(location.search);
const screenId = params.get("screen");

function money(value, extra = false) {
  if (Array.isArray(value)) return `<span class="dual-price"><b>${value[0]}</b><b>${value[1]}</b></span>`;
  return `<span class="item-price">${extra ? "+" : ""}${value}<small>:-</small></span>`;
}
function groupView(group) {
  const labels = group.priceLabels ? `<div class="price-head"><span></span><b>${group.priceLabels[0]}</b><b>${group.priceLabels[1]}</b></div>` : "";
  return `<section class="menu-group ${group.compact ? "compact" : ""} ${group.accent ? "accent" : ""}" style="--group-weight:${group.items.length + 1}">
    <header><i></i><h2>${group.title}</h2><i></i></header>${labels}
    <div class="items">${group.items.map(([name, price, desc, extra]) => `<div class="menu-row ${desc ? "has-desc" : ""}">
      <div class="item-name"><b>${name}</b>${desc ? `<small>${desc}</small>` : ""}</div>
      <span class="dotline"></span>${money(price,extra)}
    </div>`).join("")}</div>
  </section>`;
}
function screenView(id) {
  const s = data.screens[id];
  return `<div class="display display-${id}" data-screen="${id}">
    <div class="ambient"></div>
    <header class="brandbar">
      <div class="brand-lockup"><img src="assets/logo.png" alt=""><div><h1>AL MALEK</h1><p>${s.subtitle}</p></div></div>
      <div class="screen-no"><span>MENY</span><b>${s.number}</b></div>
    </header>
    <main class="screen-body">
      <section class="menu-board">${s.columns.map((column,i)=>`<div class="menu-column col-${i+1}">${column.map(groupView).join("")}</div>`).join("")}</section>
      <aside class="feature-panel">
        <div class="feature-glow"></div><div class="feature-tag"><i></i><span>AL MALEK FAVORITER</span></div>
        <div class="feature-images">${s.featured.map(([name,,,image],i)=>`<img class="feature-photo ${i===0?"active":""}" src="${image}" alt="${name}">`).join("")}</div>
        <div class="feature-cards">${s.featured.map(([name,price,desc],i)=>`<article class="feature-card ${i===0?"active":""}">
          <p>UTVALT JUST NU</p><h2>${name}</h2><span>${desc}</span><div class="feature-price"><b>${price}</b><small>KR</small></div>
        </article>`).join("")}</div>
        <div class="feature-progress"><span class="count">01</span><div><i></i></div><span>${String(s.featured.length).padStart(2,"0")}</span></div>
      </aside>
    </main>
    <footer><span>ALLTID FÄRSKT · ALLTID SMAKFULLT</span><b class="credit">POWERED BY <span class="albatross-name">ALBATROSS</span><span class="coding-name">CODING</span></b><span>AL MALEK RESTAURANG</span></footer>
  </div>`;
}
function overviewView() {
  return `<div class="preview-shell"><header><div><p>AL MALEK · DIGITAL MENU</p><h1>Ny design — version 2</h1></div><div class="pills"><span>2 × 65”</span><span>1920 × 1080</span><span>LIVE</span></div></header>
  <div class="wall">${[1,2].map(id=>`<a class="screen-frame" href="?screen=${id}"><iframe src="?screen=${id}" title="Skärm ${id}"></iframe><span>ÖPPNA SKÄRM ${id} ↗</span></a>`).join("")}</div>
  <div class="preview-note"><b>Fast meny + separat animerad yta</b><span>Klicka på en skärm för full storlek</span></div></div>`;
}
const isScreen = screenId === "1" || screenId === "2";
document.getElementById("app").innerHTML = isScreen ? screenView(screenId) : overviewView();
document.body.classList.toggle("screen-mode", isScreen);

function fitDisplay() {
  const display = document.querySelector(".display");
  if (!display) return;
  const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  display.style.setProperty("--display-scale", scale);
}

if (isScreen) {
  fitDisplay();
  window.addEventListener("resize", fitDisplay);
  const cards = [...document.querySelectorAll(".feature-card")];
  const photos = [...document.querySelectorAll(".feature-photo")];
  const count = document.querySelector(".feature-progress .count");
  const progress = document.querySelector(".feature-progress i");
  let current = 0;
  setInterval(() => {
    cards[current].classList.remove("active"); photos[current].classList.remove("active");
    current = (current + 1) % cards.length;
    cards[current].classList.add("active"); photos[current].classList.add("active");
    count.textContent = String(current + 1).padStart(2,"0");
    progress.style.animation = "none"; void progress.offsetWidth; progress.style.animation = "fill 6.5s linear";
  }, 6500);
}
