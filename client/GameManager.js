function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2, "PasswordPrompt" : 3, "PlayMode" : 4};
	//enum PlayModeState {Playing = 0, DialogOpen = 1, HighScores = 2}
	
	this.currentGameState = this.GameStates.TitleScreen;
	this.lastGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	this.lastPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;

	this.selectedMode = null;

	this.currentPassword = null;
	
	this.init = function(gameWidth, gameHeight) {
		this.tileEngine = new TileEngine();
		
		this.groupManager = new GroupManager();
		this.groupManager.init(gameWidth, gameHeight);
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

		if((jQuery.gameQuery.keyTracker[13] || jQuery.gameQuery.keyTracker[32]) && this.selectedMode === "story"){//if campaign mode selected, pull up password prompt
			console.log("story mode selected");
			this.currentPassword = null;
			this.groupManager.openPasswordPrompt();
			this.currentGameState = this.GameStates.PasswordPrompt;
			this.lastGameState = this.GameStates.ModeSelection;
		}

		if(this.currentPassword != null){ //campaign mode picked and valid password entered
			console.log("valid password");
			this.groupManager.selectionToLevels();
			this.currentGameState = this.GameStates.LevelSelection;
			this.lastGameState = this.GameStates.ModeSelection;
		}
	};

	this.updatePasswordPrompt = function() {
		//put focus on text field

		//if hover over first time button, highlight
		
	
		if(false){// if enter clicked, check if password is valid
			//send query to server to check password
		}	

		if(false){ //if password is confirmed valid or new game selected or 'X' clicked
			this.groupManager.closePasswordPrompt();
			this.currentGameState = this.GameStates.ModeSelection;
			this.lastGameState = this.GameStates.PasswordPrompt;
		}
	};
	
	this.updateLevelSelection = function() {

		//if mouse over level, hignlight that level

		if(false){ //level selected
			this.groupManager.levelsToGame();
			this.currentGameState = this.GameStates.PlayMode;
			this.lastGameState = this.GameStates.LevelSelection;
		}
	};
	
	this.updatePlayMode = function() {

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