const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");
const dropdownMenu1 = document.getElementById("dropdownMenu1");
const dropdownMenu2 = document.getElementById("dropdownMenu2");
const dropdown3 = document.getElementById("dropdown3");
const dropdown4 = document.getElementById("dropdown4");
const dropdownMenu3 = document.getElementById("dropdownMenu3");
const dropdownMenu4 = document.getElementById("dropdownMenu4");
const closeMenu = document.getElementById("closeMenu");
const nav2 = document.getElementById("nav2");
const openMenu = document.getElementById("openMenu");

addEventListener("click", (event) => {
  if (
    !dropdownMenu1.contains(event.target) &&
    !dropdown1.contains(event.target)
  ) {
    dropdownMenu1.classList.remove("displayed");
  }
  if (
    !dropdownMenu2.contains(event.target) &&
    !dropdown2.contains(event.target)
  ) {
    dropdownMenu2.classList.remove("displayed");
  }
  if (
    !dropdownMenu3.contains(event.target) &&
    !dropdown3.contains(event.target)
  ) {
    dropdownMenu3.classList.remove("displayed");
  }
  if (
    !dropdownMenu4.contains(event.target) &&
    !dropdown4.contains(event.target)
  ) {
    dropdownMenu4.classList.remove("displayed");
  }
});

dropdown1.addEventListener("click", () => {
  dropdownMenu1.classList.toggle("displayed");
});
dropdown2.addEventListener("click", () => {
  dropdownMenu2.classList.toggle("displayed");
});
dropdown3.addEventListener("click", () => {
  dropdownMenu3.classList.toggle("displayed");
});
dropdown4.addEventListener("click", () => {
  dropdownMenu4.classList.toggle("displayed");
});

closeMenu.addEventListener("click", () => {
  nav2.classList.remove("menuVisible");
});

openMenu.addEventListener("click", () => {
  nav2.classList.add("menuVisible");
});
