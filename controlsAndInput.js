//Constructor function to handle the onscreen menu, keyboard and mouse controls

function ControlsAndInput(){
    
	this.menuDisplayed = true;
	
	//playback button displayed in the top left of the screen
	
    this.playbackButton = new PlaybackButton();
   
	//if mousePressed is not on the playback button, the window will toggle between fullscreen or revert to windowed.
    //if mousePressed is on the playback button, the music will start but the window will stay in the selected window mode.
    
    
	this.mousePressed = function(){
        
        if(this.playbackButton.hitCheck()){
            playing = true;
           
        }
        
        else{
            var fs = fullscreen();
            fullscreen(!fs);
        }
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
             this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
        
        //change select visual color
        else if(keycode == 13){
            if (state < 3){
                state +=1;
            } 
            else{
                state = 0;
            } 
        }
        
        
        colorPalette = palettes[state];
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
        
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
        
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){
            
			text("Select a visualisation by pressing 1, 2, 3, 4:", 100, 35);
			this.menu();
            text("Press space to hide/ unhide menu. Click onscreen to enter/exit fullscreen.", 100, 250);
            text("Click play to start sound", 100, 290);
		}	
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		//???
        for(var i = 0; i < vis.visuals.length; i++){
            text(vis.visuals[i].name, 100, 70+(i*40));
            Visualisations();
            
        }
	   };
}




