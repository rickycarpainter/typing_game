function TileEngine() {
	
	this.map = null;
	this.player = null;
	this.mapItems = null;
	
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
			url: '/Game/DownloadMap',
			type: 'POST',
			data: '1',
			success: function (result) {
				console.log(result);
			}
		});
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
