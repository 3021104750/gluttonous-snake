import * as THREE from './three.r119.min.js';
import WAVES from './vanta.waves.min.js';

let bodyEle = document.body;
WAVES({
  THREE: THREE,
  el: bodyEle,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500.00,
  minWidth: 500.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x87402e,
  shininess: 60.00,
  waveHeight: 25.00,
  waveSpeed: 1.20
});
