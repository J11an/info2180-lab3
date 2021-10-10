window.onload = function(){

    let turn = "P1";
    let gameState = ["","","","","","","","",""]
    let board = document.querySelectorAll("#board div");




    for (let x=0; x < 9; x++){

        board[x].classList.add("square");

        board[x].addEventListener("click",function(){

            if (turn == "P1"){

                board[x].textContent = "X";
                board[x].classList.add("X");
                turn = "P2";
                gameState[x] = "X"

            }

            else if (turn == "P2"){

                board[x].textContent = "O";
                board[x].classList.add("O");
                turn = "P1";
                console.log(gameState);
                gameState[x] = "Y"
            }
        

        })

        board[x].addEventListener("mouseover",function(){

            this.classList.add("hover");

        })
        		board[x].addEventListener('mouseout', function(){
			this.classList.remove("hover");
		});
    }

    





}   