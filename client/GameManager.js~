function GameManager() {

	this.GameStates = {"TitleScreen" : 0, "ModeSelection" : 1, "LevelSelection" : 2, "PasswordPrompt" : 3, "PlayMode" : 4};
	//enum PlayModeState {Playing = 0, DialogOpen = 1, HighScores = 2}
	
	this.currentGameState = this.GameStates.TitleScreen;
	this.lastGameState = this.GameStates.TitleScreen;
	
	this.currentPlayModeState = null;
	this.lastPlayModeState = null;
	
	this.tileEngine = null;
	this.groupManager = null;
	
	this.init = function(gameWidth, gameHeight) {
		
		this.tileEngine = new TileEngine();
		
		this.groupManager = new GroupManager();
		this.groupManager.init(gameWidth, gameHeight);
	
	};
	
	this.update = function() {
		console.log("GAMEMANAGER UPDATE CALLED");
		switch(this.currentGameState) {
			
			case this.GameStates.TitleScreen: 		this.updateTitlescreen();		break;
			case this.GameStates.ModeSelection: 	this.updateModeSelection();	break;
			case this.GameStates.LevelSelection:   this.updateLevelSelection();	break;
			case this.GameStates.PasswordPrompt: 	this.updatePasswordPrompt();	break;
			case this.GameStates.PlayMode: 			this.updatePlayMode();			break;
		
		}
	};
	
	this.updateTitlescreen = function() {
		console.log("WE here");
		if(jQuery.gameQuery.keyTracker[32]) { //Was space pressed?
			$("#titlescreen").hide();
		}
	};
	
	this.updateModeSelection = function() {
	
	};
	
	this.updateLevelSelection = function() {
	
	};
	
	this.updatePasswordPrompt = function() {
	
	};
	
	this.updatePlayMode = function() {
	
		//switch()
	};
}