/* 为多个dom元素绑定动画，并且在动画执行完毕后，移出相应监听
  @param  element：dom元素节点
          animation：动画名称
          id：dom元素id
          duration：动画执行时间（可省略）
          prefix：默认动画class前缀（可省略）
  @return 返回一个promise函数
*/
export const animateForMultipleDoms = (element: string, animation: string, id: number, duration = '0.5s', prefix = 'animate__') => {
  // We create a Promise and return it
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const nodes = document.querySelectorAll(element);
    console.log(nodes);


    nodes.forEach((item, index) => {
      if (index === id - 1) {
        item.classList.add(`${prefix}animated`, animationName);
        (<HTMLElement>item).style.setProperty('--animate-duration', duration);
      }
    });

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event: AnimationEvent): void {
      event.stopPropagation();
      nodes.forEach((item, index) => {
        if (index === id - 1) {
          item.classList.remove(`${prefix}animated`, animationName);
          (<HTMLElement>item).style.setProperty('--animate-duration', '');
        }
      });
      resolve('Animation ended');
    }

    nodes.forEach((item, index) => {
      if (index === id - 1) {
        (<HTMLElement>item).addEventListener('animationend', handleAnimationEnd, {
          once: true
        });
      }
    });
  });
};

/* 为单个dom元素绑定动画，并且在动画执行完毕后，移出相应监听。
  @param  element：dom元素节点
          animation：动画名称
          id：dom元素id
          duration：动画执行时间（可省略）
          prefix：默认动画class前缀 (可省略)
  @return 返回一个promise函数。
*/
export const animateForSingleDom = (element: string, animation: string, duration = '0.5s', prefix = 'animate__') => {
  // We create a Promise and return it
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node?.classList.add(`${prefix}animated`, animationName);
    (<HTMLElement>node).style.setProperty('--animate-duration', duration);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event: any): void {
      event.stopPropagation();
      node?.classList.remove(`${prefix}animated`, animationName);
      (<HTMLElement>node).style.setProperty('--animate-duration', '');
      resolve('Animation ended');
    }

    node?.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
}

/* 节流 时间戳方法
  @param  fn：回调函数
          delay：延迟时间
  @return 返回一个函数，如果现在时间剪去过去时间大于delay，返回一个回调。
*/
export const throttle = (fn: Function, delay: number = 500) => {
  let last: number = 0;
  let _this = this;
  return function () {
    let now: number = +new Date();
    if (now - last > delay) {
      fn.apply(_this, arguments);
      last = now;
    }
  }
}