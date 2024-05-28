const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordionBody');
        body.classList.toggle('active');

        const head = document.querySelector('.accordion');
        head.classList.toggle('activeHeaderAccordion');

        const header = document.querySelector('.accordionHeader');
        header.classList.toggle('activeHeaderAccordion');

       
    })
})