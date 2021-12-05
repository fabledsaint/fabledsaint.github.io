var c, ctx, vRain;

window.addEventListener('resize', resizeCanvas, false);


class Rain{
  constructor(x,y,l,v){
    this.x=x;
    this.y=y;
    this.vy=v;
    this.l=l;
  }
  show(){
    ctx.beginPath();
    if (sessionStorage.getItem("mode") == "dark") {
      ctx.strokeStyle="white";
    } else {
      ctx.strokeStyle="black";
    }
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x,this.y+this.l);
    ctx.stroke();

  }

  fall(){
    this.y+=this.vy;

    if(this.y>c.height){
      this.x=Math.floor(Math.random()*c.width)+5;
      this.y=Math.floor(Math.random()*100)-100;
      this.l=Math.floor(Math.random()*30)+1;
      this.vy=Math.floor(Math.random()*12)+4;
    }
  }
}

function loop() {

  ctx.clearRect(0,0,c.width,c.height);

  for (var i=0;i<vRain.length;i++) {
    vRain[i].show();
    vRain[i].fall();
  }

}


function setup() {
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  vRain = [];
  for (var i=0;i<60;i++) {
    vRain[i]=new Rain(
      Math.floor(Math.random()*c.width)+5,
      Math.floor(Math.random()*100)-100,
      Math.floor(Math.random()*30)+1,
      Math.floor(Math.random()*12)+4
    );
  }

  setInterval(loop,10);
}


function resizeCanvas() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}
