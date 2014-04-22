function GroupManager(gameController, tileEngine) {

	this.tileEngine = tileEngine;
	this.gameController = gameController;
	this.promptManager = new PromptManager(gameController, tileEngine);

	this.totalLevels = null;

	//level selection
	this.levelNumber = new Array();
	this.leftArrow = null;
	this.rightArrow = null;

	//play mode
	this.carrotCounterIcon = null;
	this.carrotNumber = new Array();
	
	this.init = function(gameWidth, gameHeight) {
		
		var title = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/titlescreen.png",
					numberOfFrame: 1,
					delta: gameWidth,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var spacebar = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/spacebar.png",
					numberOfFrame: 2,
					delta: 46,
					offsetx: 0,
					offsety: 0,
					rate: 600,
					type: $.gQ.ANIMATION_VERTICAL});

		var modebackground = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/modescreen.png",
					numberOfFrame: 1,
					delta: gameWidth,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var storybutton = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/storybutton.png",
					numberOfFrame: 1,
					delta: 0,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var ucbutton = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/underconstructionbutton.png",
					numberOfFrame: 1,
					delta: 0,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});

		var levelButton = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/levelButton.png",
					numberOfFrame: 1,
					delta: 187,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		var levelBanner = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/levelSelectionBanner.png",
					numberOfFrame: 1,
					delta: 0,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.leftArrow = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/leftArrow.png",
					numberOfFrame: 1,
					delta: 0,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.rightArrow = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/rightArrow.png",
					numberOfFrame: 1,
					delta: 0,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[1] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[2] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 130,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[3] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 260,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[4] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 390,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[5] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 520,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[6] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 650,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[7] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 780,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[8] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 910,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[9] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 1040,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.levelNumber[10] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/numbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 1170,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});

		this.carrotCounterIcon = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotCounter.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[0] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 390,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[1] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[2] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 39,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[3] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 78,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[4] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 117,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[5] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 156,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[6] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 195,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[7] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 234,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[8] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 273,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[9] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 312,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
		this.carrotNumber[10] = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/carrotNumbers.png",
					numberOfFrame: 1,
					delta: 130,
					offsetx: 351,
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
										posy: 67 
										})
				.addSprite("ucbutton", {animation: ucbutton,
										width: 300,
										height: 400,
										posx: 360,
										posy: 40 
										}).end()
			.addGroup("levelSelection", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite("modebackground", {animation: modebackground,
										width: gameWidth,
										height: gameHeight,
										posx: 0,
										posy: 0 
										})
				.addSprite("levelButton", {animation: levelButton,
										width: 220,
										height: 258,
										posx: 266,
										posy: 140 
										})
				.addSprite("levelBanner", {animation: levelBanner,
										width: 430,
										height: 76,
										posx: 165,
										posy: 28 
										})
				.addSprite("leftArrow", {animation: this.leftArrow,
										width: 64,
										height: 68,
										posx: 185,
										posy: 240 
										})
				.addSprite("rightArrow", {animation: this.rightArrow,
										width: 64,
										height: 68,
										posx: 470,
										posy: 240 
										})
				.addSprite("levelNumber", {animation: this.levelNumber[1],
										width: 130,
										height: 120,
										posx: 295,
										posy: 220 
										}).end()
			.addGroup("mapgroup", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
			.addGroup("mapBackground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapObjects", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("mapForeground", {width: gameWidth, height: gameHeight, posx: 0, posy: 0}).end()
			.addGroup("hud", {width: gameWidth, height: gameHeight, posx: 0, posy: 0})
				.addSprite("carrotCounter", {animation: this.carrotCounterIcon,
										width: 157,
										height: 36,
										posx: 0,
										posy: 0 
										})
				.addSprite("carrotNumber", {animation: this.carrotNumber[0],
										width: 39,
										height: 36,
										posx: 120,
										posy: 0 
										}).end()			
			
			$("#hud").append('<div id = "timer">TIME: 0</div>');
			$("#selectionScreen").hide();
			$("#levelSelection").hide();
			$("#hud").hide();
	};

	this.titleToSelection = function(){
		$("#titlescreen").fadeOut("medium");
		$("#selectionScreen").fadeIn("medium");
	};

	this.selectionToLevels = function(initialSelection){
		//close mode selection 
		$("#selectionScreen").fadeOut("medium");
		$("#levelSelection").fadeIn("medium");
		this.updateLevelNumber(initialSelection);
	};

	//for mode selection
	this.highlightButton = function(mode){
		if(mode === "story"){
			$("#sbutton").scale(1.1);
			$("#ucbutton").scale(1);
		}
		else if(mode === "random"){
			$("#sbutton").scale(1);
			$("#ucbutton").scale(1.1);
		}
	};

	this.levelsToGame = function(){
		//close level selection
		$("#levelSelection").fadeOut("medium");
		
		this.tileEngine.drawMap();
		this.tileEngine.drawMapItems(this.promptManager);
		this.resetKeys();
		
		$("#mapgroup").fadeIn("medium");
		$("#hud").fadeIn("medium");
		
	};

	this.updateLevelNumber = function(givenNum){

		 $("#levelNumber").setAnimation(this.levelNumber[givenNum]);
		 if(givenNum == 1)
		 {
		 	$("#leftArrow").setAnimation();
		 }
		 if(givenNum == this.totalLevels)
		 {
		 	$("#rightArrow").setAnimation();
		 }
		 else if(givenNum == 2)
		 {
		 	$("#leftArrow").setAnimation(this.leftArrow);
		 }
		 else if(givenNum == (this.totalLevels-1))
		 {
		 	$("#rightArrow").setAnimation(this.rightArrow);
		 }
	};
	
	this.resetKeys = function() {
		this.promptManager.setKeysAndLetters();
		this.promptManager.showKeysAndLetters();
	};

	this.updateCarrotNumber = function(givenNum){
		$("#carrotNumber").setAnimation(this.carrotNumber[givenNum]);
	};

	this.gameToLevels = function(levelSelected){
		$("#mapgroup").fadeOut("medium");
		$("#hud").fadeOut("medium");

		$("#levelSelection").fadeIn("medium");
		this.updateLevelNumber(levelSelected);
	};
}
