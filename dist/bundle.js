/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _modules_GameControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControls */ \"./src/modules/GameControls.ts\");\n\n\nvar gameControls = new _modules_GameControls__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // 创建游戏实例来开始和进行游戏\n// 点击开始按钮开始游戏\n\ngameControls.startEle.addEventListener('click', function () {\n  gameControls.initGame(); // 每次开始游戏前都要初始化下数据\n}); // 按下键盘 enter 键开始游戏\n\ndocument.addEventListener('keydown', function (e) {\n  if (e.key === 'Enter') {\n    gameControls.initGame();\n  }\n});\n\n//# sourceURL=webpack://snake/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// 定义食物类\nvar Food = /*#__PURE__*/function () {\n  function Food() {\n    _classCallCheck(this, Food);\n\n    // 会有报错提示，因为ts计算到可能获取不到这个dom节点，值可能为null，所以会报错。\n    // 但我们这个项目一定会有这个dom节点，所以直接在最后加一个 感叹号 表示一定有值一定能获取到。\n    this.foodEle = document.getElementById('food');\n    this.stageEle = document.getElementById('stage');\n  } // 获取食物左偏移位置\n\n\n  _createClass(Food, [{\n    key: \"X\",\n    get: function get() {\n      return this.foodEle.offsetLeft;\n    } // 获取食物上偏移位置\n\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.foodEle.offsetTop;\n    } // 改变食物坐标\n\n  }, {\n    key: \"changePosition\",\n    value: function changePosition() {\n      // 随机生成一个位置，最小位置为0px，最大位置为290px（300 - 10）\n      // 蛇移动一次的距离为10px，所以食物位置的X和Y坐标被10除后要是一个整数\n      var left = -1;\n      var top = -1; // 直到X和Y取余等于0时，再跳出循环，这样就能保证取到的数字为0，10，20, ..., 280, 290 \n\n      while (left % this.foodEle.offsetWidth !== 0 || top % this.foodEle.offsetHeight !== 0) {\n        left = Math.round(Math.random() * (this.stageEle.offsetWidth - this.foodEle.offsetWidth)); // 0到290的随机数（0:290）\n\n        top = Math.round(Math.random() * (this.stageEle.offsetHeight - this.foodEle.offsetHeight));\n      } // 这种方法也可以 先取（0:29）之间的随机数，再乘以10，这样就肯定在（0:290）之间了\n      // Math.round(Math.random() * 29) * 10;\n\n\n      this.foodEle.style.left = \"\".concat(left, \"px\"); // 复制给food的left和top\n\n      this.foodEle.style.top = \"\".concat(top, \"px\");\n    }\n  }]);\n\n  return Food;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);\n\n//# sourceURL=webpack://snake/./src/modules/Food.ts?");

/***/ }),

/***/ "./src/modules/GameControls.ts":
/*!*************************************!*\
  !*** ./src/modules/GameControls.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/modules/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScorePanel */ \"./src/modules/ScorePanel.ts\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snake */ \"./src/modules/Snake.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n // 游戏的整个控制器，控制其他所有类\n\nvar GameControls = /*#__PURE__*/function () {\n  function GameControls() {\n    var _this = this;\n\n    _classCallCheck(this, GameControls);\n\n    // 使用箭头函数，不然在addEventListner的时候，this指向的是document，而不是GameControls。\n    // 如果不使用箭头函数，可以在调用的时候用bind重新调整this的指向（this.keydownHandler.bind(this)）, bind创建了一个新的函数，把新函数的this绑定到了当前this\n    this.keydownHandler = function (e) {\n      e.preventDefault(); // 判断按的是否是方向键，是的话才能进行下一步判断，否则蛇不做任何反应\n\n      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {\n        // 点击方向按键的时候，判断当前方向是否和按键方向相反，是的不能赋值，因为蛇不能调头走，不是的话赋值\n        if (_this.direction === 'ArrowRight') {\n          if (!(e.key === 'ArrowLeft')) {\n            _this.direction = e.key;\n          }\n        } else if (_this.direction === 'ArrowLeft') {\n          if (!(e.key === 'ArrowRight')) {\n            _this.direction = e.key;\n          }\n        } else if (_this.direction === 'ArrowUp') {\n          if (!(e.key === 'ArrowDown')) {\n            _this.direction = e.key;\n          }\n        } else if (_this.direction === 'ArrowDown') {\n          if (!(e.key === 'ArrowUp')) {\n            _this.direction = e.key;\n          }\n        }\n      }\n    };\n\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.stage = document.getElementById('stage');\n    this.startEle = document.getElementById('start');\n    this.hintEle = document.getElementById('hint');\n    this.direction = 'ArrowRight';\n    this.deadFlag = false;\n    this.tempX = 0;\n    this.tempY = 0;\n    this.timer = null;\n  } // 调用后控制蛇的方向\n\n\n  _createClass(GameControls, [{\n    key: \"directionControls\",\n    value: function directionControls() {\n      // 绑定键盘按键按下的事件\n      document.addEventListener('keydown', this.keydownHandler);\n    } // 初始化游戏，重置值\n\n  }, {\n    key: \"initGame\",\n    value: function initGame() {\n      var _this2 = this;\n\n      this.startEle.style.display = 'none';\n      this.hintEle.style.display = 'none';\n      this.direction = 'ArrowRight'; // 最初方向\n\n      /*\n        每次重新开始游戏前，都要检查下蛇的身体长度，长度大于1的说明蛇有两节或两节以上身子，要把这些身子去除掉\n        因此判断在length大于1的时候，删掉多余身子的dom节点\n        因为每次删除一个节点，后面的节点会向前补齐，所以每次只要删除索引为1的节点就行了\n      */\n\n      var length = this.snake.bodyEle.length - 1; // 蛇一共有几节\n\n      for (var i = 0; i < length; i++) {\n        // 删除除了蛇的第一节的dom节点\n        this.snake.snakeEle.removeChild(this.snake.bodyEle[1]);\n      }\n\n      this.snake.X = 0; // 蛇的左偏移\n\n      this.snake.Y = 0; // 蛇的右偏移\n\n      this.tempX = 0; // 临时左偏移\n\n      this.tempY = 0; // 临时右偏移\n\n      this.scorePanel.score = 0; // 记分\n\n      this.scorePanel.scoreEle.innerHTML = '0'; // 记分dom节点\n\n      this.scorePanel.level = 1; // 等级\n\n      this.scorePanel.levelEle.innerHTML = '1'; // 等级dom节点\n\n      this.food.changePosition(); // 每次开始游戏前都要随机下食物的位置\n      // 点击开始游戏后，在250ms后蛇才会动起来，避免在死亡一次之后，蛇的初始位置未及时回正\n\n      setTimeout(function () {\n        _this2.run(); // 蛇动起来\n\n\n        _this2.directionControls(); // 调用后控制蛇的方向\n\n      }, 250);\n    } // 控制蛇移动\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      var _this3 = this;\n\n      switch (this.direction) {\n        case 'ArrowUp':\n          // 如果Y小于0的话，游戏结束\n          if (this.tempY < 0) {\n            this.deadFlag = true;\n          } else {\n            // Y大于0的话，游戏不结束\n            this.deadFlag = false;\n            this.tempY -= 10; // 坐标数值一直减，直到等于0时，不变，蛇不动\n\n            if (this.snake.Y <= 0) {\n              this.snake.Y = 0;\n            } else {\n              this.snake.Y -= 10;\n            }\n          }\n\n          break;\n\n        case 'ArrowLeft':\n          // 如果X小于0的话，游戏结束\n          if (this.tempX < 0) {\n            this.deadFlag = true;\n          } else {\n            // X大于0的话，游戏不结束\n            this.deadFlag = false;\n            this.tempX -= 10; // 坐标数值一直减，直到等于0时，不变，蛇不动\n\n            if (this.snake.X <= 0) {\n              this.snake.X = 0;\n            } else {\n              this.snake.X -= 10;\n            }\n          }\n\n          break;\n\n        case 'ArrowRight':\n          // 如果X大于290的话，游戏结束\n          if (this.tempX > 290) {\n            this.deadFlag = true;\n          } else {\n            // X小于290的话，游戏不结束\n            this.deadFlag = false;\n            this.tempX += 10; // 坐标数值一直减，直到等于290时，不变，蛇不动\n\n            if (this.snake.X >= 290) {\n              this.snake.X = 290;\n            } else {\n              this.snake.X += 10;\n            }\n          }\n\n          break;\n\n        case 'ArrowDown':\n          // 如果Y大于290的话，游戏结束\n          if (this.tempY > 290) {\n            this.deadFlag = true;\n          } else {\n            // Y小于290的话，游戏不结束\n            this.deadFlag = false;\n            this.tempY += 10; // 坐标数值一直减，直到等于290时，不变，蛇不动\n\n            if (this.snake.Y >= 290) {\n              this.snake.Y = 290;\n            } else {\n              this.snake.Y += 10;\n            }\n          }\n\n          break;\n      }\n\n      this.timer = setTimeout(function () {\n        _this3.run(); // 蛇动起来\n\n      }, 240 - (this.scorePanel.level - 1) * 35); // 蛇移动速度随着level越高越快\n      // 当游戏结束时，停止计时器\n\n      if (this.deadFlag === true) {\n        clearTimeout(this.timer);\n        this.showEndingMessage();\n      } // 判断是否吃到食物（蛇头坐标是否和食物坐标一致）\n\n\n      if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {\n        this.food.changePosition(); // 改变食物位置\n\n        this.scorePanel.addScore(); // 改变计分牌分数\n\n        this.snake.addBody(); // 增加一节蛇的身体\n      } // 检查蛇头部和身体有没有相撞，相撞则结束游戏\n\n\n      this.headStrikedBody();\n    } // 检查蛇头部和身体有没有相撞，相撞则结束游戏\n\n  }, {\n    key: \"headStrikedBody\",\n    value: function headStrikedBody() {\n      // 获取所以身体坐标，检查是否和蛇头的坐标一致，一致则表示相撞\n      for (var i = 1; i < this.snake.bodyEle.length; i++) {\n        var bd = this.snake.bodyEle[i];\n\n        if (bd.offsetLeft === this.tempX && bd.offsetTop === this.tempY) {\n          clearTimeout(this.timer);\n          this.showEndingMessage();\n        }\n      }\n    } // 游戏结束时，显示相关提示。\n\n  }, {\n    key: \"showEndingMessage\",\n    value: function showEndingMessage() {\n      this.startEle.style.display = 'block';\n      this.startEle.innerHTML = '重新开始';\n      this.hintEle.style.display = 'block';\n    }\n  }]);\n\n  return GameControls;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControls);\n\n//# sourceURL=webpack://snake/./src/modules/GameControls.ts?");

/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScorePanel\": () => (/* binding */ ScorePanel),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// 定义计分牌类\nvar ScorePanel = /*#__PURE__*/function () {\n  function ScorePanel() {\n    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;\n    var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n\n    _classCallCheck(this, ScorePanel);\n\n    this.score = 0; // 得分\n\n    this.level = 1; // 关卡\n\n    this.scoreEle = document.getElementById('score');\n    this.levelEle = document.getElementById('level');\n    this.maxLevel = maxLevel;\n    this.upScore = upScore;\n  } // 怎加得分\n\n\n  _createClass(ScorePanel, [{\n    key: \"addScore\",\n    value: function addScore() {\n      this.scoreEle.innerHTML = \"\".concat(++this.score); // 判断每得upScore分，就升级一个level\n\n      if (this.score % this.upScore === 0) {\n        this.addLevel();\n      }\n    } // 怎加等级\n\n  }, {\n    key: \"addLevel\",\n    value: function addLevel() {\n      // 因为蛇会越来越快， 所以level会有一个上线\n      if (this.level < this.maxLevel) {\n        this.levelEle.innerHTML = \"\".concat(++this.level);\n      }\n    }\n  }]);\n\n  return ScorePanel;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePanel);\n\n//# sourceURL=webpack://snake/./src/modules/ScorePanel.ts?");

/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// 定义蛇类\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    var _a, _b;\n\n    this.snakeEle = document.getElementById('snake');\n    this.HeadEle = (_a = this.snakeEle) === null || _a === void 0 ? void 0 : _a.children[0];\n    this.bodyEle = (_b = this.snakeEle) === null || _b === void 0 ? void 0 : _b.children;\n  } // 蛇头左偏移位置\n\n\n  _createClass(Snake, [{\n    key: \"X\",\n    get: function get() {\n      return this.HeadEle.offsetLeft;\n    } // 蛇头上偏移位置\n    ,\n    set: // 蛇头移动后获取新左偏移位置并且赋值\n    function set(value) {\n      // 如果新值和旧值一样的话，则不变直接return\n      if (this.X === value) {\n        return;\n      } // 移动蛇头部之后的身体\n      // 在每次蛇头移动的时候，也要去改变其余身体部分的位置，所以在这里调用moveBody()\n\n\n      this.moveBody();\n      this.HeadEle.style.left = \"\".concat(value, \"px\");\n    } // 蛇头移动后获取新上偏移位置并且赋值\n\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.HeadEle.offsetTop;\n    },\n    set: function set(value) {\n      // 如果新值和旧值一样的话，则不变直接return\n      if (this.Y === value) {\n        return;\n      } // 移动蛇头部之后的身体\n      // 在每次蛇头移动的时候，也要去改变其余身体部分的位置，所以在这里调用moveBody()\n\n\n      this.moveBody();\n      this.HeadEle.style.top = \"\".concat(value, \"px\");\n    }\n  }, {\n    key: \"addBody\",\n    value: function addBody() {\n      // 在end tag前添加一个div（添加一个蛇的身体）\n      this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>');\n    }\n    /*\n      蛇移动，修改蛇每一节的位置，其每个的位置都是上一节所在的位置\n      （例如移动后，第二节的位置等于之前第一节所在位置，第三节的位置等于之前第二节所在位置，以此类推）。\n      在修改每一节位置的时候，我们需要先从最后一节开始修改，因为如果从开头修改的话，前面一节位置变了之后，后面一节就没法知道上一节在之前什么位置了，\n    */\n\n  }, {\n    key: \"moveBody\",\n    value: function moveBody() {\n      // 因为是最后一节开始修改的，所以for循环倒着来\n      for (var i = this.bodyEle.length - 1; i > 0; i--) {\n        var X = this.bodyEle[i - 1].offsetLeft;\n        var Y = this.bodyEle[i - 1].offsetTop;\n        this.bodyEle[i].style.left = X + 'px';\n        this.bodyEle[i].style.top = Y + 'px';\n      }\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n//# sourceURL=webpack://snake/./src/modules/Snake.ts?");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/index.less":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/index.less ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_6_7_1_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\nbody {\\n  font: bold 20px \\\"Courier\\\";\\n}\\n#logo {\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  margin: 70px auto 0;\\n  font-size: 35px;\\n}\\n#main {\\n  position: relative;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  width: 360px;\\n  height: 420px;\\n  background-color: #b7d4a8;\\n  margin: 40px auto;\\n  border: 10px solid #000;\\n  border-radius: 40px;\\n}\\n#main #hint {\\n  display: none;\\n  position: absolute;\\n  top: 80px;\\n  font-size: 25px;\\n  color: lightcoral;\\n}\\n#main #start {\\n  position: absolute;\\n  top: 50%;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%);\\n  width: 180px;\\n  height: 120px;\\n  line-height: 120px;\\n  text-align: center;\\n  font-size: 22px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  color: #eee;\\n  border: 1px solid #eee;\\n  border-radius: 8px;\\n  cursor: pointer;\\n  z-index: 99;\\n}\\n#main #start:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n  color: #b7d4a8;\\n  border: 1px solid #000;\\n}\\n#main #stage {\\n  position: relative;\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid #000;\\n  margin-bottom: 20px;\\n}\\n#main #stage #snake > div {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000;\\n  border: 1px solid #b7d4a8;\\n}\\n#main #stage #food {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000;\\n  border: 1px solid #b7d4a8;\\n  left: 40px;\\n  top: 100px;\\n  border-radius: 50%;\\n}\\n#main #score-panel {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  width: 360px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake/./src/style/index.less?./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://snake/./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snake/./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!../../node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./index.less */ \"./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_postcss-loader@6.2.1@postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/style/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_postcss_loader_6_2_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snake/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js ***!
  \****************************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js ***!
  \******************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js ***!
  \***********************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snake/./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;