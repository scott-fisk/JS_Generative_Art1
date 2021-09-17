//https://editor.p5js.org/Shiraserilevi/sketches/P5ZsJYW_P
//Code used and adapted from the above link. 

function Wormhole() {
    this.name = "2. wormhole";
    
    var symmetry = 32;
    var angle = 360 / symmetry;
    
    
    this.draw = function(){
        push();
        var spectrum = fft.analyze();
        
        
        var t = fft.getEnergy("treble");
        
        //increase speed of kaleidoscope effect
        var musicBox = frameCount * 3;
        
        angleMode(DEGREES);
        
        translate(width / 2, height / 2);    
        
        for (var i = 0; i < spectrum.length; i++) {
        push();
        
        rotate(i*angle);
        //mirroring
        if (i % 2 == 1) {
          scale(-1, 1);
        }
        //animation:

        //control rotation speed of triangles
        rotate(musicBox/8);

        //drawing shapes
        //blends the pixels in the display window
        //Screen - opposite multiply, uses inverse values of the colors
        blendMode(SCREEN);
        

        //pink rect
        noStroke();
        fill(colorPalette[1]);
        //fill(255, 72, 176);
        
//        rect(100, 100, height, t);

        push();
        
        var x = map(i, 0, spectrum.length, 0, 300);
        var y = map(i, 0, spectrum.length, 0, height);
        
            
        //fill(map(i, spectrum.length, 255, 72, 176));
        translate(100,100);
        
        //x*t gives interesting inverted effect
        triangle(x, y, 58, 20, 86, 75);
        
        pop();
               
        blueSquare();
        rect(100, 100, height, t*0.2);
        
            
        pop();
        
        }
        
    }
    
        function blueSquare(){
          
            var m = fft.getEnergy("mid");
            var musicBox = frameCount * 3;
            
            rotate(musicBox/4);
            
            //fill(colorPalette[0]);

            fill(0, 121, 191);
            rect(m, m, 55, 55);
         
        }
        
    

    
}