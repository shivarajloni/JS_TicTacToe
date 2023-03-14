localStorage.clear()

    const startgame = () => {
        if (document.getElementById('playerx').value == ""
            || document.getElementById('playero').value == ""
        ) {
            alert("Please Enter Player Name")
        }

        else if (
            document.getElementById('playerx').value ==
            document.getElementById('playero').value
        ) {
            alert("Player Name Should be Different")
        }

        else {
            localStorage.setItem('playerx', document.getElementById('playerx').value)
            localStorage.setItem('playero', document.getElementById('playero').value)
            localStorage.setItem('playerxscore', 0)
            localStorage.setItem('playeroscore', 0)


            window.location.href = "/gameboard.html"
        }

    }