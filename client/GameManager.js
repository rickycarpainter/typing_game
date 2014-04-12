function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2, "PasswordPrompt" : 3, "PlayMode" : 4};
	//enum PlayModeState {Playing = 0, DialogOpen = 1, HighScores = 2}
	
	this.currentGameState = this.GameStates.TitleScreen;
	this.lastGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	this.lastPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;
	this.gameController = null;

	//for mode selcetion screen
	this.selectedMode = null;

	//for password prompt and level selection
	this.givenPassword = null;
	this.passwordLevel = null;

	//for level selection
	this.levelSelected = null;
	
	this.init = function(gameWidth, gameHeight) {
		this.tileEngine = new TileEngine();
		
		this.groupManager = new GroupManager();
		this.groupManager.init(gameWidth, gameHeight);

		this.gameController = new GameController();
		this.gameController.init();
	};
	
	this.update = function() {
		switch(this.currentGameState) {
			
			case this.GameStates.TitleScreen: 		this.updateTitlescreen();		break;
			case this.GameStates.ModeSelection: 	this.updateModeSelection();		break;
			case this.GameStates.LevelSelection:   this.updateLevelSelection();		break;
			case this.GameStates.PasswordPrompt: 	this.updatePasswordPrompt();	break;
			case this.GameStates.PlayMode: 			this.updatePlayMode();			break;
		}
	};
	
	this.updateTitlescreen = function() {
		if(jQuery.gameQuery.keyTracker[32]) { //Was space pressed?
			this.groupManager.titleToSelection();
			this.currentGameState = this.GameStates.ModeSelection;
			this.lastGameState = this.GameStates.TitleScreen;
			this.selectedMode = "story";
		}
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

		//track to open password prompt
		if((jQuery.gameQuery.keyTracker[13]) && this.selectedMode === "story" && this.passwordLevel === null){//if campaign mode selected, pull up password prompt
			console.log("story mode selected");
			this.givenPassword = null;
			this.passwordLevel = null;
			this.groupManager.openPasswordPrompt();
			this.currentGameState = this.GameStates.PasswordPrompt;
			this.lastGameState = this.GameStates.ModeSelection;
		}

		//track returning from password prompt and proceeding to level selection
		if(this.passwordLevel != null){ //campaign mode picked and valid password entered
			console.log("valid password");
			this.levelSelected = this.passwordLevel;
			this.groupManager.selectionToLevels(this.passwordLevel);
			this.currentGameState = this.GameStates.LevelSelection;
			this.lastGameState = this.GameStates.ModeSelection;
		}
	};

	this.updatePasswordPrompt = function() {
		//put focus on text field
		//if hover over first time button, highlight


		if(this.givenPassword === null && this.passwordLevel === null){
			console.log("PasswordPrompt");
			var answer = false;//confirm("Is this your first time playing?");
			if(answer){
				this.passwordLevel = 10;
			}
			else{
				this.givenPassword = "rabbit";//prompt("Please enter password");
			}

		}
		

		if(this.givenPassword != null && (jQuery.gameQuery.keyTracker[13])){// if enter clicked, check if password is valid\
			console.log("checking password");
			//send query to server to check password

			//temporary fix until able to query and return valid number
			this.passwordLevel = 10;
		}	

		if(this.passwordLevel != null || (jQuery.gameQuery.keyTracker[27])){ //if password is confirmed valid or new game selected or 'X' clicked
			console.log("PasswordPrompt over");
			this.groupManager.closePasswordPrompt();
			this.currentGameState = this.GameStates.ModeSelection;
			this.lastGameState = this.GameStates.PasswordPrompt;
		}
	};
	
	this.updateLevelSelection = function() {
		console.log("level selection mode");
		//if mouse over level, chenge levelSelected to that
		//highlight levelselected

		if(jQuery.gameQuery.keyTracker[13]){ //level selected
			this.tileEngine.downloadMap(this.levelSelected);
			this.tileEngine.drawMap();
			this.groupManager.levelsToGame();
			this.currentGameState = this.GameStates.PlayMode;
			this.lastGameState = this.GameStates.LevelSelection;
		}
	};
	
	this.updatePlayMode = function() {
		console.log("play mode");

		//map and object should be drawn
		//draw character's initial position
		//generate random letters/numbers
		//draw buttons based off those letters/numbers
		//bring up any captions needed

		//start game loop
			//wait for input
			//check input for matching letter
			//animate buttons down if letter matched
			//move character
			//check surroundings/collisions
			//draw new buttons, only if direction isnt a wall
	};
}
