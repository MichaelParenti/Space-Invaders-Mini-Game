document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    modal.remove();
    const playAgain = document.getElementById("btn");
    
    const char = document.getElementById("character");
    var moveBy = 385;
    var charKeyHandler = {
        "ArrowLeft": false,
        "ArrowRight": false,
    };
    var BackAndForth = {
        "MoveOverLeft": false,
        "MoveOverRight": false,
    };

    var enemies = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    var enemies2 = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    var enemies3 = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    var enemies4 = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ];

    var enemyLeft = 0;
    var enemy2Left = 0;
    var enemy3Left = 0;
    var enemy4Left = 0;

    var enemyTop = 20;
    var enemyTop2 = 60;
    var enemyTop3 = 100;
    var enemyTop4 = 140;

    function createEnemies(){
        for(var row=0;row<9;row++){
                if(enemies[row] === 0){
                    var enemy = document.createElement("img");
                    enemy.src = "alien.gif";
                    enemyLeft = enemyLeft + 60;
                    enemy.style.left = enemyLeft + "px";
                    enemy.style.top = enemyTop + "px";
                    document.body.append(enemy);
                }
        }
        for(var row2=0;row2<9;row2++){
                if(enemies2[row2] === 0){
                    var enemy2 = document.createElement("img");
                    enemy2.src = "alien.gif";
                    enemy2Left = enemy2Left + 60;
                    enemy2.style.left = enemy2Left + "px";
                    enemy2.style.top = enemyTop2 + "px";
                    document.body.append(enemy2);
                }
        }
        for(var row3=0;row3<9;row3++){
                if(enemies3[row3] === 0){
                    var enemy3 = document.createElement("img");
                    enemy3.src = "alien.gif";
                    enemy3Left = enemy3Left + 60;
                    enemy3.style.left = enemy3Left + "px";
                    enemy3.style.top = enemyTop3 + "px";
                    document.body.append(enemy3);
                }
        }
        for(var row4=0;row4<9;row4++){
                if(enemies4[row4] === 0){
                    var enemy4 = document.createElement("img");
                    enemy4.src = "alien.gif";
                    enemy4Left = enemy4Left + 60;
                    enemy4.style.left = enemy4Left + "px";
                    enemy4.style.top = enemyTop4 + "px";
                    document.body.append(enemy4);
                    
                }
        }
    }

    createEnemies();

    //Move Enemies Down
    var moveEnemiesDown = setInterval(() => {
        var elem = document.getElementsByTagName("img");
            for (var i = 0; i < elem.length; i++) {
                elem[i].style.top = elem[i].offsetTop + 30 + "px";
                if(elem[i].offsetTop + elem[i].offsetHeight > 280) {
                    clearInterval(moveEnemiesDown);
                    document.body.append(modal);
                }
            }
    }, 3000);


function enemyMoveLeft(){
        var elem = document.getElementsByTagName("img");
            for (var i = 0; i < elem.length; i++) {
                elem[i].style.left = elem[i].offsetLeft - 1 + "px";
            
            }
    
}

function enemyMoveRight(){
        var elem = document.getElementsByTagName("img");
            for (var i = 0; i < elem.length; i++) {
                elem[i].style.left = elem[i].offsetLeft + 1 + "px";

            }
    
}

// function move() {
    
//     var elem = document.getElementsByTagName("img");
//     var i = 0;

//         if(elem[i].offsetLeft < 11){
//             enemyMoveRight();
//         }
//         if(elem[i].offsetLeft > 754){
//             enemyMoveLeft();
//         }

// }


// setInterval(move,50);

setInterval(() => {
    if(BackAndForth["MoveOverRight"]){
        enemyMoveRight();
    }

    if(BackAndForth["MoveOverLeft"]){
        enemyMoveLeft();
    }
},20); 

function enemyMove(){
    var elem = document.getElementsByTagName("img");
    var i = 0;
    if(elem[i].offsetLeft < 100){
        BackAndForth["MoveOverRight"] = true;
        BackAndForth["MoveOverLeft"] = false;
    }
    if(elem[i].offsetLeft > 754){
        BackAndForth["MoveOverLeft"] = true;
        BackAndForth["MoveOverRight"] = false;
    }
}

enemyMove();


// function move(){
//     var i = 0;
//     var elem = document.getElementsByTagName("img");
//     if (elem[i].offsetLeft != 10){x = true;enemyMoveLeft();}else{x = false;enemyMoveLeft();}
//     if (elem[i].offsetLeft != 795){x2 = true;enemyMoveRight();}else{x2 = false;enemyMoveRight();}
// }
// setInterval(move,50);





    // var moveEnemiesOver = setInterval(() => {
    //     var i = 0;
    //     var elem = document.getElementsByTagName("img");
    //     if(elem[i].offsetLeft > 10) {enemyMoveLeft();}
    // }, 50);
    // var moveEnemiesOver2 = setInterval(() => {
    //     var i = 0;
    //     var elem = document.getElementsByTagName("img");
    //     if(elem[i].offsetLeft + elem[i].offsetWidth <= 795) {enemyMoveRight();}
    // }, 50);


            function moveLeft() {
                moveBy = moveBy - 2;
                char.style.left = moveBy + "px";
            }

            function moveRight() {
                    moveBy = moveBy + 2;
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
        
    setInterval(function() { 

        var elem = document.getElementsByTagName("img");
        for (var x = 0; x < elem.length; x++) {
 
        var ow = bullet.offsetWidth;
        var oh = bullet.offsetHeight;
        var ot = bullet.offsetTop;
        var ol = bullet.offsetLeft;

            var o2w = elem[x].offsetWidth;
            var o2h = elem[x].offsetHeight;
            var o2t = elem[x].offsetTop;
            var o2l = elem[x].offsetLeft;

            if ((ol + ow) > (o2l) &&
            (ol) < (o2w + o2l) &&
            (ot) < (o2t + o2h) &&
            (ot+ oh) > (o2t)){
                elem[x].remove();
                bullet.remove();
            }
        }
    },1);
                    }
                        
            }

    document.addEventListener("keydown",(e) => {
            charKeyHandler[e.key] = true;
    });
    document.addEventListener("keyup",(e) => {
            charKeyHandler[e.key] = false;
            shoot(e);
    });

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
    function play() {
        window.location.reload();
    }