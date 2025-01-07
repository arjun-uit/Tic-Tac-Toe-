let boxes = document.querySelectorAll(".box");// every box will become node list and act like element of array
let resetBtn = document.querySelector(".reset");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turn0 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            if (turn0) { // player0
                box.textContent = "0";
                box.style.backgroundColor = "#ADD8E6";
                turn0 = false;
            }
            else { // playerX
                box.textContent = "X";
                box.style.backgroundColor = "#F4C2C2";
                turn0 = true;
            }
        }
        checkWinner();
    });
});


const checkWinner = ()=>{
    winPatterns.forEach((pattern) => {
        let a = boxes[pattern[0]].textContent;
        let b = boxes[pattern[1]].textContent;
        let c = boxes[pattern[2]].textContent;
        if (a === b && b === c && a !== "") {
            alert(`Player ${a} wins!`);
            resetGame();
        }     

    }); 
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.style.backgroundColor = "";
    });
});