let body = document.body;
let profile=document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
    profile.classList.toggle("active");
    searchform.classList.remove("active");
}
let searchform=document.querySelector(".header .flex .search-form");

document.querySelector("#search-btn").onclick = () => {
    searchform.classList.toggle("active");
    profile.classList.remove("active"); 
}
let sidBar=document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
    sidBar.classList.toggle("active");
    body.classList.toggle("active");
}
document.querySelector(".side-bar .close-btn").onclick = () => {
    sidBar.classList.remove("active");
    body.classList.remove("active");
}
window.onscroll = () => {
    profile.classList.remove("active");
    searchform.classList.remove("active");
    if(window.innerWidth < 1200){
        sidBar.classList.remove("active");
        body.classList.remove("active");
    }
}

let toggleBtn = document.querySelector("#toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

const enabelDarkMode = () => {
    toggleBtn.classList.replace("fa-sun","fa-moon");
    body.classList.add("dark");
    localStorage.setItem("dark-mode","enabled");
}
const disableDarkMode = () => {
    toggleBtn.classList.replace("fa-moon","fa-sun");
    body.classList.remove("dark");
    localStorage.setItem("dark-mode","disabled");
}
if(darkMode==="enabled"){
    enabelDarkMode();
}
toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem("dark-mode");
    if(darkMode==="disabled"){
        enabelDarkMode();
    }else{
        disableDarkMode();
    }
}