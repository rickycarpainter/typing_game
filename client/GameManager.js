function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2, "PasswordPrompt" : 3, "PlayMode" : 4};
	//enum PlayModeState {Playing = 0, DialogOpen = 1, HighScores = 2}
	
	this.currentGameState = this.GameStates.TitleScreen;
	this.lastGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	this.lastPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;

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
		}
	};
	
	this.updateModeSelection = function() {
		//if mouse over mode, hignlight that mode


		if(false){//if campaign mode selected, pull up password prompt
			this.currentPassword = null;
			this.groupManager.openPasswordPrompt();
			this.currentGameState = this.GameStates.PasswordPrompt;
			this.lastGameState = this.GameStates.ModeSelection;
		}

		if(false){ //campaign mode picked and valid password entered
			this.groupManager.selectionToLevels();
			this.currentGameState = this.GameStates.LevelSelection;
			this.lastGameState = this.GameStates.ModeSelection;
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
	
	this.updatePlayMode = function() {
	
		//switch()

		//this is gonna be the hard part
	};
}