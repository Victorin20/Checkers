let rows = 8;
let columns = 8;
function setGame() 
{

    for(let r = 0; r < rows; r++)
    {
        for(let c = 0; c < columns; c++){
            let square = document.createElement("div");
            square.id = r.toString() + "-" + c.toString();
            updatesquare(square, c, r);
            document.getElementById("board").append(square);
            
        }
    } 

   
    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < columns; c++){
            if (r %2 == c%2) 
            {
                piece = new Piece(c, r, 'white');
                pieces.push(piece);
                piece.getElement().classList.add("Wcircle"); 
                let id = r.toString() + "-" + c.toString();
                piece.getElement().id = id;              
                document.getElementById(id).append(piece.getElement());
                
            }  
        }
    } 

    for(let r = 5; r < 8; r++)
    {
        for(let c = 0; c < columns; c++){
            if (r %2 == c%2) 
            {
                
                piece = new Piece(c, r, 'black');
                pieces.push(piece);
                piece.getElement().classList.add("Bcircle"); 
                let id = r.toString() + "-" + c.toString();
                piece.getElement().id = id;              
                document.getElementById(id).append(piece.getElement());
            }  
        }
    }
}