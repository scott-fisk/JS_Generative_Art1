function SoundUFO(){
	
	this.name = "1. sound ufo";

	this.draw = function(){
		push();
        
        var spectrum = fft.analyze();
        var starPositions;
        var starDirections;
        var numStars;
        var maxDist;
        

		beginShape();
        
        //Star effect background
        //
        
        
        starPositions = [];
        starDirections = [];

        numStars = 200;
        maxDist = dist(width/2, height/2, width, height);

        for(var i = 0; i < numStars; i++)
        {
            starPositions.push(createVector(width/2,height/2));
            starDirections.push(createVector(random(-1,1), random(-1,1)));
            starDirections[i].normalize();
            var r = pow(random(0.01,1),10) * maxDist;
            var v = p5.Vector.mult(starDirections[i],r);
            starPositions[i].add(v);
            var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
        }
        
        endShape();

        
    
        fill(255);
        noStroke();

        beginShape();
        
        
        for(var i = 0; i < starPositions.length; i++)
        {
            var d = dist(starPositions[i].x,starPositions[i].y, width/2,height/2);
            var r = d * 20/maxDist;
            r = max(0.01, r);
            ellipse(starPositions[i].x,starPositions[i].y, r,r);
            var v = p5.Vector.mult(starDirections[i],r);
            starPositions[i].add(v);

            if(d > maxDist + random(0,500))
            {
                starPositions[i].set(width/2, height/2);
            }
        }
        endShape();
        
        //Star effect end
        
        pop();
    
        push();
        
//        noFill();
//		stroke(255, 0, 0);
//        
//        beginShape();
//        
//		//calculate the waveform from the fft.
//		var wave = fft.waveform();
//		for (var i = 0; i < wave.length; i++){
//			//for each element of the waveform map it to screen 
//			//coordinates and make a new vertex at the point.
//			var x = map(i, 0, wave.length, 0, width/2);
//			var y = map(wave[i], -1, 1, 0, height/2);
//
//			ellipse(width/2, height/2,x, y);
//		}
//        endShape();
//        
//        beginShape();
//
//        var m = fft.getEnergy("mid");
//        
//        noStroke();
//        fill(200,200,0);
//        for(var mid = 0; mid < 6; mid++){
//            
//            var x = width/3.5 + mid * (width/12);
//            
//            ellipse(x,height/2,m/2,m);
//        }
//    
		endShape();
		pop();
	};
}
