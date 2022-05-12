// 定义食物类
class Food {
  foodEle: HTMLElement;
  stageEle: HTMLElement;

  constructor() {
    // 会有报错提示，因为ts计算到可能获取不到这个dom节点，值可能为null，所以会报错。
    // 但我们这个项目一定会有这个dom节点，所以直接在最后加一个 感叹号 表示一定有值一定能获取到。
    this.foodEle = <HTMLElement>document.getElementById('food');
    this.stageEle = <HTMLElement>document.getElementById('stage');
  }

  // 获取食物左偏移位置
  get X() {
    return this.foodEle.offsetLeft;
  }

  // 获取食物上偏移位置
  get Y() {
    return this.foodEle.offsetTop;
  }

  // 改变食物坐标
  changePosition() {
    // 随机生成一个位置，最小位置为0px，最大位置为290px（300 - 10）
    // 蛇移动一次的距离为10px，所以食物位置的X和Y坐标被10除后要是一个整数
    let left: number = -1;
    let top: number = -1;
    // 直到X和Y取余等于0时，再跳出循环，这样就能保证取到的数字为0，10，20, ..., 280, 290 
    while (left % this.foodEle.offsetWidth !== 0 || top % this.foodEle.offsetHeight !== 0) {
      left = Math.round(Math.random() * (this.stageEle.offsetWidth - this.foodEle.offsetWidth)); // 0到290的随机数（0:290）
      top = Math.round(Math.random() * (this.stageEle.offsetHeight - this.foodEle.offsetHeight));
    }
    // 这种方法也可以 先取（0:29）之间的随机数，再乘以10，这样就肯定在（0:290）之间了
    // Math.round(Math.random() * 29) * 10;
    this.foodEle.style.left = `${left}px`; // 复制给food的left和top
    this.foodEle.style.top = `${top}px`;
  }
}

export default Food;