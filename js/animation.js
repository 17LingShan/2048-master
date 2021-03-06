function showNumberWithAnimation(i, j, number) {
    var numberCell = $("#number-cell-" + i + "-" + j);
    numberCell.css({
        'backgroundColor': getNumberBackColor(number),
        'color': getNumberColor(number)
    });
    numberCell.text(number);
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}

function upDataScore(score) {
    $("#score").text(score);
}