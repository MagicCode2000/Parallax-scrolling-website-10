window.onscroll = () => {

    document.querySelector(".stars").style.transform = "scale(" + (500 - scrollY) / 500 + ")";

    document.querySelector(".asteroids").style.transform = "scale(" + (1400 - scrollY) / 1400 + ")";

    document.querySelector(".planets").style.transform = "scale(" + (3000 - scrollY) / 3000 + ")";

    document.querySelector(".Home h1").style.marginTop = scrollY / 1.3 + "px";

    document.querySelector(".Home h1").style.opacity = (80 - scrollY) / 80;
    
};