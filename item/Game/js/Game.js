/**
 * Created by Administrator on 2019/6/15.
 */
//游戏构造函数
(function (){
    var that = null;
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.init = function (){
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food,this.map);
        this.bindKey();
    };
    Game.prototype.runSnake = function(food,map){
        var timeId = setInterval(function (){
            this.snake.move(food,map);
            this.snake.init(this.map);
            var maxX = map.offsetWidth/this.snake.width;
            var maxY = map.offsetHeight/this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if(headX < 0 || headX >= maxX){
                clearInterval(timeId);
                shit();
            }
            if(headY < 0 || headY >= maxY){
                clearInterval(timeId);
                shit();
            }
        }.bind(that),120);
        function shit(){
            playBg.style.display = "block";
            score.style.display = "block";
            score.innerHTML = "本盘得分" + pic;
        }
    };
    Game.prototype.bindKey = function (){
        document.addEventListener("keydown",function (e){
            console.log(e.keyCode);
            switch(e.keyCode){
                case 37:this.snake.direction = "left";break;
                case 38:this.snake.direction = "top";break;
                case 39:this.snake.direction = "right";break;
                case 40:this.snake.direction = "bottom";break;
                case 65:this.snake.direction = "left";break;
                case 87:this.snake.direction = "top";break;
                case 68:this.snake.direction = "right";break;
                case 83:this.snake.direction = "bottom";break;

            }
        }.bind(that),false);
    };
    window.Game = Game;
}());