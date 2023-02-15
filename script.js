function togglemenu() {
  let myElement = document.querySelector("#openmenu");
  let details = document.querySelector("#details");
  let discord = document.querySelector("#discord");
  let instagram = document.querySelector("#instagram");
  if (myElement.classList.item(1) === "fa-chevron-up") {
  myElement.classList.remove("fa-chevron-up");
  myElement.classList.add("fa-chevron-down");
  details.classList.toggle("menumode");
  discord.classList.remove("close");
  discord.classList.add("open");
  instagram.classList.remove("close");
  instagram.classList.add("open");
} else {
  myElement.classList.remove("fa-chevron-down");
  myElement.classList.add("fa-chevron-up");
  details.classList.toggle("menumode");
  discord.classList.remove("open");
  discord.classList.add("close");
  instagram.classList.remove("open");
  instagram.classList.add("close");
}};
