import '@/vanta/vantaBgc.js'; // vanta.js 动态3d背景
import './style/index.less';
import GameControls from './modules/GameControls';


const gameControls = new GameControls(); // 创建游戏实例来开始和进行游戏

// 点击开始按钮开始游戏
gameControls.startEle.addEventListener('click', async function () {
  gameControls.initGame(); // 每次开始游戏前都要初始化下数据
});

