const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow4 = document.querySelector("#arrow4");



arrow1.addEventListener("click", ()=> {
    btn1.click();
});

arrow2.addEventListener("click", ()=> {
    btn2.click();
});

arrow3.addEventListener("click", ()=> {
    btn3.click();
});

arrow4.addEventListener("click", ()=> {
    btn4.click();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
