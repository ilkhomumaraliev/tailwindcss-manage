const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const link = document.querySelectorAll(".link");

btn.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  btn.classList.toggle("open");
});

link.forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.add("hidden");
    btn.classList.remove("open");
  })
);
