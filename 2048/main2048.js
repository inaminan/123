var boader = new Array();
var score = 0;
$(document).ready(function () {
    newgame();
})

function newgame() {
    init();
    randomNumber();
    randomNumber();
}

function init() {
    for (var i = 0; i <= 3; i++) 
        for (var j = 0; j <= 3; j++) {
            var boarderCell = $('#boardCell-'+ i + '-' + j);
            $(boarderCell).css({
                'top': posTop(i, j),
                'left': posLeft(i, j)
            })
           
    }

for (var i = 0; i <= 3; i++) {
    boader[i]=new Array();
        for (var j = 0; j <= 3; j++) {
            boader[i][j]=0;
        }
}
boaderView();
 score=0;
}

function randomNumber() {

        if(isFull(boader))
        return false;
var randx=parseInt(Math.floor(Math.random()*4));
var randy=parseInt(Math.floor(Math.random()*4));
while(true){
  if(boader[randx][randy]==0)
     break;
 randx=parseInt(Math.floor(Math.random()*4));
 randy=parseInt(Math.floor(Math.random()*4));
  }
var number=Math.random()<0.5?2:4;
boader[randx][randy]=number;
showAnimate(randx,randy,number);
return true;
}

function boaderView(){
    $('.everyNumber').remove();
    for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 3; j++) {
            $('#board').append('<div class="everyNumber" id="number'+i+'-'+j+'"></div>');
            var theNumber=$('#number'+i+'-'+j);
            if(boader[i][j]==0){
                $(theNumber).css({'height':'0px','width':'0px','top': posTop(i, j)+50,'left':posLeft(i, j)+50});
                }
                else{

                    $(theNumber).css({'width':'100px','height':'100px',
                                     'top': posTop(i, j),
                                    'left': posLeft(i, j),
                                    'background-color':numBgCol(boader[i][j]),
                                    'color':numCol(boader[i][j])
                                    })
                                    $(theNumber).text(boader[i][j]);
            }

    }
}
}
$(document).keydown(function(event){
    switch(event.keyCode){
        case 65:
        if(moveLeft()){
          setTimeout("randomNumber()",210)
          setTimeout("isGameOver()",300)
        }
          break;
           case 87:
        if(moveUp()){
         setTimeout("randomNumber()",210)
         setTimeout("isGameOver()",300)
        }
          break;
           case 68:
        if(moveRight()){
          setTimeout("randomNumber()",210)
         setTimeout("isGameOver()",300)
        }
          break;
           case 83:
        if(moveDown()){
         setTimeout("randomNumber()",210)
          setTimeout("isGameOver()",300)
        }
          break;
          default:
          break;

    }
})
function moveLeft(){
    if(!canMoveLeft(boader))
return false;

for(var i=0;i<=3;i++)
for(var j=1;j<=3;j++){
if(boader[i][j]!=0){

for(var k=0;k<j;k++){
if(boader[i][k]==0&&noblockx(i,k,j,boader)){
    //move
       moveAnimate(i,j,i,k);
        boader[i][k]=boader[i][j];
        boader[i][j]=0;
    continue;
}
    else if(boader[i][k]==boader[i][j]&&noblockx(i,k,j,boader)){
        //move add
        moveAnimate(i,j,i,k);
        boader[i][k]=boader[i][j]*2;
                boader[i][j]=0;
                score+= boader[i][k];
                 scoreView(score);
                continue;
    }
}
}

}
setTimeout("boaderView()",200);
return true;
}

function moveDown(){
    if( !canMoveDown( boader) )
        return false;

    //moveDown
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- ){
            if( boader[i][j] != 0 ){
                for( var k = 3 ; k > i ; k -- ){

                    if( boader[k][j] == 0 && noblocky( j , i , k , boader ) ){
                        moveAnimate( i , j , k , j );
                        boader[k][j] = boader[i][j];
                        boader[i][j] = 0;
                        continue;
                    }
                    else if( boader[k][j] == boader[i][j] && noblocky( j , i , k , boader) ){
                        moveAnimate( i , j , k , j );
                        boader[k][j] *= 2;
                        boader[i][j] = 0;
                        score+= boader[i][k];
                         scoreView(score);
                        continue;
                    }
                }
            }
        }

    setTimeout("boaderView()",200);
    return true;
}

function moveUp(){

    if( !canMoveUp( boader ) )
        return false;

    //moveUp
    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ ){
            if( boader[i][j] != 0 ){
                for( var k = 0 ; k < i ; k ++ ){

                    if( boader[k][j] == 0 && noblocky( j , k , i , boader ) ){
                        moveAnimate( i , j , k , j );
                        boader[k][j] = boader[i][j];
                        boader[i][j] = 0;
                        continue;
                    }
                    else if( boader[k][j] == boader[i][j] && noblocky( j , k , i , boader ) ){
                        moveAnimate( i , j , k , j );
                        boader[k][j] *= 2;
                        boader[i][j] = 0;
                        score+= boader[i][k];
                         scoreView(score);
                        continue;
                    }
                }
            }
        }

    setTimeout("boaderView()",200);
    return true;
}

function moveRight(){
    if(!canMoveRight(boader))
return false;

for(var i=0;i<=3;i++)
for(var j=2;j>=0;j--){
if(boader[i][j]!=0){

for(var k=3;k>j;k--){
if(boader[i][k]==0&&noblockx(i,j,k,boader)){
    //move
       moveAnimate(i,j,i,k);
        boader[i][k]=boader[i][j];
        boader[i][j]=0;
    continue;
}
    else if(boader[i][k]==boader[i][j]&&noblockx(i,j,k,boader)){
        //move add
        moveAnimate(i,j,i,k);
        boader[i][k]=boader[i][j]*2;
                boader[i][j]=0;
                score+= boader[i][k];
                scoreView(score);
                continue;
}
}}}
setTimeout("boaderView()",200);
return true;
}

function isGameOver(){
if(isFull(boader)&&noMove(boader))
    alert('gameover!');
}