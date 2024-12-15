let hamburgerMenu = document.querySelector(".fa-bars");
let headerMenu = document.querySelector(".header_menu");


hamburgerMenu.addEventListener("click", function () {
    let isMenuActive = headerMenu.classList.toggle("active");
    /*Ajoute la classe active  si elle n'est pas definie et la supprine si elle l'est */

    hamburgerMenu.setAttribute("aria-expanded", isMenuActive);
    headerMenu.setAttribute("aria-hidden", !isMenuActive);
    
  });
