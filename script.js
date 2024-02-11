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

function animateCounting(targetElement, start, end, duration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const value = Math.easeInOutQuad(progress, start, end - start, duration);
        targetElement.textContent = Math.floor(value);

        if (progress < duration) {
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
    const countingSection = document.getElementById('countingSection');
    const countingNumber1 = document.getElementById('countingNumber1');
    const countingNumber2 = document.getElementById('countingNumber2');
    const countingNumber3 = document.getElementById('countingNumber3');
    const countingNumber4 = document.getElementById('countingNumber4');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting from 0 to the target values in 2 seconds
                animateCounting(countingNumber1, 0, 28, 2000);
                animateCounting(countingNumber2, 0, 366, 2000);
                animateCounting(countingNumber3, 0, 648, 2000);
                animateCounting(countingNumber4, 0, 10703, 2000);

                // Disconnect the observer to stop unnecessary calls
                observer.disconnect();
            }
        });
    });

    // Observe the counting section
    observer.observe(countingSection);
});




