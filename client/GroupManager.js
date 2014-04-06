function GroupManager() {

	this.init = function(gameWidth, gameHeight) {
		
		var title = new $.gQ.Animation({ imageURL: "images/titlescreen.png",
					numberOfFrame: 1,
					delta: gameWidth,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var spacebar = new $.gQ.Animation({ imageURL: "images/spacebar.png",
					numberOfFrame: 2,
					delta: 46,
					offsetx: 0,
					offsety: 0,
					rate: 600,
					type: $.gQ.ANIMATION_VERTICAL});
		var modebackground = new $.gQ.Animation({ imageURL: "images/modescreen.png",
					numberOfFrame: 1,
					delta: gameWidth,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var storybutton = new $.gQ.Animation({ imageURL: "images/storybutton.png",
					numberOfFrame: 1,
					delta: 230,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var ucbutton = new $.gQ.Animation({ imageURL: "images/underconstructionbutton.png",
					numberOfFrame: 1,
					delta: 230,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});

					
		$.playground()
			.addGroup("titlescreen", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite("title", {animation: title,
										width: gameWidth,
										height: gameHeight,
										posx: 0,
										posy: 0 
										})
				.addSprite("spacebar", {animation: spacebar,
										width: 227,
										height: 51,
										posx: 240,
										posy: 350 
										}).end()
			.addGroup("selectionScreen", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite("modebackground", {animation: modebackground,
										width: gameWidth,
										height: gameHeight,
										posx: 0,
										posy: 0 
										})
				.addSprite("sbutton", {animation: storybutton,
										width: 230,
										height: 340,
										posx: 100,
										posy: 75 
										})
				.addSprite("ucbutton", {animation: ucbutton,
										width: 300,
										height: 400,
										posx: 360,
										posy: 48 
										}).end()
			.addGroup("levelSelection", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("levelSelection", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapgroup", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
			.addGroup("mapBackground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapObjects", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapForeground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			//ADD OTHER GROUPS HERE EX: HUD GROUP, OTHER SCREENS			

			$("#selectionScreen").hide();
	};
	
	this.update = function() {
	
	};

	this.titleToSelection = function(){
		$("#titlescreen").fadeOut("medium");
		$("#selectionScreen").fadeIn("medium");
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
		//close mose selectio 
		//check password that was entered
		//draw all level selection assets
			//backgound
			//level images up to level of password entered
	};

	this.levelsToGame = function(){
		//close level selection
		//draw game
			//background/tiles
			//obects 
	};

	this.checkButton = function(){
		$("#selectionScreen").click(function(){
			console.log("test");
		});
	};
}