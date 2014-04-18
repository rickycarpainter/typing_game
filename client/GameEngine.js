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
		
		this.gameManager = new GameManager();
		this.gameManager.init(gameWidth, gameHeight, this);
		
	};
	
	this.run = function() {
		$.playground().registerCallback(function(){
			parent.update();	
		}, this.REFRESH_RATE);
		
	};
	
	this.update = function() {
		this.gameManager.update();
	};

}