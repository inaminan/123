function posTop(i,j){
    return 20+i*120;
}   
function posLeft(i,j){
        return 20+j*120;
}
function numBgCol(number){
switch(number){
    case 2:return '#eee4da';
    case 4:return '#ede0c8';
    case 8:return "#f2b179";
    case 16:return "#f59563";
    case 32:return "#f67c5f";
    case 64:return "#f65e3b";
    case 128:return "#edcf72";
    case 258:return "#edcc61";
    case 512:return "#9c0";
    case 1024:return "#33b5e5";
    case 2048:return "#09c";
    case 4096:return "#a6c";
    case 8192:return "#93c";
}
return 'black';
}
function numCol(number){
if(number<5){
    return '#776e65';
}
    else{
return 'white';
    }
}

function isFull(){
    for (var i = 0; i <= 3; i++) 
        for (var j = 0; j <= 3; j++) 
            if(boader[i][j]==0)
                return false;
              return true; 
                
}

function canMoveLeft(boader){
    //左侧是否有数字,左侧是否有数字跟自己相等
    for(var i=0;i<=3;i++)
    for(var j=1;j<=3;j++)
    if(boader[i][j]!=0)
    if(boader[i][j-1]==0||boader[i][j]==boader[i][j-1])
    return true;
    return false;
}
function canMoveRight(boader){
     for(var i=0;i<=3;i++)
    for(var j=2;j>=0;j--)
    if(boader[i][j]!=0)
    if(boader[i][j+1]==0||boader[i][j]==boader[i][j+1])
    return true;
    return false;
}
function canMoveDown( boader ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( boader[i][j] != 0 )
                if( boader[i+1][j] == 0 || boader[i+1][j] == boader[i][j] )
                    return true;

    return false;
}
function canMoveUp( boader ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 1 ; i < 4 ; i ++ )
            if( boader[i][j] != 0 )
                if( boader[i-1][j] == 0 || boader[i-1][j] == boader[i][j] )
                    return true;

    return false;
}
function canMoveDown(boader ){

    for( var j = 0 ; j < 4 ; j ++ )
        for( var i = 2 ; i >= 0 ; i -- )
            if( boader[i][j] != 0 )
                if( boader[i+1][j] == 0 || boader[i+1][j] == boader[i][j] )
                    return true;

    return false;
}
function noblockx(row,col1,col2,boader){
for(var i=col1+1;i<col2;i++)
    if(boader[row][i]!=0)
    return false;
return true;
}
function noblocky( col , row1 , row2 , boader ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( boader[i][col] != 0 )
            return false;
    return true;
}
function noMove(boader) {
    if(canMoveUp(boader)||canMoveRight(boader)||canMoveLeft(boader)||canMoveDown(boader))
    return false;
    return true;
}