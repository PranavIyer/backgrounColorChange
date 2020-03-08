
var r;
var g;
var b;

function setup() {
  r = createSprite(600, 200, 1200, 400);
  r.shapeColor = "red";
  r.visible = false;

  g = createSprite(600, 200, 1200, 400);
  g.shapeColor = "green";
  g.visible = false;

  b = createSprite(600, 200, 1200, 400);
  b.shapeColor = "blue";
  b.visible = false;

  createCanvas(1200, 400);
}

function draw() {
  background(255, 255, 255);

// change the value of Red based on the mouse movement about the X axis
  if (World.mouseX > 0 && World.mouseX < 40) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 40 && World.mouseX < 80) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 80 && World.mouseX < 120) {
    r.visible = false;
    g.visible = false;
    b.visible = true;
  }

  // change the value of Red based on the mouse movement about the X axis
  if (World.mouseX > 120 && World.mouseX < 160) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 160 && World.mouseX < 200) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 200 && World.mouseX < 240) {
    r.visible = false;
    g.visible = false;
    b.visible = true;

// change the value of Red based on the mouse movement about the X axis
  } if (World.mouseX > 240 && World.mouseX < 280) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 280 && World.mouseX < 320) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 320 && World.mouseX < 360) {
    r.visible = false;
    g.visible = false;
    b.visible = true;

// change the value of Red based on the mouse movement about the X axis
  } if (World.mouseX > 360 && World.mouseX < 400) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 400 && World.mouseX < 440) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 440 && World.mouseX < 480) {
    r.visible = false;
    g.visible = false;
    b.visible = true;
  }
// change the value of Red based on the mouse movement about the X axis
  if (World.mouseX > 520 && World.mouseX < 560) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 600 && World.mouseX < 640) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 680 && World.mouseX < 720) {
    r.visible = false;
    g.visible = false;
    b.visible = true;
  }

// change the value of Red based on the mouse movement about the X axis  
  if (World.mouseX > 760 && World.mouseX < 800) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 800 && World.mouseX < 840) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 880 && World.mouseX < 920) {
    r.visible = false;
    g.visible = false;
    b.visible = true;
  }

// change the value of Red based on the mouse movement about the X axis  
  if (World.mouseX > 960 && World.mouseX < 1000) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

// change the value of Green based on the mouse movement about the X axis
  if (World.mouseX > 1040 && World.mouseX < 1080) {
    r.visible = false;
    g.visible = true;
    b.visible = false;
  }

// change the value of Blue based on the mouse movement about the X axis
  if (World.mouseX > 1120 && World.mouseX < 1160) {
    r.visible = false;
    g.visible = false;
    b.visible = true;
  }

// change the value of Red based on the mouse movement about the X axis
  if (World.mouseX > 1160 && World.mouseX < 1200) {
    r.visible = true;
    g.visible = false;
    b.visible = false;
  }

  drawSprites();
}