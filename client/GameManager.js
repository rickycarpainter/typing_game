function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2,"PlayMode" : 3};
	this.PlayModeState = {"Playing" : 0, "DialogOpen" : 1, "HighScores" : 2};
	
	this.currentGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;
	this.gameController = null;

	//for mode selcetion screen
	this.selectedMode = null;

	//for level selection
	this.levelSelected = null;
	this.totalLevels = null;

	//for game mode
	this.score = null;
	this.dialogQueue = [];
	
	this.init = function(gameWidth, gameHeight) {

		this.gameController = new GameController();
		this.gameController.init();

		this.tileEngine = new TileEngine(this.gameController);
		
		this.groupManager = new GroupManager(this.gameController, this.tileEngine);
		this.groupManager.init(gameWidth, gameHeight);

		this.levelSelected = 1;
		this.totalLevels = 10;
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
				$parent.selectedMode = "story";
			}
		};
	};
	
	this.updateModeSelection = function() {
		//hignlight mode
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
					async: false,
					type: 'GET',
					success: function (result) {
						$parent.levelSelected = result.result;
						return true;
					}
				});
				
				//Query the server for the total number of levels
				$.ajax({
					url: '/Game/AllLevels',
					async: false,
					type: 'GET',
					success: function (result) {
						$parent.totalLevels = result.result;
						return true;
					}
				});

				$parent.groupManager.totalLevels = $parent.totalLevels;
				$parent.groupManager.selectionToLevels($parent.levelSelected);
				$parent.currentGameState = $parent.GameStates.LevelSelection;
			}
		};
	};
	
	this.updateLevelSelection = function() {
		var $parent = this;
		
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if(code == 37)
			{
				$parent.levelSelected = $parent.levelSelected - 1;
				if ($parent.levelSelected < 1)
				{
					$parent.levelSelected = 1;
				}
				else
				$parent.groupManager.updateLevelNumber($parent.levelSelected);
			}
			else if (code == 39)
			{
				$parent.levelSelected = $parent.levelSelected + 1;
				if ($parent.levelSelected > $parent.totalLevels)
				{
					$parent.levelSelected = $parent.totalLevels;
				}
				else
				$parent.groupManager.updateLevelNumber($parent.levelSelected);
			}
			else if (code == 13 || code == 32)
			{
				//draw the initial screen
				$parent.tileEngine.downloadMap($parent.levelSelected);

				//change modes
				$parent.groupManager.levelsToGame();
				$parent.currentGameState = $parent.GameStates.PlayMode;
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
		if(this.dialogQueue.length > 0)//if dialog available
		{
			//pull dialog off queue
			var dialog = this.dialogQueue.shift();
			//print dialog on screen
			console.log(dialog);
			//change mode to dialogOpen
			this.currentPlayModeState = this.PlayModeState.dialogOpen;
		}

		//check button input on controller buttons
		var $parent = this;		
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if(code >= 65 && code <= 90)//if valid button pushed
			{
				if($parent.gameController.queryKey(code))//if button matched
				{
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
					$parent.gameController.randomizeKeys();
					//draw buttons with random keys (only in directions without walls)
				}
			}

		};
	};

	this.dialogOpen = function(){
		
		//check for input
		var $parent = this;
		window.onkeyup = function(e) {
			var code = e.keyCode ? e.keyCode : e.which;
			if((code == 13 || code == 32) && ($parent.dialogQueue.length < 1))//if enter pushed and no more dialog
			{
				$parent.currentPlayModeState = $parent.PlayModeState.Playing;
			}
			else if(code == 13 || code == 32)
			{
				//pull dialog off queue
				dialog = this.dialogQueue.shift();
				//print dialog on screen
				console.log(dialog);
			}
		};
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
