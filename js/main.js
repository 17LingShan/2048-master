var board = new Array(); //先定义一个一维数组，在init()的时候再变成二维数组
var hasConflicted = new Array();
var score = 0;

$(function () {
    newGame();
})

function newGame() {
    // 初始化棋盘
    init();
    // 重置分数
    upDataScore(0);
    // 随机在两个格子生成数字
    getOneNumber();
    getOneNumber();
}

function restartgame() {
    $('.gameover').remove();
    newGame();
}

function init() {
    for (var i = 0; i < 4; ++i) {
        board[i] = new Array();
        hasConflicted[i] = new Array();
        for (var j = 0; j < 4; ++j) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;

            var girdCell = $('#grid-cell-' + i + '-' + j);
            girdCell.css({
                "top": getPosTop(i, j),
                "left": getPosLeft(i, j)
            });
        }
    }
    upDataBoardView();
    score = 0;

}

function getOneNumber() {
    // 没有位置就返回false
    if (!hasSpace()) {
        return false;
    }

    var randX, randY; //随机生成的x，y
    while (true) {
        randX = parseInt(Math.floor(Math.random() * 4));
        randY = parseInt(Math.floor(Math.random() * 4));
        // 循环出空位则退出
        if (board[randX][randY] == 0) {
            break;
        }
    }
    board[randX][randY] = Math.random() < 0.5 ? 2 : 4;
    showNumberWithAnimation(randX, randY, board[randX][randY]);
    return true;
}

// 更新棋盘视图
function upDataBoardView() {
    $('.number-cell').remove();

    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            $('.grid-container').append("<div id='number-cell-" + i + "-" + j + "' class='number-cell'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);

            //如果棋盘格的值不为0的话,设置数字格为高宽为100并设置背景色和前景色及数字值
            if (board[i][j]) {
                numberCell.css({
                    'width': "100px",
                    'height': "100px",
                    'top': getPosTop(i, j),
                    'left': getPosLeft(i, j),
                    'backgroundColor': getNumberBackColor(board[i][j]),
                    'color': getNumberColor(board[i][j])
                })
                numberCell.text(board[i][j]);
                hasConflicted[i][j] = false;
            } else {
                numberCell.css({
                    'width': "0px",
                    'height': "0px",
                    'top': getPosTop(i, j) + 50,
                    'left': getPosLeft(i, j) + 50,
                })
            }

        }
    }
}