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

		var $parent = this;
		
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if(code == 37)
			{
				$parent.selectedMode = "story";
			}
			else if(code == 39)
			{
				$parent.selectedMode = "random";
			}
			else if ((code == 13 || code == 32) && ($parent.selectedMode === "story"))
			{
				console.log("story mode selected");
				
				//Query the server for the highest level reached for the user
				$.ajax({
					url: '/Game/HighestUserLevel',
					type: 'GET',
					success: function (result) {
						$parent.levelSelected = result.result;
						
					}
				});
				
				//Query the server for the total number of levels
				$.ajax({
					url: '/Game/AllLevels',
					type: 'GET',
					success: function (result) {
						$parent.totalLevels = result.result;
					}
				});
				
				$parent.groupManager.selectionToLevels($parent.levelSelected);
				$parent.currentGameState = $parent.GameStates.LevelSelection;
				$parent.lastGameState = $parent.GameStates.ModeSelection;
			}
		};
	};
	
	this.updateLevelSelection = function() {
		console.log("level selection mode");
		//if mouse over level, chenge levelSelected to that
		//highlight levelselected

		var $parent = this;
		
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if (code == 13 || code == 32)
			{
				//draw the initial screen
				$parent.tileEngine.downloadMap($parent.levelSelected);
				$parent.tileEngine.drawMap();

				//change modes
				$parent.groupManager.levelsToGame($parent.gameController);
				$parent.currentGameState = $parent.GameStates.PlayMode;
				$parent.lastGameState = $parent.GameStates.LevelSelection;
				$parent.currentPlayModeState = $parent.PlayModeState.Playing;
				$parent.score = 0;
			}
		};
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
