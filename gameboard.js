    let playerx = localStorage.getItem("playerx");
    let playero = localStorage.getItem("playero");
    let playerxscore = localStorage.getItem("playerxscore");
    let playeroscore = localStorage.getItem("playeroscore");
    let gamsestopped = document.querySelector(".gamestopped");
    // console.log(playerx, playero , playerxscore , playeroscore);

    const setscoreboard = () => {
        let playerxscore = localStorage.getItem("playerxscore");
        let playeroscore = localStorage.getItem("playeroscore");

        document.querySelector(".scroreboard").innerHTML
            =
            `
        <p class="score">${playerx} - ${playerxscore}</p>
        <p class="score">${playero} - ${playeroscore}</p>
        `
    }

    setscoreboard()

    let turn = "playerx";


    const setTurn = (turn) => {
        if (turn == "playerx") {
            document.querySelector("h1").innerHTML
                = `TURN - ${playerx} &nbsp; (X)`
        }
        else {
            document.querySelector("h1").innerHTML
                = `TURN - ${playero} &nbsp; (O)`
        }
    }
    setTurn('playerx')


    const checkwin = () => {
        let box1 = document.getElementById("box1").innerHTML;
        let box2 = document.getElementById("box2").innerHTML;
        let box3 = document.getElementById("box3").innerHTML;
        let box4 = document.getElementById("box4").innerHTML;
        let box5 = document.getElementById("box5").innerHTML;
        let box6 = document.getElementById("box6").innerHTML;
        let box7 = document.getElementById("box7").innerHTML;
        let box8 = document.getElementById("box8").innerHTML;
        let box9 = document.getElementById("box9").innerHTML;

        if (
            box1 == "X" && box2 == "X" && box3 == "X" ||
            box4 == "X" && box5 == "X" && box6 == "X" ||
            box7 == "X" && box8 == "X" && box9 == "X" ||
            box1 == "X" && box4 == "X" && box7 == "X" ||
            box2 == "X" && box5 == "X" && box8 == "X" ||
            box3 == "X" && box6 == "X" && box9 == "X" ||
            box1 == "X" && box5 == "X" && box9 == "X" ||
            box3 == "X" && box5 == "X" && box7 == "X"
        ) {
            let playerxscore = localStorage.getItem("playerxscore");
            playerxscore = parseInt(playerxscore) + 1;
            localStorage.setItem("playerxscore", playerxscore);
            setscoreboard();
            // alert(`Player X wins`);
            gamsestopped.style.display = "flex";

            gamsestopped.innerHTML = `
            <h2>${playerx} ( X ) Wins</h2>
        <div>
            <button id="replay" onclick="window.location.href='/gameboard.html'">
                Play Again
            </button>
            <button id="quit" onclick="window.location.href='/index.html'">
                Quit
            </button>
        </div>
            `
        }

        else if (
            box1 == "O" && box2 == "O" && box3 == "O" ||
            box4 == "O" && box5 == "O" && box6 == "O" ||
            box7 == "O" && box8 == "O" && box9 == "O" ||
            box1 == "O" && box4 == "O" && box7 == "O" ||
            box2 == "O" && box5 == "O" && box8 == "O" ||
            box3 == "O" && box6 == "O" && box9 == "O" ||
            box1 == "O" && box5 == "O" && box9 == "O" ||
            box3 == "O" && box5 == "O" && box7 == "O"
        ) {
            let playeroscore = localStorage.getItem("playeroscore");
            playeroscore = parseInt(playeroscore) + 1;
            localStorage.setItem("playeroscore", playeroscore);
            setscoreboard();
            gamsestopped.style.display = "flex";

            gamsestopped.innerHTML = `
<h2>${playero} ( O ) Wins</h2>
<div>
<button id="replay" onclick="window.location.href='/gameboard.html'">
    Play Again
</button>
<button id="quit" onclick="window.location.href='/index.html'">
    Quit
</button>
</div>
`
        }

        else if (
            box1 != "" && box2 != "" && box3 != "" &&
            box4 != "" && box5 != "" && box6 != "" &&
            box7 != "" && box8 != "" && box9 != ""
        ) {
            gamsestopped.style.display = "flex";

            gamsestopped.innerHTML = `
<h2>Match Draw !!</h2>
<div>
<button id="replay" onclick="window.location.href='/gameboard.html'">
    Play Again
</button>
<button id="quit" onclick="window.location.href='/index.html'">
    Quit
</button>
</div>
`
        }

    }
    const showxo = (boxid) => {
        let box = document.getElementById(boxid);
        if (turn == "playerx" && box.innerHTML == "") {
            box.innerHTML = "X"
            // box.style.color = "red"
            turn = "playero"
            setTurn(turn)
        }
        else if (turn == "playero" && box.innerHTML == "") {
            box.innerHTML = "O"
            // box.style.color = "blue"
            turn = "playerx"
            setTurn(turn)
        }
    }
    const btnpressed = async (boxid) => {
        // console.log(boxid);
        await showxo(boxid);
        checkwin();
    }
