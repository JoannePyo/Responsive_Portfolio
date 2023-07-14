function toggleMenu() {
  // going to target munu-linkes and hamburger-icon(index.html) on my web page
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // and then whenever I click it it's gonna either add or remove the "open" class\
  // in the that element and that open class is going to have some styling
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
