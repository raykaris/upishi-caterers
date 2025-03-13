function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.title');
});

link2.addEventListener('click', () => {
    scrollToElement('.title', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.title', 3);
});

link4.addEventListener('click', () => {
    scrollToElement('.footer-column');
});


const typed = new Typed('.multiple-text' , {
    strings: ['Be our customer for all event needs','Rural or Urban we cook them all','Integrity','Unity','Cooperation'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});