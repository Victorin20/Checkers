class Piece{
    
    constructor(x, y, color)
    {
        this.x = x;
        this.y = y;
        this.type = "stone";
        this.color = color;
        this.isSelected = false;
        this.element = document.createElement("div");
    }
    
    getX(){return this.x;}
    getY(){return this.y;}
    setX(x){this.x = x;}
    setY(y){this.y = y;}
    getElement(){return this.element;}
    IsSelected(){return this.isSelected;}
    setIsSelected(){this.isSelected = true;}
    setIsNotSelected(){this.isSelected = false;}
    getPiecePosition(){return this.y.toString() + "-" + this.x.toString();}
    getColor(){return this.color;}


    markSelectedPiece(selectedPiece)
    {      
        document.getElementById(selectedPiece).style.backgroundColor = "yellow";
    }

    clearLastMove(lastSelection){     
        if(typeof lastSelection !== 'undefined'){
        document.getElementById(lastSelection).style.backgroundColor = "white";

    }}
    clearLastMoves(lastSelection){ 
        if(typeof lastSelection !== 'undefined' && this.getY() === Number(lastSelection[0]) && this.getX() === Number(lastSelection[2]))
        {
            
            const lastY = Number(lastSelection[0]);
            const lastX = Number(lastSelection[2]);
            if(this.getColor() === 'black')
            {
                if(lastX+1 !== 8 && lastY-1 !== -1)
                {

                    document.getElementById((lastY-1).toString() + "-" + (lastX+1).toString()).style.backgroundColor = "white";
                }
                if(lastX-1 !== -1 && lastY-1 !== -1)
                {

                    document.getElementById((lastY-1).toString() + "-" + (lastX-1).toString()).style.backgroundColor = "white";
                }
            
            }
            
            if(this.getColor() === 'white')
            {
                
                if(lastX+1 !== 8 && lastY+1 !== 8)
                {

                    document.getElementById((lastY+1).toString() + "-" + (lastX+1).toString()).style.backgroundColor = "white";

                }
                
                if(lastX-1 !== -1 && lastY+1 !== 8)
                {

                    document.getElementById((lastY+1).toString() + "-" + (lastX-1).toString()).style.backgroundColor = "white";
                }
                    
            }
        }
   
    }

    clearAllLastMoves()
    {
        for(let y = 0; y < 8; y++)
        {
            for(let x = 0; x < 8; x++)
            {
                if(y %2 === x%2)
                {

                    let selection = y.toString() + "-" + x.toString();
                    this.clearLastMove(selection);
                    this.clearLastMoves(selection);
                }

            }
        }
    }

    displayPossibleMovements(table)
    {
            if(this.y-1 >= 0 && this.x+1 < 8 && this.getColor() === "black" && table[this.y-1][this.x+1] === 0)
            {
                document.getElementById((this.y-1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.y-1 >= 0 && this.x-1 >= 0 && this.getColor() === "black" && table[this.y-1][this.x-1] === 0)
            {
                document.getElementById((this.y-1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }

            //////////////////////////////take a white piece/////////////////////////////
            if(this.x +2 < 8 && this.y-2 >= 0 && this.getColor() === "black" && table[this.y-1][this.x+1] === -1 && table[this.y-2][this.x+2] === 0 )
            {
                
                document.getElementById((this.y-2).toString() + "-" +(this.x+2).toString()).style.backgroundColor = "green";             
            }

            if(this.y-2 >= 0 && this.x-2 >= 0 && this.getColor() === "black" && table[this.y-1][this.x-1] === -1 && table[this.y-2][this.x-2] === 0)
            {
                document.getElementById((this.y-2).toString() + "-" +(this.x-2).toString()).style.backgroundColor = "green";
            }
            //////////////////////////////take a white piece/////////////////////////////

           
            //////////////////////////////take a black piece/////////////////////////////
            if(this.x +2 < 8 && this.y+2 < 8 && this.getColor() === "white" && table[this.y+1][this.x+1] === 1 && table[this.y+2][this.x+2] === 0 )
            {
                
                document.getElementById((this.y+2).toString() + "-" +(this.x+2).toString()).style.backgroundColor = "green";             
            }

            if(this.y+2 < 8 && this.x-2 >= 0 && this.getColor() === "white" && table[this.y+1][this.x-1] === 1 && table[this.y+2][this.x-2] === 0)
            {
                document.getElementById((this.y+2).toString() + "-" +(this.x-2).toString()).style.backgroundColor = "green";
            }
            //////////////////////////////take a black piece/////////////////////////////
            
            if(this.y+1 < 8 && this.x+1 <8 && this.getColor() == "white" && table[this.y+1][this.x+1] === 0)
            {
                
                document.getElementById((this.y+1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.y+1 <8 && this.x-1>=0 && this.getColor() == "white" && table[this.y+1][this.x-1] === 0)
            {
                document.getElementById((this.y+1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }

    }

    getPossibleMovements(table)
    {

        let posibleMovements = [];

            if( this.y-1 >=0 && this.x+1 <8 && this.getColor() == "black" && table[this.y-1][this.x+1] === 0)
            {
                
                posibleMovements.push((this.y-1).toString() + "-" +(this.x+1).toString());            
            }

            if(this.y-1 >=0 && this.x-1 >=0 && this.getColor() == "black" && table[this.y-1][this.x-1] === 0)
            {
                posibleMovements.push((this.y-1).toString() + "-" +(this.x-1).toString())
            }



            //////////////////////////////take a white piece/////////////////////////////
            if(this.y-2 >= 0 && this.x+2 < 8 && this.getColor() == "black" && table[this.y-1][this.x+1] === -1 && table[this.y-2][this.x+2] === 0)
            {
                posibleMovements.push((this.y-2).toString() + "-" +(this.x+2).toString());             
            }
            
            if(this.y-2 >= 0 && this.x-2 >= 0 && this.getColor() == "black" && table[this.y-1][this.x-1] === -1 && table[this.y-2][this.x-2] === 0)
            {
                
                posibleMovements.push((this.y-2).toString() + "-" +(this.x-2).toString());
            }
            //////////////////////////////take a white piece/////////////////////////////
            

             //////////////////////////////take a balck piece/////////////////////////////
             if(this.y+2 < 8 && this.x+2 < 8 && this.getColor() == "white" && table[this.y+1][this.x+1] === 1 && table[this.y+2][this.x+2] === 0)
             {
                 posibleMovements.push((this.y+2).toString() + "-" +(this.x+2).toString());             
             }
             
             if(this.y+2 < 8 && this.x-2 >= 0 && this.getColor() == "white" && table[this.y+1][this.x-1] === 1 && table[this.y+2][this.x-2] === 0)
             {
                 
                 posibleMovements.push((this.y+2).toString() + "-" +(this.x-2).toString());
             }
             //////////////////////////////take a black piece/////////////////////////////




            if(this.y+1 < 8 && this.x+1 < 8 && this.getColor() == "white" && table[this.y+1][this.x+1] === 0)
            {
                
               posibleMovements.push((this.y+1).toString() + "-" +(this.x+1).toString())             
            }

            if(this.y+1 < 8 && this.x-1>=0 && this.getColor() == "white" && table[this.y+1][this.x-1] === 0)
            {
                posibleMovements.push((this.y+1).toString() + "-" +(this.x-1).toString())
            }

            return posibleMovements;
    }

    move(yPosition, xPosition, posibleMovement, move) {
        let id = yPosition.toString() + "-" + xPosition.toString();
        let targetElement = document.getElementById(id);
        
    
        if (targetElement) {
          if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "black") {
            table[yPosition][xPosition] = 1;
            table[this.getY()][this.getX()] = 0;      
            if(yPosition < this.getY() && xPosition < this.getX())move.Direction = "left";
            if(yPosition < this.getY() && xPosition > this.getX())move.Direction = "right";
            this.setY(yPosition);
            this.setX(xPosition);
            this.getElement().id = id;
            targetElement.appendChild(this.getElement());
            return true;
          } 
          if (Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "white") {
            table[yPosition][xPosition] = -1;           
            table[this.getY()][this.getX()] = 0;
            if(yPosition > this.getY() && xPosition < this.getX())move.Direction = "left";
            if(yPosition > this.getY() && xPosition > this.getX())move.Direction = "right";
            this.setY(yPosition);
            this.setX(xPosition);
            this.getElement().id = id;
            targetElement.appendChild(this.getElement()); 
            return true;
          }
          return false;
        }

      }
      
      delete(yPosition, xPosition, pieces)
      {
        let pieceToDeletePosition = 0;
                    pieces.forEach(function(pieceToTake){
                        
                    if(pieceToTake.getX() === xPosition && pieceToTake.getY() === yPosition)
                    {
                        table[yPosition][xPosition] = 0;
                        pieceToTake.getElement().remove();
                        pieces.splice(pieceToDeletePosition, 1);
                    }
                    pieceToDeletePosition++;
                })
      }

    takePiece(yPosition, xPosition, pieces, move, whiteScore, blackScore)
    {
        
        if(move.Direction === "left")
        {
                 
            if(yPosition+1 < 8 && xPosition+1 < 8 && table[yPosition+1][xPosition+1] === -1 && this.color == "black")
            {
                    table[yPosition+1][xPosition+1] = 0;
                    let pieceToDeletePosition = 0;
                    pieces.forEach(function(pieceToTake){
                        
                    if(pieceToTake.getX() === xPosition+1 && pieceToTake.getY() === yPosition+1)
                    {
                        pieceToTake.getElement().remove("Wcircle");
                        pieces.splice(pieceToDeletePosition, 1);
                        blackScore.score += 10;
                    }
                    pieceToDeletePosition++;
                })
            }
           
            if(yPosition-1 > -1 && xPosition+1 < 8 && table[yPosition-1][xPosition+1] === 1 && this.color == "white")
            {
                
                table[yPosition-1][xPosition+1] = 0;
                let pieceToDeletePosition = 0;
                pieces.forEach(function(pieceToTake){
                    if(pieceToTake.getX() === xPosition+1 && pieceToTake.getY() === yPosition-1)
                    {
                        
                        pieceToTake.getElement().classList.remove("Bcircle");
                        pieces.splice(pieceToDeletePosition,1);
                        whiteScore.score += 10;
                    }
                    pieceToDeletePosition++;
                })
            }

            
            
        }
    
        if(move.Direction === "right")
        {
        
            if(yPosition+1 < 8 && xPosition-1 >= 0 && table[yPosition+1][xPosition-1] === -1 && this.color == "black")
            {
                table[yPosition+1][xPosition-1] = 0;
                let pieceToDeletePosition = 0;
                pieces.forEach((pieceToTake) =>{
                            if(pieceToTake.getX() === xPosition-1 && pieceToTake.getY() === yPosition+1)
                            {
                                pieceToTake.getElement().remove("Wcircle");
                                pieces.splice(pieceToDeletePosition,1);
                                blackScore.score += 10;
                            }
                            pieceToDeletePosition++;
                        })
                        
            }

            if(yPosition-1 > -1 && xPosition-1 < 8 && table[yPosition-1][xPosition-1] === 1 && this.color == "white")
            {
                
                table[yPosition-1][xPosition-1] = 0;
                let pieceToDeletePosition = 0;
                pieces.forEach(function(pieceToTake){
                    if(pieceToTake.getX() === xPosition-1 && pieceToTake.getY() === yPosition-1)
                    {
                        
                        pieceToTake.getElement().classList.remove("Bcircle");
                        pieces.splice(pieceToDeletePosition,1);
                        whiteScore.score += 10;
                    }
                    pieceToDeletePosition++;
                })
            }
        }
        
    }

}