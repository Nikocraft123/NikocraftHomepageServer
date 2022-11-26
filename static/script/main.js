var header = document.getElementById("header");
var title = document.getElementById("title");
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

function onscroll() {
    if (menu.classList.contains("open")) {
        header.classList.remove("compressed");
        if (document.body.contains(title)) {
            title.innerHTML = title.innerHTML.replace("   ", "<br>");
        }
    }
    else {
        if (window.pageYOffset > 60) {
            header.classList.add("compressed");
            if (document.body.contains(title)) {
                title.innerHTML = title.innerHTML.replace("<br>", "   ");
            }
        }
        else {
            header.classList.remove("compressed");
            if (document.body.contains(title)) {
                title.innerHTML = title.innerHTML.replace("   ", "<br>");
            }
        }
    }
}

window.addEventListener("scroll", onscroll)

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menuButton.src = "/static/img/Menu.png";
    }
    else {
        menuButton.src = "/static/img/Close.png";
    }
    menu.classList.toggle("open")
    onscroll()
}