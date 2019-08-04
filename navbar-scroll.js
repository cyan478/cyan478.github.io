const navBarMaxSize = 100;

document.onscroll = (event) => {
    if (window.scrollY < 300) {
        const navbar = document.getElementsByClassName("navbar-default")[0];
        navbar.setAttribute("style", `height: ${navBarMaxSize - 0.15 * window.scrollY}px`);       
    } else {
        const navbar = document.getElementsByClassName("navbar-default")[0];
        navbar.setAttribute("style", `height: ${70}px`);       
    }
};
