function Box(x, y){
    this.x = x;
    this.y = y;
    this.w = 48;
    this.h = 48;
}
Box.prototype.draw = function(ctx){
    
    imgController.drawSize(ctx, 0, this.x, this.y, this.w, this.h); //(ctx, key, x, y, w, h)
}