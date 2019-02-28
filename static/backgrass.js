function Grass(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
    let grasscol = color('#0f9b0f')
  
    // Custom method for updating the variables
    this.update = function() {
      this.x = this.x + this.speed * this.xDir;
      if (this.x >= this.unit || this.x <= 0) {
        this.xDir *= -1;
        this.x = this.x + 1 * this.xDir;
        this.y = this.y + 1 * this.yDir;
      }
      if (this.y >= this.unit || this.y <= 0) {
        this.yDir *= -1;
        this.y = this.y + 1 * this.yDir;
      }
    }
  
    // Custom method for drawing the object
    this.render= function(){
      push();
      stroke(grasscol);
      line(this.xOff + this.x, this.yOff + this.y, this.xOff + this.x, this.yOff + this.y + 27);
      pop();
    }
  
  
//   let unit = 40;
//   let count;
//   let mods = [];
  
//   this.setup = function() {
//     createCanvas(720, 360);
//     noStroke();
//     let wideCount = width / unit;
//     let highCount = height / unit;
//     count = wideCount * highCount;
  
//     let index = 0;
//     for (let y = 0; y < highCount; y++) {
//       for (let x = 0; x < wideCount; x++) {
//         mods[index++] = new Module(
//           x * unit,
//           y * unit,
//           unit / 2,
//           unit / 2,
//           random(0.05, 0.8),
//           unit
//         );
//       }
//     }
//   }
  
//   this.draw = function() {
//     background(0);
//     for (let i = 0; i < count; i++) {
//       mods[i].update();
//       mods[i].draw();
//     }
//   }
}