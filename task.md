<center>all detail</center>

做一个网页版2048

注意：子绝父相

# 一、编写html页面

## 主要界面：

+ 上方界面有2048标志的h1
+ 一个大的div盒子grid-container
+ 大盒子里面有16个小盒子
+ 大盒子是460*460的正方形盒子
+ 大盒子边角是10px的圆角，背景是#bbada0，
+ 小盒子是100*100大小的正方形盒子
+ 小盒子边角为6的圆角，北背景是ccc0b3
+ 小盒子id=grid-cell-i-j, class=grid-cell
+ 其中0 <= i,j <= 3



## 游戏结束界面：

是一个game over蒙版加上一个restart按钮
蒙版半透明，把grid-container盖住

次要界面：
有newgame的button
有分数

# 二、js实现

建立四个js文件：

main.js:初始化棋盘init()、重置分数updateScore()、先随机生成两个数字在棋盘上getOneNumber()、刷新棋盘页面updateBoardView()、

game.js：

animation.js：每次移动时的动画和蒙版弹出时的动画

support.js：初始化时返回16个盒子各自的grid-cell的top和left即getPosLeft()和getPosTop()【这两个函数可以合并】、判断是否可以移动canMove()、判断是否可以移动四个方向canMoveTop()、canMoveLeft()、canMoveRight()、canMoveDown()【看看能否把四个函数合并】、判断16个小盒子是否都有数字hasSpace(√)、得到不同数字的背景颜色getNumberBackColor(√)、支持不同的数字颜色选取getNumberColor(√)、







# main.js函数实现：

先在main中定义一个二维的JavaScript数组来对棋盘进行操作

newGame()：初始化棋盘、把score设置为零、随机两个格子生成数

init()：通过双重遍历初始化数组中所有数据为0、初始化每个小格子的宽高

upDateBoardView()：每次调用，先remove原本的#number-cell，向大盒子内添加16个#number-cell-i-j盒子（与#grid-cell重合），如果当前的第i行第j列的number-cell中对应的board-i-j为0，这设置宽与高为零，top和left调用support函数返回数字之后再加50；如果有数字，则设置宽高为100px，top和left调用getPos()获取，背景颜色使用getNUmberBackColor(),数字颜色使用getNumberColor()。将hasConflicted-i-j设置为false。



# animation.js函数实现

showNumberWithAnimation(i，j，number)：设置当前数字的背景色，字体颜色以及数字值，用nanimate()显示top、left和宽高的效果，css()直接设置背景颜色与数字颜色，50ms；

showMoveAnimation(fromx，fromy，tox，toy)：接受四个参数，先获取from位置的数字盒子，用animate()来实现move的效果，200ms

upDateScore()：更新#score



# game.js函数实现

使用$(document).keydown(function(event){})中的event.keyCode来获取小键盘的上下左右键（分别是38、40、37、39）。根据keycode判断是否可以moveLeft()等，如果可以，则调用getOneNumber()和isGameover();



moveLeft()：先调用canMoveLeft()判断是否可以移动。

gameover()：添加一个div，id=gameover，calss=gameover；
