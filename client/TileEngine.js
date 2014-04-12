function TileEngine(gameController) {
	
	this.map = null;
	this.player = null;
	this.mapItems = null;

	this.gameController = gameController;
	
	//Clears and draws a new map if the map exists
	//Only call this function once per map
	this.drawMap = function() {
		
		if(this.map != null) {
			this.map.clear();
			this.map.draw();
		}
	};

	this.downloadMap = function(mapID) {
		
		$.ajax({
			url: '/DownloadMap',
			type: 'POST',
			data: {id:mapID},
			success: function (result) {
				this.importMap(result);
			}
		});
	};

	this.importMap = function(mapJSON) {

		var mapInfo = eval("(" + mapJSON + ")");

		this.map = new TileMap();
		this.map.loadMap(mapInfo.map);
		
		this.loadMapItems(mapInfo.mapitems);
	};

	this.loadMapItems = function(mapitems) {
		this.mapItems = new Array();
		
		for(var i = 0; i < mapitems.length; i++) {
			
			switch(mapitems[i].type) {

				case "Player":	
					var player = new Player();
					// posX and posYplayer.
					player.spriteX = mapitems[i].sprite_x;
					player.spriteY = mapitems[i]
				case "Carrot":
				case "Tunnel":

			}

		}
	};

	this.drawPlayer = function() {
		this.clearPlayer();
	};
	
	this.clearPlayer = function() {
	
	};
	
	this.drawMapItems = function() {
		this.clearMapItems();
	};
	
	this.clearMapItems = function() {
	
	}
	
	this.canMoveUp = function(mapItem) {
		return (mapItem!= null && //player exists
					this.map != null && //map exists
					mapItem.posX >= 0 && mapItem.posX < this.map.width && // player posX in map
					mapItem.posY + 1 >= 0 && mapItem.posY + 1 < this.map.height && // player posY + 1 in map
					this.map.mask[mapItem.posX][mapItem.posY + 1] != 2); // 2 is the collidable gID for the mask 
	};
	
	this.canMoveDown = function() {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX >= 0 && mapItem.posX < this.map.width && // player posX in map
					mapItem.posY - 1 >= 0 && mapItem.posY - 1 < this.map.height && // player posY + 1 in map
					this.map.mask[player.posX][player.posY - 1] != 2); // 2 is the collidable gID for the mask 	
	};
	
	this.canMoveLeft = function() {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX - 1>= 0 && mapItem.posX - 1< this.map.width && // player posX in map
					mapItem.posY >= 0 && mapItem.posY < this.map.height && // player posY + 1 in map
					this.map.mask[player.posX - 1][player.posY] != 2); // 2 is the collidable gID for the mask 
	};
	
	this.canMoveRight = function() {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX + 1 >= 0 && mapItem.posX + 1< this.map.width && // player posX in map
					mapItem.posY >= 0 && mapItem.posY < this.map.height && // player posY + 1 in map
					this.map.mask[player.posX + 1][player.posY] != 2); // 2 is the collidable gID for the mask 
	};

}
