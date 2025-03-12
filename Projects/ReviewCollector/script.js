import { reviews } from './reviews.js'

const submitBtn = document.getElementById("submit-btn")
const nameInput = document.getElementById("name")
const review = document.getElementById("review")
const revList = document.getElementById("reviews-list")
const stars = document.querySelectorAll(".star")

let selectedRating = 0

stars.forEach((star, index) => {
    star.addEventListener("click", function () {
        if (selectedRating === index + 1) {
            selectedRating = 0;
        } else {
            selectedRating = index + 1
        }
        updateStar(selectedRating)
    })
    star.addEventListener("mouseover", function () {
        updateStar(index + 1)
    })
    star.addEventListener("mouseleave", function () {
        updateStar(selectedRating)
    })
});

function updateStar(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove("fa-regular");
            star.classList.add('fa-solid')
        } else {
            star.classList.remove('fa-solid')
            star.classList.add("fa-regular");
        }
    })
}

submitBtn.addEventListener('click', function () {
    const nameVal = nameInput.value;
    const reviewVal = review.value;

    if (!nameVal || !reviewVal || selectedRating === 0) {
        alert("Please fill in all fields and select a rating!");
        return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleString(); 

    reviews.unshift({
        userName: nameVal,
        userReview: reviewVal,
        rating: selectedRating,
        timestamp: formattedDate,
    });

    // console.log(reviews[0]);
    renderRevs();

    nameInput.value = ""
    review.value = ""
    selectedRating = 0;

    updateStar(0)
});


function renderRevs() {
    revList.innerHTML = ""

    reviews.forEach((review) => {
        const userRev = document.createElement("div")
        userRev.classList.add("review-item")

        const starContainer = document.createElement("div")
        for(let i = 0; i < 5; i++) {
            const star = document.createElement("i")
            star.classList.add("fa-star")

            if(i < review.rating) {
                star.classList.add("fa-solid")
                star.style.color = "#f5c518"
            } else {
                star.classList.add("fa-regular")
            }
            starContainer.appendChild(star)
        }

        userRev.innerHTML = `
            <div><strong>${review.userName}</strong>: ${review.userReview}</div>
            <div><small>${review.timestamp}</small></div>`
        userRev.appendChild(starContainer);

        revList.append(userRev)
    })
}
