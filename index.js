// document.addEventListener("DOMContentLoaded", () => {
//     const textDivs = document.querySelectorAll("#text-div h1");
//     let currentIndex = 0;

//     setInterval(() => {
//         textDivs.forEach((text, index) => {
//             text.style.opacity = "0";
//         });
//         textDivs[currentIndex].style.opacity = "1";
//         currentIndex = (currentIndex + 1) % textDivs.length;
//     }, 2500);
// });
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector("#mobile");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.querySelector("#close");

    mobileMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    closeBtn.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textDivs = document.querySelectorAll("#text-div h1");
    let currentIndex = 0;

    setInterval(() => {
        textDivs.forEach((text, index) => {
            text.style.opacity = "0";
        });
        textDivs[currentIndex].style.opacity = "1";
        currentIndex = (currentIndex + 1) % textDivs.length;
    }, 2500);

    const animatedText = document.getElementById("animated-text");
    const text = "Selection Winter";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            animatedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 200); // Slow down typing speed
        } else {
            setTimeout(eraseText, 2000); // Wait before erasing
        }
    }

    function eraseText() {
        if (index > 0) {
            animatedText.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(eraseText, 200); // Slow down erasing speed
        } else {
            setTimeout(typeText, 2000); // Wait before typing again
        }
    }

    typeText();
});
// document.addEventListener('DOMContentLoaded', () => {
//     const bar = document.getElementById('bar');
//     const nav = document.getElementById('navbar');
//     const close = document.getElementById('close');

//     if (bar) {
//         bar.addEventListener('click', () => {
//             nav.classList.toggle('active');
//         });
//     }

//     if (close) {
//         close.addEventListener('click', () => {
//             nav.classList.remove('active');
//         });
//     }
// });
