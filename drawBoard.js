function updatesquare(square, num, num2) {
    if (num %2 == num2%2) {
       square.classList.add("whiteSquare");               
    }
    else square.classList.add("blackSquare");
    
}

function updateWcircle(circle, num, num2) {
    if (num %2 == num2%2) {
       circle.classList.add("Wcircle");               
    }  
}

function updateBcircle(circle, num, num2) {
    if (num %2 == num2%2) {
       circle.classList.add("Bcircle");               
    }  
}