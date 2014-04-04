function GroupManager() {

	this.init = function(gameWidth, gameHeight) {
		
		var anim = new $.gQ.Animation({ imageURL: "images/titlescreen.png",
					numberOfFrame: 1,
					delta: 707,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
		$.playground().addGroup("mapgroup", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
			//.scale(2)
			.addGroup("mapBackground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapObjects", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapForeground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()	
			.addGroup("titlescreen", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite( "title", {animation: anim,
										width: gameWidth,
										height: gameHeight,
										posx: 100,
										posy: 100 
										});
			//ADD OTHER GROUPS HERE EX: HUD GROUP, OTHER SCREENS
			
			

					
				

	};
	
	this.update = function() {
	
	};

	this.titleToSelection = function(){

	};

	this.openPasswordPrompt = function(){

	};

	this.closePasswordPrompt = function(){

	};

	this.selectionToLevels = function(){

	};

	this.levelsToGame = function(){

	};
}