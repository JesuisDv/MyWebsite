// Animacion barra Header
const nav = document.querySelector('header');

window.addEventListener('scroll', fixNav);

function fixNav(){
    if (window.scrollY > nav.offsetHeight){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
};


// Animacion cambio color letras
const text = document.querySelector(".animated-text");
        const letters = text.innerText.split("");
        text.innerHTML = "";


        letters.forEach((letter, index) => {
            let span = document.createElement("span");
            span.innerText = letter;
            text.appendChild(span);
        });

        const colors = ["#a30000", "white"];
        let index = 0;

        function animateText() {
            let spans = document.querySelectorAll(".animated-text span");
            spans.forEach((span, i) => {
                setTimeout(() => {
                    span.style.color = colors[index % colors.length];
                }, i * 190); 
            });
            index++;
            setTimeout(animateText, 1000); 
        }

        animateText();