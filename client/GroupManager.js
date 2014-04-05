function GroupManager() {

	this.init = function(gameWidth, gameHeight) {
		
		var anim = new $.gQ.Animation({ imageURL: "images/titlescreen.png",
					numberOfFrame: 1,
					delta: 707,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
		$.playground().addGroup("mapgroup", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
			.addGroup("mapBackground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapObjects", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapForeground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()

			.addGroup("titlescreen", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite( "title", {animation: anim,
										width: gameWidth,
										height: gameHeight,
										posx: 0,
										posy: 0 
										});
			.addGroup("selectionScreen", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("levelSelection", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			//ADD OTHER GROUPS HERE EX: HUD GROUP, OTHER SCREENS			

	};
	
	this.update = function() {
	
	};

	this.titleToSelection = function(){
		$("#titlescreen").hide();
		//draw mode selection assets
			//background
			//mode buttons/images
	};

	this.openPasswordPrompt = function(){
		//draw password prompt screen
			//prompt
			//'x' close
			//text field
			//first time button

	};

	this.closePasswordPrompt = function(){
		//close all prompt stuff

	};

	this.selectionToLevels = function(){
		//check password that was entered
		//draw all level selection assets
			//backgound
			//level images up to level of password entered
	};

	this.levelsToGame = function(){
		//draw game
			//background/tiles
			//obects 
	};
}