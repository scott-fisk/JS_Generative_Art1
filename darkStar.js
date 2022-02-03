//https://editor.p5js.org/Shiraserilevi/sketches/P5ZsJYW_P
//Code used and adapted from the above link. 

function Dark_Star() {
    this.name = "3. dark star";

    var symmetry = 16;
    var angle = 360 / symmetry;
    
    this.draw = function(){
        push();
        var spectrum = fft.analyze();
        
        angleMode(DEGREES);
        //background(0);
        var pos = translate(width / 2, height / 2);
        
        for (var i = 0; i < spectrum.length; i++) {
        push();
        
        rotate(i*angle);
        //mirroring
        if (i % 2 == 1) {
          scale(-1, 1);
        }
        //animation:

        var musicBox = frameCount * 5;
        rotate(musicBox/ 8.0);

        //drawing shapes
        blendMode(ADD);
        noStroke();

        push();
        
        var x = map(i, 0, spectrum.length, 0, 300);
        var y = map(spectrum[i], 0, spectrum.length, 0, height);
            
        //add color selector
        fill(colorPalette[0]);
        translate(100,100);
        rotate(r*20);
        triangle(x*2, y*2, 58, 20, 86, 75);
        //triangle(50, 30, 58, 20, 86, 75);
        
        pop();
        var r=+

        pop();

        }
    };
}
