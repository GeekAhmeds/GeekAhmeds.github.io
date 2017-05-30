function Pipe() {

    var spacing = random(70, height / 2);
    var centry = random(spacing, height - spacing);
  //  this.top = centry - spacing / 1 ;
    this.bottom = height- (centry + spacing / 2) ;
    this.x = width;
    this.w = random(120);
    this.speed = 2;
    this.highlight = false;
    this.hits = function(bird){
        if(bird.y < this.top || bird.y > height - this.bottom)
        if (bird.x >  this.x && bird.x < this.x + this.w) {
            this.highlight = true;
            return true;
        }
        this.highlight = false;
        return false;
}

    this.show = function () {
      noStroke()
        fill(191, 191, 191);
        if(this.highlight){
            fill(255, 0, 0);
          //  song.play();
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
        this.update = function(){
                this.x -= this.speed;
            }
           this.offscreen = function(){
               if(this.x < -this.w){
                   return true;
               }else{
                   return false;
               }
           }
}
