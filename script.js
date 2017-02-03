
var grid = document.getElementsByClassName("grid");

var isX = true;

var games = {
    wonX: 0,
    wonO: 0
}

document.getElementById("xwins").innerHTML = games.wonX;
document.getElementById("owins").innerHTML = games.wonO;

//check whose turn it is, and display it
function turn(isX){
    if(isX){
        document.getElementById("turn").innerHTML = "X's turn";
    } else {
        document.getElementById("turn").innerHTML = "O's turn";
    }
}

function checkWinTop(){
    var x = document.getElementsByClassName("grid")[0];
    var y = document.getElementsByClassName("grid")[1];
    var z = document.getElementsByClassName("grid")[2];
    
    if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
    if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinCenter(){
    var x = document.getElementsByClassName("grid")[3];
    var y = document.getElementsByClassName("grid")[4];
    var z = document.getElementsByClassName("grid")[5];
    
    if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
        if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinBottom(){
    var x = document.getElementsByClassName("grid")[6];
    var y = document.getElementsByClassName("grid")[7];
    var z = document.getElementsByClassName("grid")[8];
   
    if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
  if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinLeft(){
    var x = document.getElementsByClassName("grid")[0];
    var y = document.getElementsByClassName("grid")[3];
    var z = document.getElementsByClassName("grid")[6];
    
  if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
  if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinMiddle(){
    var x = document.getElementsByClassName("grid")[1];
    var y = document.getElementsByClassName("grid")[4];
    var z = document.getElementsByClassName("grid")[7];
  
  if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
    if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinRight(){
    var x = document.getElementsByClassName("grid")[2];
    var y = document.getElementsByClassName("grid")[5];
    var z = document.getElementsByClassName("grid")[8];
    
  if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
    if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinDiagonalLeft(){
    var x = document.getElementsByClassName("grid")[0];
    var y = document.getElementsByClassName("grid")[4];
    var z = document.getElementsByClassName("grid")[8];
  
  if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
    if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function checkWinDiagonalRight(){
    var x = document.getElementsByClassName("grid")[2];
    var y = document.getElementsByClassName("grid")[4];
    var z = document.getElementsByClassName("grid")[6];
  
  if(x.innerHTML[4] === undefined || y.innerHTML[4] === undefined || z.innerHTML[4] === undefined){
      return;
    }
  
    if(x.innerHTML != undefined && y.innerHTML != undefined && z.innerHTML != undefined){
      if(x.innerHTML[4] == y.innerHTML[4] && y.innerHTML[4] == z.innerHTML[4]){
        alert(x.innerHTML[4] + ' wins!');
        if(x.innerHTML[4] == 'X'){
          games.wonX++;
          document.getElementById("xwins").innerHTML = games.wonX;
        }
        if(x.innerHTML[4] == 'O'){
          games.wonO++;
          document.getElementById("owins").innerHTML = games.wonO;
        }
        clear();
        return;
      }
    }
}

function clear(){
    for(var i = 0; i < grid.length; i++){
        grid[i].innerHTML = " ";
        isX = true;
        turn(isX);
    }
}

//gets input from click
document.getElementsByClassName("grid")[0].addEventListener("click",  function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        games.wonX++;    
        document.getElementById("xwins").innerHTML = games.wonX;
        isX = false;
        turn(isX);
        checkWinTop();
        checkWinLeft();
        checkWinDiagonalLeft();

    } else {
        games.wonX++;    
        document.getElementById("xwins").innerHTML = games.wonX;
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinTop();
        checkWinLeft();
        checkWinDiagonalLeft();
    }
});

document.getElementsByClassName("grid")[1].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinTop();
        checkWinMiddle();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinTop();
        checkWinMiddle();      
    }
});

document.getElementsByClassName("grid")[2].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinTop();
        checkWinRight();
        checkWinDiagonalRight();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinTop();
        checkWinRight();
        checkWinDiagonalRight();
    }
});

document.getElementsByClassName("grid")[3].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinLeft();
        checkWinCenter();

    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinLeft();
        checkWinCenter();
    }
});

document.getElementsByClassName("grid")[4].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinCenter();
        checkWinMiddle();
        checkWinDiagonalLeft();
        checkWinDiagonalRight();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinCenter();
        checkWinMiddle();
        checkWinDiagonalLeft();
        checkWinDiagonalRight();        
    }
});

document.getElementsByClassName("grid")[5].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinCenter();
        checkWinRight();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinCenter();
        checkWinRight();
    }
});

document.getElementsByClassName("grid")[6].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinLeft();
        checkWinBottom();
        checkWinDiagonalRight();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinLeft();
        checkWinBottom();
        checkWinDiagonalRight();
    }
});

document.getElementsByClassName("grid")[7].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinMiddle();
        checkWinBottom();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinBottom();
        checkWinMiddle();
    }
});

document.getElementsByClassName("grid")[8].addEventListener("click", function(){
    if(isX){
        this.innerHTML = "<h1>X</h1>";
        isX = false;
        turn(isX);
        checkWinBottom();
        checkWinRight();
        checkWinDiagonalLeft();
    } else {
        this.innerHTML = "<h1>O</h1>";
        isX = true;
        turn(isX);
        checkWinBottom();
        checkWinRight();
        checkWinDiagonalLeft();
    }
});


//clear the board
document.getElementById("clear").addEventListener("click", clear);

