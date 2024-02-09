let player = document.getElementById("player");
let obstacle = document.getElementById("obstacle");

document.getElementById("html").addEventListener('keydown', jump, true);

function jump(e) {
    if(player.classList != "player-animation" && e.key === " ") {
        player.classList.add("player-animation");
    }
    setTimeout(function(){
        player.classList.remove("player-animation");
    },500);
}

let checkGameOver = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(obstacleLeft < 20 && obstacleLeft>0 && playerTop >= 130) {
        obstacle.classList.remove('obstacle-animation')
        obstacle.style.display = 'none'
        document.getElementById("html").removeEventListener('keydown', jump, true)
        document.querySelector('.game-over').style.display = "flex"
    }
}, 10); 

function startGame() {
    document.querySelector('.container').style.display = "none"
    obstacle.classList.add('obstacle-animation')
}

function playAgain() {
    obstacle.style.display = 'block'
    document.querySelector('.game-over').style.display = "none"
    document.getElementById("html").addEventListener('keydown', jump);
    obstacle.classList.add('obstacle-animation')
}