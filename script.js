var a = 1.7943;  
var phase = 5;
var scale = 1;

const enable_interaction = true;

var t = 0;
const t_rate = .002;

const fps = 50;
var fpsInterval, startTime, now, then, elapsed;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var dwitter_mode = true;

if (dwitter_mode) {
    function S(x){return Math.sin(x)}
    function C(x){return Math.cos(x)}
    function T(x){return Math.tan(x)}
    function R(r,g,b,a){return `rgba(${r},${g},${b},${a})`}
    var c = canvas;
    var x = ctx;
}


function DwitterCode(N,t) {
    x.beginPath();
    for(i=0;i<N;i++){k=scale*(2e3+99*C(1*i*t/phase+1*t))*.98**i;x.lineTo(W/2+k*S(i*a),H/2+k*C(i*a))}
    x.closePath();
    x.fill('evenodd');
    x.lineWidth=10;
    x.strokeStyle=R(250,250,255,.3);
    x.stroke();
}


startAnimating(fps);


function draw() {

    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

    x.fillStyle = 'rgba(220,220,255,1)';
    x.fillRect(0, 0, W, H);

    x.fillStyle = 'rgba(200,200,250,.5)';

    let N = Math.min(Math.floor(500*t),300);

    DwitterCode(N,t);
     
    t += t_rate;
    t %=phase*2*Math.PI;       
}


function startAnimating(fps) {
    
    fpsInterval = 1000/fps;
    then = window.performance.now();
    startTime = then;
    
    animate();
 }
 
 function animate(newtime) {
    
     requestAnimationFrame(animate);
 
     now = newtime;
     elapsed = now - then;
 
     if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
     
        draw();   
     }

    if(enable_interaction) {
        canvas.onclick=e=>{t=0; a=1+2*Math.random(); console.log(a)};
    } 
 }