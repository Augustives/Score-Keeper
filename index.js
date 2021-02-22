const pb1 = document.querySelector("#pb1")
const pb2 = document.querySelector("#pb2")
const reset = document.querySelector("#reset")
const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")
const select = document.querySelector(".select")

let p1Score = 0
let p2Score = 0
let winScore = 0
let gameEnd = false


select.addEventListener("change", function (e) {
	winScore = this.value
})

pb1.addEventListener("click", function () {
	if (gameEnd != true && winScore != 0) {	
		p1Score++;
		score1.textContent = p1Score;
		if (p1Score == winScore) {gameEnd = true; alert("Player 1 Wins"); disable()}
	}else {
		alert("Please Set 'Playing to'")
	} 
})

pb2.addEventListener("click", function () {
	if (gameEnd != true && winScore != 0) {	
		p2Score++;
		score2.textContent = p2Score;
		if (p2Score == winScore) {
			gameEnd = true; alert("Player 2 Wins"); disable()}
	}else {
		alert("Please Set 'Playing to'")
	} 
})

reset.addEventListener("click", rst)

function disable () {
	pb1.classList.add("disabled")
	pb2.classList.add("disabled")
}

function rst () {
	p1Score = 0
	p2Score = 0
	score1.textContent = p1Score;
	score2.textContent = p2Score;
	gameEnd = false
	pb1.classList.remove("disabled")
	pb2.classList.remove("disabled")
}