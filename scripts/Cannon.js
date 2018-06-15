function Cannon(x, y){
    this.x = x;
    this.y = y;
    this.w = 48;
    this.h = 48;
}

Cannon.prototype.draw = function(ctx, ang){
    imgController.drawSizeAngle(ctx, 1, this.x, this.y, this.w, this.h, ang); //(ctx, key, x, y, w, h)
    imgController.drawSize(ctx, 2, this.x, this.y+this.h/2, this.w, this.h); //(ctx, key, x, y, w, h)
}