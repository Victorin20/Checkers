let lastSelection;
let pieces = [];
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

document.addEventListener("click", function(event) {
    var selectedElement = event.target; // Get the clicked element
    
    let posibleMovements = [];
    let yPosition = selectedElement.id[0];
    let xPosition = selectedElement.id[2];
    yPosition = parseInt(yPosition);
    xPosition = parseInt(xPosition);
   
   pieces.forEach(function(piece)
   {      

        posibleMovements = piece.getPossibleMovements(table);

    if(piece.IsSelected()){

        posibleMovements.forEach(function(posibleMovement)
        {
            piece.move(yPosition, xPosition,posibleMovement);
        });
    }

    if(piece.IsSelected() && piece.getX() !== xPosition && piece.getY !== piece.getY())
    {
        piece.setIsNotSelected();    
    }

       if(piece.getX() == xPosition && piece.getY() == yPosition)
       {
        piece.setIsSelected();
       }
             
    });

    pieces.forEach(function(piece)
    {
       piece.clearAllLastMoves();
      
    });

    pieces.forEach(function(piece)
   {
    if(piece.IsSelected())
    {

        piece.markSelectedPiece(piece.getPiecePosition());
        piece.displayPossibleMovements(table);
       
    } 
       
        
    });

});