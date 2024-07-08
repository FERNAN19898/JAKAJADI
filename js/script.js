document.addEventListener("DOMContentLoaded", function() {
    var btnMenu = document.getElementById("btn_menu");
    var nav = document.getElementById("nav");
    var background_menu = document.getElementById("back_menu");

    if (btnMenu && nav && background_menu) {
        btnMenu.addEventListener("click", mostrar_menu);
        background_menu.addEventListener("click", ocultar_menu);

        function mostrar_menu() {
            // document.querySelector(".contenedor_header-logo img").style.width = "120px";
            nav.style.right = "0px";
            background_menu.style.display = "block";
        }

        function ocultar_menu() {
            // document.querySelector(".contenedor_header-logo img").style.width = "100px";
            nav.style.right = "-250px";
            background_menu.style.display = "none";
        }
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM.");
    }

    // Main

});