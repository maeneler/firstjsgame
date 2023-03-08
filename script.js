const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
    if(character.classList != "animate"){
         character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    }, 500)
}
document.addEventListener('keydown', event => {
    if (event.code === 'Space'){
        jump()
    }
}) 

document.addEventListener('touchstart', () => {
    jump();
});

function move(){    
    block.classList.add("move");   
}

const checkDead = setInterval(function(){
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let differentText = document.getElementById("button")

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lost.")
        differentText.innerHTML = "Play again!"
    }
}, 10)

let restart = document.getElementById("button")
    restart.addEventListener("click", restartGame, false)

    function restartGame(){
        let game = document.querySelector("#block");

        block.style.animation = "";
        block.style.display = "";
    }
