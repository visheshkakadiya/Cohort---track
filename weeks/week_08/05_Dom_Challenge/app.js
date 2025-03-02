const carouselTrack = document.getElementById("carouselTrack")
const prevButton = document.getElementById("prevButton")
const nextButton = document.getElementById("nextButton")
const carouselNav = document.getElementById("carouselNav")
const autoPlayButton = document.getElementById("autoPlayButton")
const caption = document.getElementById("caption")
const timerDisplay = document.getElementById("timerDisplay")

let storImg = Array.from(carouselTrack.children)
let currentIndex = 0
const captions = [
    "A Banana",
    "A Plane crash",
    "Serene Beach with Crystal Blue Water",
    "Aurora"
]

nextButton.addEventListener('click', function() {

    currentIndex = (currentIndex + 1) % storImg.length

    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    caption.textContent = captions[currentIndex]

    dotsArr.forEach(dot => dot.classList.remove("active"));

    dotsArr[currentIndex].classList.add("active")
    
})

document.addEventListener("DOMContentLoaded", function() {
    caption.textContent = captions[0]

    dotsArr.forEach(dot => dot.classList.remove("active"));

    dotsArr[currentIndex].classList.add("active")
})

prevButton.addEventListener('click', function() {

    if(currentIndex === 0) {
        currentIndex = storImg.length - 1
    } else {
        currentIndex = (currentIndex - 1) % storImg.length
    }

    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    caption.textContent = captions[currentIndex]

    dotsArr.forEach(dot => dot.classList.remove("active"));

    dotsArr[currentIndex].classList.add("active")
})

    for(let i = 0; i < storImg.length; i++) {
        const carouseDots = document.createElement("span")
        carouseDots.classList.add("carousel-indicator")  
        carouselNav.appendChild(carouseDots)
    }
    
let dotsArr = Array.from(carouselNav.children)

carouselNav.addEventListener('click', function (event) {
    const index = dotsArr.indexOf(event.target)

    if(index !== -1) {
        currentIndex = index

        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dotsArr.forEach(dot => dot.classList.remove("active"));

        dotsArr[currentIndex].classList.add("active")
    }
})

let autoPlayInterval;
let count = 5;
let isAutoPlaying = false; 

autoPlayButton.addEventListener('click', function () {
    if (isAutoPlaying) {
        clearInterval(autoPlayInterval);
        autoPlayButton.textContent = "Start Auto Play";
        timerDisplay.innerText = ""; 
        isAutoPlaying = false;
    } else {
        autoPlayButton.textContent = "Stop Auto Play";
        isAutoPlaying = true;
        count = 5; 

        autoPlayInterval = setInterval(() => {
            if (count > 0) {
                timerDisplay.innerText = `Next slide in ${count}`;
                count--;
            } else {
                count = 5; 
                currentIndex = (currentIndex + 1) % storImg.length; 
                carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
                caption.textContent = captions[currentIndex];

                dotsArr.forEach(dot => dot.classList.remove("active"));
                dotsArr[currentIndex].classList.add("active");
            }
        }, 1000);
    }
});
