/*                                                                          nav en blanco cuando haces scroll */
window.addEventListener("scroll", function(){
    var headerReverse = document.querySelector("header");
    headerReverse.classList.toggle("reverse-scroll", window.scrollY>0);
})

/*                                                                          nav en blanco cuando pones el mouse */
let box = document.querySelector("header");

box.addEventListener("mouseover", function() {
    box.classList.toggle("reverse-mouse");
});

box.addEventListener("mouseout", function() {
    box.classList.toggle("reverse-mouse");
});