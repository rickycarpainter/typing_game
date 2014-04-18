function GameController(){

	this.keyUp = null;
	this.keyDown = null;
	this.keyLeft = null;
	this.keyRight = null;

	this.enter = false;
	
	this.init = function(){
		this.keyUp = 0;
		this.keyDown = 0;
		this.keyLeft = 0;
		this.keyRight = 0;
		this.randomizeKeys();
	};

	this.randomizeKeys = function(){
		this.keyUp = this.randomKey();
		this.keyDown = this.randomKey();
		this.keyLeft = this.randomKey();
		this.keyRight = this.randomKey();
	};

	this.randomKey = function(){
		var tempKey;
		do{
			tempKey = Math.floor(Math.random() * (90-65+1)) + 65;
		}while(tempKey == this.keyUp || tempKey == this.keyDown || tempKey == this.keyLeft || tempKey == this.keyRight);
		return tempKey;
	};

	this.getKey = function(){

	};

	this.queryKey = function(keyCode){
		switch(keyCode){
			case this.keyUp:
				return true;
			case this.keyDown:
				return true;
			case this.keyLeft:
				return true;
			case this.keyRight:
				return true;
			default:
				return false;
		}
	};

	this.enterPushed = function(){
		var push = false;

		//this is where the keybinding occurs
		$(document).keyup(function(e){
			console.log(e.keyCode);
			switch(e.keyCode){
				case 13:
					//return true;
					push = true
				case 32:
					//return true;
					push = true;
				default:
					//return false;
					push = false;
			}
		});
		console.log(push);
		return pushup;
	};

}