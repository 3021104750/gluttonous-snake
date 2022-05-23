import '@/vanta/vantaBgc.js'; // vanta.js 动态3d背景
import './style/index.less';
import GameControls from './modules/GameControls';


const gameControls = new GameControls(); // 创建gameControls实例来开始和进行游戏

// 点击开始按钮开始游戏
gameControls.startEle.addEventListener('click', function () {
  gameControls.initGame(); // 每次开始游戏前都要初始化下数据（开始游戏）
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameControls.initGame(); // 按下回车键初始化下数据（开始游戏）
  }
})