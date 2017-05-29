function Bird() {
    this.y = height/2; // Middel Screen 
    this.x = 300; // Start Ball From Start Point To End From Width 
 
    this.gravity = 0.5; // Gravity To Ground
    this.lift = -15;  //Up The Ball
    this.velocity = 0; // Speed
    this.show = function(){
        fill(500); // Color Ball 
        ellipse(this.x, this.y, 25, 25 ); // Size 
    }
    this.up = function(){
        this.velocity += this.lift;  // Function To Up Ball
    }
    this.update = function(){
        this.velocity += this.gravity;
        this.velocity += 0.5;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }
}