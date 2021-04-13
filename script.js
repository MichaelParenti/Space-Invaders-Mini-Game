document.addEventListener("DOMContentLoaded", () => {

    const char = document.getElementById("character");
    var moveBy = 385;
    var charKeyHandler = {
        "ArrowLeft": false,
        "ArrowRight": false,
    }
    var bulletKeyHandler = {
        " ": false
    }


            function moveLeft() {
                moveBy = moveBy - 1;
                char.style.left = moveBy + "px";
            }

            function moveRight() {
                    moveBy = moveBy + 1;
                    char.style.left = moveBy + "px";  
            }

            function shoot(e) {
                    if(e.key == " "){
                        var bullet = document.createElement("p");
                            bullet.style.left = char.offsetLeft + (char.offsetWidth / 2) + "px";
                            document.body.append(bullet);
                                setTimeout(() => {
                                    bullet.remove();
                                },500);
                    }
                        
            }

    document.addEventListener("keydown",(e) => {
            charKeyHandler[e.key] = true;
    });
    document.addEventListener("keyup",(e) => {
            charKeyHandler[e.key] = false;
            shoot(e);
    });

    // document.addEventListener("keyup",shoot);

    function keyUpdate() {
        if(charKeyHandler["ArrowLeft"] && char.offsetLeft > 5){
            moveLeft();
        }
        if(charKeyHandler["ArrowRight"] && char.offsetLeft + char.offsetWidth < 805){
            moveRight();
        }
    }

    setInterval(keyUpdate,1);
        
});