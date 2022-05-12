// 定义计分牌类
export class ScorePanel {
  score: number;
  level: number;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number; // level 最大值
  upScore: number; // 在多少分数的时候升级level

  constructor(maxLevel: number = 6, upScore: number = 2) {
    this.score = 0; // 得分
    this.level = 1; // 关卡
    this.scoreEle = <HTMLElement>document.getElementById('score');
    this.levelEle = <HTMLElement>document.getElementById('level');
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 怎加得分
  addScore() {
    this.scoreEle.innerHTML = `${++this.score}`;
    // 判断每得upScore分，就升级一个level
    if (this.score % this.upScore === 0) {
      this.addLevel();
    }
  }

  // 怎加等级
  addLevel() {
    // 因为蛇会越来越快， 所以level会有一个上线
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = `${++this.level}`;
    }
  }
}

export default ScorePanel;
