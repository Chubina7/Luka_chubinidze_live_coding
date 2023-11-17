// Variables
const seeMore = document.querySelectorAll('.see-more')
const popupOverlay = document.getElementById('popupOverlay')
const popupCloserBtn = document.getElementById('popupCloserBtn')
const popupCard = document.getElementById('popupCard')

const timer = document.querySelector('.timer')
const price = document.querySelectorAll('.price')

// Popup open-close
seeMore.forEach(seeMore => {
    seeMore.addEventListener('click', () => {
        popupCard.style.display = "flex"
        popupOverlay.style.display = "flex"
    })
});
popupOverlay.addEventListener('click', () => {
    popupOverlay.style.display = "none"
    popupCard.style.display = "none"
})
popupCloserBtn.addEventListener('click', () => {
    popupOverlay.style.display = "none"
    popupCard.style.display = "none"
})

// Timer
function myFunc() {
    let currentTime = 20;
    let timme = setInterval(function test() {
        currentTime--;
        timer.innerHTML = `Sale Ends In/: ${currentTime} second`
    }, 20000);


    if (currentTime = 0) {
        price.style.display = "none"
    }
}

window.addEventListener("load", () => {
    myFunc()
});