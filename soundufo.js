function SoundUFO(){
	
	this.name = "1. sound ufo";

	this.draw = function(){
		push();
        
    //Stars to only appear if sound is playing    
        if (sound.isPlaying()) {
    			stars();
                ufo();
                ufoLights();
  			} else {
    			ufo();
  			}
            
        pop();
        
    function stars(){
        
        var spectrum = fft.analyze();
        var starPositions;
        var starDirections;
        var numStars;
        var maxDist;
        
        //Star effect background
        
        starPositions = [];
        starDirections = [];

        numStars = 300;
        maxDist = dist(width/2, height/2, width, height);

        //Create stars and store in starPositions and starDirections array
        
        for(var i = 0; i < numStars; i++){
            starPositions.push(createVector(width/2,height/2));
            starDirections.push(createVector(random(-1,1), random(-1,1)));
            starDirections[i].normalize();
            var r = pow(random(0.01,1),10) * maxDist;
            var v = p5.Vector.mult(starDirections[i],r);
            starPositions[i].add(v);
            var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
        }

        fill(255);
        noStroke();

        for(var i = 0; i < starPositions.length; i++){
            var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
            //change the distace perspective from star, larger number = larger star
            var r = d * 20/maxDist;
            r = max(0.01, r);
            ellipse(starPositions[i].x,starPositions[i].y, r,r);
            var v = p5.Vector.mult(starDirections[i],r);
            starPositions[i].add(v);

            if(d > maxDist)
            {
                starPositions[i].set(width/2, height/2);
            }
        }
    }
        
    function ufo(){
        
        //draw the main body of the ufo
        noFill();
		stroke(255, 0, 0, 100);
        //calculate the waveform from the fft.
		
        var wave = fft.waveform();
		for (var i = 0; i < wave.length; i++){
			//for each element of the waveform map it to screen 
			//coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width/2);
			var y = map(wave[i], -1, 1, 0, height/2);

			ellipse(width/2, height/2, x, y);
		}
    }

     function ufoLights(){
         
        var m = fft.getEnergy("mid");
     
        //draw the lights
        noStroke();
        fill(200,200,0, 220);
        
         for(var mid = 0; mid < 6; mid++){
            
            var x = width/3.5 + mid * (width/12);
            
            ellipse(x,height/2,m/2,m);

            }
        }
		
    };
}
