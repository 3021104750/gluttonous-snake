import './style/index.less';
import GameControls from './modules/GameControls';

const gameControls = new GameControls(); // 创建游戏实例来开始和进行游戏

// 点击开始按钮开始游戏
gameControls.startEle.addEventListener('click', function () {
  gameControls.initGame(); // 每次开始游戏前都要初始化下数据
});

// 按下键盘 enter 键开始游戏
document.addEventListener('keydown', function (e: KeyboardEvent) {
  if (e.key === 'Enter') {
    gameControls.initGame();
  }
})
