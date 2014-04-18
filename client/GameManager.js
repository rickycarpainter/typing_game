function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2,"PlayMode" : 3};
	this.PlayModeState = {"Playing" : 0, "DialogOpen" : 1, "HighScores" : 2};
	
	this.currentGameState = this.GameStates.TitleScreen;
	this.lastGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	this.lastPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;
	this.gameController = null;

	this.playground = null;

	//for mode selcetion screen
	this.selectedMode = null;

	//for level selection
	this.levelSelected = null;
	this.totalLevels = null;

	//for game mode
	this.score = null;
	
	this.init = function(gameWidth, gameHeight, playground) {

		this.playground = playground;

		this.gameController = new GameController();
		this.gameController.init();

		this.tileEngine = new TileEngine(this.gameController);
		
		this.groupManager = new GroupManager();
		this.groupManager.init(gameWidth, gameHeight);
	};
	
	this.update = function() {
		switch(this.currentGameState) {

			case this.GameStates.PlayMode: 			this.updatePlayMode();			break;
			case this.GameStates.TitleScreen: 		this.updateTitlescreen();		break;
			case this.GameStates.ModeSelection: 	this.updateModeSelection();		break;
			case this.GameStates.LevelSelection:   	this.updateLevelSelection();	break;
		}
	};
	
	this.updateTitlescreen = function() {
		
		var $parent = this;
		
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if (code == 13 || code == 32)
			{
				$parent.groupManager.titleToSelection();
				$parent.currentGameState = $parent.GameStates.ModeSelection;
				$parent.lastGameState = $parent.GameStates.TitleScreen;
				$parent.selectedMode = "story";
			}
		};
	};
	
	this.updateModeSelection = function() {
		//if mouse over mode, hignlight that mode
		this.groupManager.checkButton();
		this.groupManager.highlightButton(this.selectedMode);

		if(jQuery.gameQuery.keyTracker[37]){//left button
			this.selectedMode = "story";
		}
		else if(jQuery.gameQuery.keyTracker[39]){//right button
			this.selectedMode = "random";
		}

		//track to level selection screen
		if((jQuery.gameQuery.keyTracker[32] || jQuery.gameQuery.keyTracker[13]) && this.selectedMode === "story"){
			console.log("story mode selected");
			
			//Query the server for the highest level reached for the user
			$.ajax({
				url: '/Game/HighestUserLevel',
				type: 'GET',
				success: function (result) {
					this.levelSelected = result;
				}
			});
			
			//Query the server for the total number of levels
			$.ajax({
				url: '/Game/AllLevels',
				type: 'GET',
				success: function (result) {
					this.totalLevels = result;
				}
			});
			
			this.groupManager.selectionToLevels(this.levelSelected);
			this.currentGameState = this.GameStates.LevelSelection;
			this.lastGameState = this.GameStates.ModeSelection;
		}
	};
	
	this.updateLevelSelection = function() {
		console.log("level selection mode");
		//if mouse over level, chenge levelSelected to that
		//highlight levelselected

		if(jQuery.gameQuery.keyTracker[32] || jQuery.gameQuery.keyTracker[13]){ //level selected, start game
			//draw the initial screen
			this.tileEngine.downloadMap(this.levelSelected);
			this.tileEngine.drawMap();

			//change modes
			this.groupManager.levelsToGame(this.gameController);
			this.currentGameState = this.GameStates.PlayMode;
			this.lastGameState = this.GameStates.LevelSelection;
			this.currentPlayModeState = this.PlayModeState.Playing;
			this.score = 0;
		}
	};
	
	this.updatePlayMode = function() {
		console.log("play mode");


		switch(this.currentPlayModeState){
			case this.PlayModeState.Playing: 		this.playing(); 	break;
			case this.PlayModeState.DialogOpen: 	this.playing(); 	break;
			case this.PlayModeState.HighScores: 	this.playing(); 	break;
		}
	};

	this.playing = function(){
		//check for dialog on queue
		//if dialog available
			//change mode to dialogOpen
		//check button input on controller buttons
		//if button matched
			//animate button down
			//move character
			//check collision with object (carrot or hole)
			//if collision
				//if carrot
					//add to score
					//animate carrot to disappear
				//if hole
					//add to score
					//animate victory dance or exit animation
					//change mode to highscores
				//return
			//randomize keys in controller
			//draw buttons with random keys (only in directions without walls)
	};

	this.dialogOpen = function(){
		//pull dialog off queue
		//print dialog on screen
		//check for input
		//if input
			//remove current dialog
		//if queue is empty
			//change mode to playings
	};

	this.highscores = function(){
		//query highscores for level
		//print highscore screen
		//print option for next level or not
		//if next level selected
			//groupManager.GameToGame()
			//change mode to playing
		//if quit selected
			//groupManager.GameToSelection
			//change mode to selectionScreen

	};
}
