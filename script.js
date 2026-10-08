const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function revealCard() {
  card.classList.remove("reveal");
  void card.offsetWidth;
  card.classList.add("reveal");
}

openBtn.addEventListener("click", revealCard);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") revealCard();
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");

  themeIcon.textContent = light ? "☾" : "☼";
  themeLabel.textContent = light ? "DARK MODE" : "LIGHT MODE";
  localStorage.setItem("teacherTheme", light ? "light" : "dark");
});

if (localStorage.getItem("teacherTheme") === "light") {
  document.body.classList.add("light");
  themeIcon.textContent = "☾";
  themeLabel.textContent = "DARK MODE";
}
