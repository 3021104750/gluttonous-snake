import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

// 游戏的整个控制器，控制其他所有类
class GameControls {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  stage: HTMLElement;
  startEle: HTMLElement;
  hintEle: HTMLElement;
  direction: string; // 用来存储蛇移动的方向（按键的方向）
  deadFlag: boolean; // 是否撞墙，游戏结束
  tempX: number; // 零时储存蛇的X轴
  tempY: number; // 零时储存蛇的Y轴
  timer: any; // 蛇运动起来的定时器

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.stage = <HTMLElement>document.getElementById('stage');
    this.startEle = <HTMLElement>document.getElementById('start');
    this.hintEle = <HTMLElement>document.getElementById('hint');
    this.direction = 'ArrowRight';
    this.deadFlag = false;
    this.tempX = 0;
    this.tempY = 0;
    this.timer = null;
  }

  // 调用后控制蛇的方向
  directionControls() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler);
  }

  // 初始化游戏，重置值
  initGame() {
    this.startEle.style.display = 'none';
    this.hintEle.style.display = 'none';
    this.direction = 'ArrowRight'; // 最初方向
    /* 
      每次重新开始游戏前，都要检查下蛇的身体长度，长度大于1的说明蛇有两节或两节以上身子，要把这些身子去除掉
      因此判断在length大于1的时候，删掉多余身子的dom节点
      因为每次删除一个节点，后面的节点会向前补齐，所以每次只要删除索引为1的节点就行了
    */
    let length = this.snake.bodyEle.length - 1; // 蛇一共有几节
    for (let i = 0; i < length; i++) {
      // 删除除了蛇的第一节的dom节点
      this.snake.snakeEle.removeChild(this.snake.bodyEle[1]);
    }
    this.snake.X = 0; // 蛇的左偏移
    this.snake.Y = 0; // 蛇的右偏移
    this.tempX = 0; // 临时左偏移
    this.tempY = 0; // 临时右偏移
    this.scorePanel.score = 0; // 记分
    this.scorePanel.scoreEle.innerHTML = '0'; // 记分dom节点
    this.scorePanel.level = 1; // 等级
    this.scorePanel.levelEle.innerHTML = '1'; // 等级dom节点
    this.food.changePosition(); // 每次开始游戏前都要随机下食物的位置
    // 点击开始游戏后，在250ms后蛇才会动起来，避免在死亡一次之后，蛇的初始位置未及时回正
    setTimeout(() => {
      this.run(); // 蛇动起来
      this.directionControls(); // 调用后控制蛇的方向
    }, 250);
  }

  delay() {
    return 240 - (this.scorePanel.level - 1) * 35;
  }

  // 节流
  throttle = (fn: Function) => {
    let last: number = 0;
    let _this = this;
    return function () {
      let now: number = +new Date();
      if (now - last > _this.delay()) {
        fn.apply(_this, arguments);
        last = now;
      }
    }
  }

  // 使用箭头函数，不然在addEventListner的时候，this指向的是document，而不是GameControls。
  // 如果不使用箭头函数，可以在调用的时候用bind重新调整this的指向（this.keydownHandler.bind(this)）, bind创建了一个新的函数，把新函数的this绑定到了当前this
  keydownHandler = this.throttle((e: KeyboardEvent) => {
    e.preventDefault();
    // 判断按的是否是方向键，是的话才能进行下一步判断，否则蛇不做任何反应
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      // 点击方向按键的时候，判断当前方向是否和按键方向相反，是的不能赋值，因为蛇不能调头走，不是的话赋值
      if (this.direction === 'ArrowRight') {
        if (!(e.key === 'ArrowLeft')) {
          this.direction = e.key;
        }
      } else if (this.direction === 'ArrowLeft') {
        if (!(e.key === 'ArrowRight')) {
          this.direction = e.key;
        }
      } else if (this.direction === 'ArrowUp') {
        if (!(e.key === 'ArrowDown')) {
          this.direction = e.key;
        }
      } else if (this.direction === 'ArrowDown') {
        if (!(e.key === 'ArrowUp')) {
          this.direction = e.key;
        }
      }
    }
  });

  // 控制蛇移动
  run() {
    switch (this.direction) {
      case 'ArrowUp':
        // 如果Y小于0的话，游戏结束
        if (this.tempY < 0) {
          this.deadFlag = true;
        } else {
          // Y大于0的话，游戏不结束
          this.deadFlag = false;
          this.tempY -= 10;
          // 坐标数值一直减，直到等于0时，不变，蛇不动
          if (this.snake.Y <= 0) {
            this.snake.Y = 0;
          } else {
            this.snake.Y -= 10;
          }
        }
        break;
      case 'ArrowLeft':
        // 如果X小于0的话，游戏结束
        if (this.tempX < 0) {
          this.deadFlag = true;
        } else {
          // X大于0的话，游戏不结束
          this.deadFlag = false;
          this.tempX -= 10;
          // 坐标数值一直减，直到等于0时，不变，蛇不动
          if (this.snake.X <= 0) {
            this.snake.X = 0;
          } else {
            this.snake.X -= 10;
          }
        }
        break;
      case 'ArrowRight':
        // 如果X大于290的话，游戏结束
        if (this.tempX > 290) {
          this.deadFlag = true;
        } else {
          // X小于290的话，游戏不结束
          this.deadFlag = false;
          this.tempX += 10;
          // 坐标数值一直减，直到等于290时，不变，蛇不动
          if (this.snake.X >= 290) {
            this.snake.X = 290;
          } else {
            this.snake.X += 10;
          }
        }
        break;
      case 'ArrowDown':
        // 如果Y大于290的话，游戏结束
        if (this.tempY > 290) {
          this.deadFlag = true;
        } else {
          // Y小于290的话，游戏不结束
          this.deadFlag = false;
          this.tempY += 10;
          // 坐标数值一直减，直到等于290时，不变，蛇不动
          if (this.snake.Y >= 290) {
            this.snake.Y = 290;
          } else {
            this.snake.Y += 10;
          }
        }
        break;
    }

    this.timer = setTimeout(() => {
      this.run(); // 蛇动起来
    }, 240 - (this.scorePanel.level - 1) * 35); // 蛇移动速度随着level越高越快

    // 当游戏结束时，停止计时器
    if (this.deadFlag === true) {
      clearTimeout(this.timer);
      this.showEndingMessage();
    }

    // 判断是否吃到食物（蛇头坐标是否和食物坐标一致）
    if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
      this.food.changePosition(); // 改变食物位置
      this.scorePanel.addScore(); // 改变计分牌分数
      this.snake.addBody(); // 增加一节蛇的身体
    }

    // 检查蛇头部和身体有没有相撞，相撞则结束游戏
    this.headStrikedBody();
  }

  // 检查蛇头部和身体有没有相撞，相撞则结束游戏
  headStrikedBody() {
    // 获取所以身体坐标，检查是否和蛇头的坐标一致，一致则表示相撞
    for (let i = 1; i < this.snake.bodyEle.length; i++) {
      let bd = this.snake.bodyEle[i] as HTMLElement;
      if (bd.offsetLeft === this.tempX && bd.offsetTop === this.tempY) {
        clearTimeout(this.timer);
        this.showEndingMessage();
      }
    }
  }

  // 游戏结束时，显示相关提示。
  showEndingMessage() {
    this.startEle.style.display = 'block';
    this.startEle.innerHTML = '重新开始';
    this.hintEle.style.display = 'block';
  }
}

export default GameControls;