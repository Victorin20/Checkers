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
            if(this.getColor() == "black" &&  this.type === "stone" && table[this.y-1][this.x+1] === 0)
            {
                
                document.getElementById((this.y-1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x-1] === 0)
            {
                document.getElementById((this.y-1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }



            if(this.getColor() == "white" &&  this.type === "stone" && table[this.y+1][this.x+1] === 0)
            {
                
                document.getElementById((this.y+1).toString() + "-" +(this.x+1).toString()).style.backgroundColor = "green";             
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x-1] === 0)
            {
                document.getElementById((this.y+1).toString() + "-" +(this.x-1).toString()).style.backgroundColor = "green";
            }
    }

    getPossibleMovements(table)
    {

        let posibleMovements = [];

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x+1] === 0)
            {
                
                posibleMovements.push((this.y-1).toString() + "-" +(this.x+1).toString());            
            }

            if(this.getColor() == "black" && this.type === "stone" && table[this.y-1][this.x-1] === 0)
            {
                posibleMovements.push((this.y-1).toString() + "-" +(this.x-1).toString())
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x+1] === 0)
            {
                
               posibleMovements.push((this.y+1).toString() + "-" +(this.x+1).toString())             
            }

            if(this.getColor() == "white" && this.type === "stone" && table[this.y+1][this.x-1] === 0)
            {
                posibleMovements.push((this.y+1).toString() + "-" +(this.x-1).toString())
            }

            return posibleMovements;
    }

    move(yPosition, xPosition, posibleMovement)
    {
        let id = yPosition.toString() + "-" + xPosition.toString();

            if(Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "black")
            {
                table[yPosition][xPosition] = 1;
                table[this.getY()][this.getX()] = 0;
                this.setY(yPosition);
                this.setX(xPosition);
                this.getElement().id = id;
                document.getElementById(id).append(this.getElement());
                
            }
            
            if(Number(posibleMovement[0]) === yPosition && Number(posibleMovement[2]) === xPosition && this.getColor() === "white")
            {
                table[yPosition][xPosition] = -1;
                table[this.getY()][this.getX()] = 0;
                this.setY(yPosition);
                this.setX(xPosition);
                document.getElementById(id).append(this.getElement());
               
            }
    }

}