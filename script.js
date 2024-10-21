const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    counterLabel.textContent = count;
}