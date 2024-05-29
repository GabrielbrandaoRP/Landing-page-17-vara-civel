


let backButton = document.getElementById("backBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
    } else
        backButton.style.display = "block";
}


backButton.onclick = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}