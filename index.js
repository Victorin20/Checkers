let lastSelection;
let whiteScore = 0;
let blackScore = 0;
let pieces = [];
const move = {Direction :""};
let table = [
    [-1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    
];

window.onload = function(){
    setGame();
}

document.addEventListener("click", (event) => {
    var selectedElement = event.target; // Get the clicked element
    let moved = false;
    
    let posibleMovements = [];
    let yPosition = selectedElement.id[0];
    let xPosition = selectedElement.id[2];
    yPosition = parseInt(yPosition);
    xPosition = parseInt(xPosition);


   pieces.forEach((piece) =>
   {      

        posibleMovements = piece.getPossibleMovements(table);

    if(piece.IsSelected()){

        posibleMovements.forEach((posibleMovement) =>
        {
            if(!moved){

                moved = piece.move(yPosition, xPosition,posibleMovement, move);
            }
         
            
            if((table[yPosition][xPosition] === 1 && yPosition === 0) || (table[yPosition][xPosition] === -1 && yPosition === 7))
            {
                if(table[yPosition][xPosition] === 1 && yPosition === 0)
                {
                    blackScore += 30;
                    document.getElementById("blackScore").innerText = "Black score : " +blackScore.toString();
                }
                if(table[yPosition][xPosition] === -1 && yPosition === 7)
                {
                    whiteScore += 30;
                    document.getElementById("whiteScore").innerText = "White score : " + whiteScore.toString();
                }
                piece.delete(yPosition, xPosition, pieces);
                
            }
            
            piece.takePiece(yPosition, xPosition, pieces, move);
        });
    }

    if(piece.IsSelected() && piece.getX() !== xPosition || piece.IsSelected() && piece.getY() !== yPosition)
    {
        piece.setIsNotSelected();    
    }

       if(piece.getX() == xPosition && piece.getY() == yPosition)
       {
        piece.setIsSelected();
       }
             
    });

    piece.clearAllLastMoves();

    pieces.forEach((piece) =>
   {
    if(piece.IsSelected())
    {
        piece.markSelectedPiece(piece.getPiecePosition());
        piece.displayPossibleMovements(table);
    } 
             
    });
    for(let i = 0; i < 8; i++)
    {
        console.log(table[i]);
    }
    console.log("")
});