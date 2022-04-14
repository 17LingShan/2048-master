// 返回16个盒子各自的宽高，【可以合并为一个函数】
function getPosTop(i, j) {
    return 20 + i * 120;
}

function getPosLeft(i, j) {
    return 20 + j * 120;
}

// 返回数字的颜色
function getNumberColor(number) {
    if (number <= 4) {
        return '#776e65';
    }
    return '#ff';

}

// 返回数字的背景颜色
function getNumberBackColor(number) {
    switch (number) {
        case 2:
            return '#eee4da';
            break;
        case 4:
            return '#ede0c8';
            break;
        case 8:
            return '#f2b179';
            break;
        case 16:
            return '#f59563';
            break;
        case 32:
            return '#f67c5f';
            break;
        case 64:
            return '#f65e3b';
            break;
        case 128:
            return '#edcf72';
            break;
        case 256:
            return '#edcc61';
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
}

// 检查是否还有空的盒子
function hasSpace() {
    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            if (!board[i][j]) {
                return true;
            }
        }
    }
    return false;
}

// 判断是否可以移动
function canMove(board) {
    if (canMoveDown(board) || canMoveUp(board) || canMoveLeft(board) || canMoveRight(board)) {
        return true;
    }
    return false;
}

function canMoveLeft(board) {
    for (var i = 0; i < 4; ++i) {
        for (var j = 1; j < 4; ++j) {
            if (board[i][j]) {
                if (!board[i][j - 1] || board[i][j - 1] == board[i][j])
                    return true;
            }
        }
    }
    return false;
}


function canMoveRight(board) {
    for (var i = 0; i < 4; ++i) {
        for (var j = 2; j >= 0; --j) {
            if (board[i][j]) {
                if (!board[i][j + 1] || board[i][j + 1] == board[i][j])
                    return true;
            }
        }
    }
    return false;
}


function canMoveUp(board) {
    for (var i = 1; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            if (board[i][j]) {
                if (!board[i - 1][j] || board[i - 1][j] == board[i][j])
                    return true;
            }
        }
    }
    return false;
}


function canMoveDown(board) {
    for (var i = 2; i >= 0; --i) {
        for (var j = 0; j < 4; ++j) {
            if (board[i][j]) {
                if (!board[i + 1][j] || board[i + 1][j] == board[i][j])
                    return true;
            }
        }
    }
    return false;
}

function noBlokHorizontalCol(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i]) {
            return false;
        }
    }
    return true;
}

function noBlokHorizontalRow(row1, row2, col, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col]) {
            return false;
        }
    }
    return true;
}