let hammburger_menu = document.querySelector(".fa-bars")
let header_menu = document.querySelector(".header_menu")


hammburger_menu.addEventListener("click",function(){
    if (header_menu.style.display === "none") {
        hammburger_menu.style.display = "none";
        header_menu.style.display = "block";

    } else {
        header_menu.style.display = "block";
        
    }
   
});