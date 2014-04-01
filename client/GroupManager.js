function GroupManager() {

	this.init = function(gameWidth, gameHeight) {
		$.playground().addGroup("mapgroup", {width: 640, height: 640, posx: 0, posy: 0})
			//.scale(2)
			.addGroup("mapBackground", {width: 640, height: 640, posx: 0, posy: 0}).end()
			.addGroup("mapObjects", {width: 640, height: 640, posx: 0, posy: 0}).end()
			.addGroup("mapForeground", {width: 640, height: 640, posx: 0, posy: 0}).end()	
			
			//ADD OTHER GROUPS HERE EX: HUD GROUP, OTHER SCREENS
	};
	
	this.update = function() {
	
	};

}