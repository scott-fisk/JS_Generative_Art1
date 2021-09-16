function Virus() {
    this.name = "4. virus";
    
    this.draw = function() {
        push();
        angleMode(RADIANS)
        translate(width/2, height/2);
        
        fft.analyze();
		
		var b = fft.getEnergy("bass");
		var t = fft.getEnergy("treble");
        var m = fft.getEnergy("mid");

//	    var map_mid = map(m, 0, 255, -100, 100);
//	    var scale_mid = map(m, 0, 255, 1, 1.5);
        
        
//        rotate(frameCount * 0.005);
            
        for (var j = 0; j < 6; j++) {
            for (var i = 0; i < 6; i++) {
              translate(
                  //add variable controller to change sin/cos/tan values??
                sin(frameCount * 0.001 + j) * 10,
                tan(frameCount * 0.01 + j) * 110,
                i * 0.2
              );
          rotate(i * 2);
                
            //use mid and treble as the energy values 
          cells(m,t);
                
            //nice effect without
          var y = +
          push();
          
          viral(b,m,t,m);
        
        }
            
        pop();
            
        }
        
        
    }

function viral(energy, energy1, energy2, energy1)
{
    fill(165,210,200);
    noStroke();
            
    for (var k = 0; k < 10; k ++) {
        triangle(0, 30, energy*2, energy1, energy2*5, energy1)
        //triangle(0, 30, b*2, m, t*5, m);
        rotate(PI/5);
        }
}
    
function cells(energy, energy2) 
{
//add circles  to move throughout screen mapped to various energy levels     
        var r = map(energy, 0, 255, 20, 100);
             
        fill(255, 72, 176);
        var incr = width/(10 - 1);
        for(var l = 0; l < 10; l++)
        {
            ellipse(l * incr - width/2,0,r,energy2*2);
        }
}

}