const pb1 = document.querySelector("#pb1")
const pb2 = document.querySelector("#pb2")
const reset = document.querySelector("#reset")
const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")

let p1Score = 0
let p2Score = 0
let winScore = 5

pb1.addEventListener("click", function () {
	p1Score++;
	score1.textContent = p1Score;
})