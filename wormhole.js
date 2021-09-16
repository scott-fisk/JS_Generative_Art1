////https://editor.p5js.org/Shiraserilevi/sketches/P5ZsJYW_P
////Code used and adapted from the above link. 
//
//function Wormhole() {
//    this.name = "2. wormhole";
//    
//    var symmetry = 32;
//    var angle = 360 / symmetry;
//    
//    this.draw = function(){
//        push();
//        var spectrum = fft.analyze();
//        
//        var m = fft.getEnergy("mid");
//        
//        angleMode(DEGREES);
//        //background(0);
//        translate(width / 2, height / 2);    
//        
//        beginShape();
//      
//        for (var i = 0; i < spectrum.length; i++) {
//        push();
//        
//
//        rotate(i*angle);
//        //mirroring
//        if (i % 2 == 1) {
//          scale(-1, 1);
//        }
//        //animation:
//
//        var musicBox = frameCount * 5;
//        rotate( musicBox/ 8.0);
//
//        //drawing shapes
//        blendMode(ADD);
//        noStroke();
//
//        //pink rect
//        fill(255, 72, 176);
//        rect(100, 100, 20, 50);
//
//        push();
//        
//        var x = map(i, 0, spectrum.length, 0, 300);
//        var y = map(i, 0, spectrum.length, 0, height);
//            
//        //fill(map(i, spectrum.length, 255, 72, 176));
//        translate(100,100);
//        rotate(r*20);
//        triangle(x, y, 58, 20, 86, 75);
//        pop();
//        var r=+
//
//        //blue squares
//        push()
//        rotate(musicBox/4);
//        fill(0, 121, 191);
//        rect(m, m, 55, 55);
//        pop()
//
//        pop();
//
//        }
//        
//        endShape();
//
//    };
//

//https://editor.p5js.org/Shiraserilevi/sketches/P5ZsJYW_P
//Code used and adapted from the above link. 

function Wormhole() {
    this.name = "2. wormhole";
    
    var symmetry = 32;
    var angle = 360 / symmetry;
    
    
    this.draw = function(){
        push();
        var spectrum = fft.analyze();
        
        var m = fft.getEnergy("mid");
        
        angleMode(DEGREES);
        //background(0);
        translate(width / 2, height / 2);    
        
        for (var i = 0; i < spectrum.length; i++) {
        push();
        

        rotate(i*angle);
        //mirroring
        if (i % 2 == 1) {
          scale(-1, 1);
        }
        //animation:

        var musicBox = frameCount * 5;
        rotate( musicBox/ 8.0);

        //drawing shapes
        //blends the pixels in the display window
        //Screen - opposite multiply, uses inverse values of the colors
        blendMode(SCREEN);

        //pink rect
        noStroke();
        fill(colorPalette[1]);
        //fill(255, 72, 176);
        
        rect(100, 100, 20, 50);

        push();
        
        var x = map(i, 0, spectrum.length, 0, 300);
        var y = map(i, 0, spectrum.length, 0, height);
            
        //fill(map(i, spectrum.length, 255, 72, 176));
        translate(100,100);
        rotate(r*20);
        triangle(x, y, 58, 20, 86, 75);
        pop();
        var r=+
            
           
        blueSquare();
        
        pop();
            
        function blueSquare()
        {
          
        rotate(musicBox/4);
        //strokeWeight(5);
        //fill(colorPalette[0]);
        
        fill(0, 121, 191);
        rect(m, m, 55, 55);
         
        }
        
        
   

        }
        
        

    };
}