//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fft;

var colorPalette1 = ["#739EAD", "#814F9C"];
var colorPalette2 = ["#837BD0", "#87CEFA" ];
var colorPalette3 = ["#ff48b0", "#c547ff"];
var colorPalette4 = ["#47ff97", "#47ddff"];
var palettes = [colorPalette1, colorPalette2, colorPalette3, colorPalette4];
var state = 0; 
var colorPalette = palettes[state];



function preload(){
    sound = loadSound('assets/stomper_reggae_bit.mp3');
}

function setup(){
    
	 createCanvas(windowWidth, windowHeight);
	 background(0);
     
     controls = new ControlsAndInput();
	 //instantiate the fft object
	 fft = new p5.FFT();
    
     

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new SoundUFO());
     vis.add(new Wormhole());
     vis.add(new Dark_Star());
     vis.add(new Virus());
     

}

function draw(){
	background(0);
    //draw the controls on top.
    controls.draw();
	//draw the selected visualisation
	vis.selectedVisual.draw();
	
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
