function GameEngine() {

	this.REFRESH_RATE = 30;
	this.gameManager = null;
	
	var parent = this;
	
	this.init = function(gameWidth,gameHeight) {
			// Initialize the game:
    	$("#playground").playground({
        	height: gameHeight, 
        	width: gameWidth,
        	keyTracker: true});
		
		$("#playground").css("margin-right", "auto", "margin-left", "auto");
		this.gameManager = new GameManager();
		this.gameManager.init(gameWidth, gameHeight);
		
	};
	
	this.run = function() {
		console.log("GameEngine run");
		$.playground().registerCallback(function(){				
			console.log("GameEngine callback");			
			parent.update();	
		}, this.REFRESH_RATE);
		
	};
	
	this.update = function() {
		this.gameManager.update();
	};

}
