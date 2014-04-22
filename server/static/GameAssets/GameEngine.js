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
        	
      
      soundManager.setup({
  			url: '/path/to/swf-files/',
  		onready: function() {
			parent.gameManager = new GameManager();
			parent.gameManager.init(gameWidth, gameHeight);
		}
		});

		return true;
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
