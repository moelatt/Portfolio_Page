const navItemI = document.querySelectorAll('.nav-itemI')
const navItemA = document.querySelectorAll('.nav-itemA')
function onClickMenu(){
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    navItemI.forEach(item => item.classList.toggle('show'));
}
function onClickAbout(){
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("about-bg").classList.toggle("changeAbout-bg");
    navItemA.forEach(item => item.classList.toggle('aboutShow'));
}