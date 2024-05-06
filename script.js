let menu = document.querySelector(".header__menu-block"),
    burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.style.overflow = "hidden";
});

menu.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("header__menu-block") || target.classList.contains("header__menu")) {
        menu.classList.remove("active");
        document.body.style.overflow = "";
    }
});
