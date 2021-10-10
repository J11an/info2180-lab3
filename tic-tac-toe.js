window.onload = function(){

    let player = "P1"
    let move = "X";
    let gameState = ["","","","","","","","",""]
    let board = document.querySelectorAll("#board div");
    const winPerms = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	let statmsg = document.querySelector("#status");





    for (let x=0; x < 9; x++){

        board[x].classList.add("square");

        board[x].addEventListener("click",function(){

        gameState[x] = move;

        for (i = 0; i < winPerms.length; i++){

            if (gameState[winPerms[i][2]] == move && gameState[winPerms[i][1]] == move && gameState[winPerms[i][0]] == move){

                statmsg.textContent = "Congratulations! " + move + " is the winner";

                statmsg.classList.add("you-won");   
            }
        }

            if (player == "P1"){

                board[x].textContent = "X";
                board[x].classList.add("X");
                move = "O";
                player = "P2"

            }

            else if (player == "P2"){

                board[x].textContent = "O";
                board[x].classList.add("O");
                move = "X";
                player = "P1"


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