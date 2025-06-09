let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeResult = 0
let guestResult = 0
homeScore.textContent = homeResult
guestScore.textContent = guestResult

function oneplus() {
    homeResult += 1
    homeScore.textContent = homeResult
}

function twoplus() {
    homeResult += 2
    homeScore.textContent = homeResult
}

function threeplus() {
    homeResult += 3
    homeScore.textContent = homeResult
}

function oneplusGuest() {
    guestResult += 1
    guestScore.textContent = guestResult
}

function twoplusGuest() {
    guestResult += 2
    guestScore.textContent = guestResult
}

function threeplusGuest() {
    guestResult += 3
    guestScore.textContent = guestResult
}

function Reset(){
    guestResult = 0
    guestScore.textContent = 0
    homeResult = 0
    homeScore.textContent = 0
}