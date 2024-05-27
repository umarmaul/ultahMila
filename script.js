const whiteboards = document.querySelectorAll(".whiteboard");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentBoard = 0;

function showBoard(index) {
	whiteboards.forEach((board, i) => {
		board.style.transform = `translateX(${(i - index) * 100}%)`;
	});
}

nextBtn.addEventListener("click", () => {
	currentBoard = (currentBoard + 1) % whiteboards.length;
	showBoard(currentBoard);
});

prevBtn.addEventListener("click", () => {
	currentBoard = (currentBoard - 1 + whiteboards.length) % whiteboards.length;
	showBoard(currentBoard);
});

showBoard(currentBoard);
