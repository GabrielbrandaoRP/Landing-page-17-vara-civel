// const accordions = document.querySelectorAll('.accordion');

// accordions.forEach(accordion => {
//     accordion.addEventListener('click', () => {
//         const body = accordion.querySelector('.accordionBody');
//         body.classList.toggle('active');

//         const head = document.querySelector('.accordion');
//         head.classList.toggle('activeHeaderAccordion');

//         const header = document.querySelector('.accordionHeader');
//         header.classList.toggle('activeHeaderAccordion');

       
//     })
// })


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