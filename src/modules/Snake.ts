// 定义蛇类
class Snake {
  snakeEle: HTMLElement; // 整个蛇
  HeadEle: HTMLElement; // 蛇头
  bodyEle: HTMLCollection; // 蛇身（包括蛇头），HTMLCollection是一个集合，里面会自动补充新添加的dom元素

  constructor() {
    this.snakeEle = <HTMLElement>document.getElementById('snake');
    this.HeadEle = <HTMLElement>this.snakeEle?.children[0];
    this.bodyEle = <HTMLCollection>this.snakeEle?.children;
  }

  // 蛇头左偏移位置
  get X() {
    return this.HeadEle.offsetLeft;
  }

  // 蛇头上偏移位置
  get Y() {
    return this.HeadEle.offsetTop;
  }

  // 蛇头移动后获取新左偏移位置并且赋值
  set X(value: number) {
    // 如果新值和旧值一样的话，则不变直接return
    if (this.X === value) {
      return;
    }

    // 移动蛇头部之后的身体
    // 在每次蛇头移动的时候，也要去改变其余身体部分的位置，所以在这里调用moveBody()
    this.moveBody();

    this.HeadEle.style.left = `${value}px`;
  }

  // 蛇头移动后获取新上偏移位置并且赋值
  set Y(value: number) {
    // 如果新值和旧值一样的话，则不变直接return
    if (this.Y === value) {
      return;
    }

    // 移动蛇头部之后的身体
    // 在每次蛇头移动的时候，也要去改变其余身体部分的位置，所以在这里调用moveBody()
    this.moveBody();

    this.HeadEle.style.top = `${value}px`;
  }

  addBody() {
    // 在end tag前添加一个div（添加一个蛇的身体）
    this.snakeEle.insertAdjacentHTML('beforeend', '<div style="display: none"></div>');
  }

  /* 
    蛇移动，修改蛇每一节的位置，其每个的位置都是上一节所在的位置
    （例如移动后，第二节的位置等于之前第一节所在位置，第三节的位置等于之前第二节所在位置，以此类推）。
    在修改每一节位置的时候，我们需要先从最后一节开始修改，因为如果从开头修改的话，前面一节位置变了之后，后面一节就没法知道上一节在之前什么位置了，
  */
  moveBody() {
    // 因为是最后一节开始修改的，所以for循环倒着来
    for (let i = this.bodyEle.length - 1; i > 0; i--) {
      let X = (<HTMLElement>this.bodyEle[i - 1]).offsetLeft;
      let Y = (<HTMLElement>this.bodyEle[i - 1]).offsetTop;

      (<HTMLElement>this.bodyEle[i]).style.left = X + 'px';
      (<HTMLElement>this.bodyEle[i]).style.top = Y + 'px';
      (<HTMLElement>this.bodyEle[i]).style.display = 'block';
    }
  }
}

export default Snake;
