// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}


// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");


const slideCarousel = (index) => {
    for(let x = 0; x<allEachCarousel.length;x++){
        if(x === index){
            allEachCarousel[x].classList.remove("eachCarouselBorder")
            allIndicator[x].classList.add("activeIndicator")
        }else{
            allEachCarousel[x].classList.add("eachCarouselBorder")
            allIndicator[x].classList.remove("activeIndicator")
        }
    }
   carouselContainer.scrollLeft = (index * (eachCarousel + 71))
   console.log(carouselContainer.scrollLeft)
}

function animateCounting(targetElement, startValue, endValue, animationDuration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const value = Math.easeInOutQuad(progress, startValue, endValue - startValue, animationDuration);
        targetElement.textContent = Math.floor(value);

        if (progress < animationDuration) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

document.addEventListener('DOMContentLoaded', function() {
    const animatedNumberElement1 = document.getElementById('animatedNumber1');
    const animatedNumberElement2 = document.getElementById('animatedNumber2');
    const animatedNumberElement3 = document.getElementById('animatedNumber3');

    // Start counting from 0 to 100 for each number in 2 seconds
    animateCounting(animatedNumberElement1, 0, 546, 2000);
    animateCounting(animatedNumberElement2, 0, 15, 2000);
    animateCounting(animatedNumberElement3, 0, 8, 2000);
});

