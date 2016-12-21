function showAnimate(i, j, number) {
    var theNumber = $('#number' + i + '-' + j);
    $(theNumber).css('background-color', numBgCol(number));
    $(theNumber).css('color', numCol(number));
    $(theNumber).text(number);
    $(theNumber).animate({
        'width': '100px',
        'height': '100px',
        'top': posTop(i, j),
        'left': posLeft(i, j)
    }, 200)
}

function moveAnimate(fromx, fromy, tox, toy) {
    var number = $('#number' + fromx + '-' + fromy);
    $(number).animate({
        'top': posTop(tox, toy),
        'left': posLeft(tox, toy)
    }, 200)
}
function scoreView(score){
$('#score').text(score);
}