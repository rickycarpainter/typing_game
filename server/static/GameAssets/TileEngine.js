function TileEngine(gameController) {
	
	this.map = null;
	this.mapItems = null;
	this.player = null;
	this.tunnel = null;

	this.gameController = gameController;
	
	this.mapItemIDCounter = 0;

	//max carrots for current map
	this.carrotMax = 0;


//--------------------------------------------------------------------------------------
// This section contains functions for drawing maps and mapitems
//--------------------------------------------------------------------------------------	
	
	//Clears and draws a new map if the map exists
	//Only call this function once per map
	this.drawMap = function() {
		
		if(this.map != null) {
			//this.map.clear(); this was breaking it earlier
			this.map.draw();
		}
	};
	
	//Draws all of the mapitems. Only call this function once per map
	this.drawMapItems = function(promptManager) {

		//$("#mapObjects").clearAll(false);
		//draw carrots and other items first
		for(var i = 0; i < this.mapItems.length; i++) {
			
			this.mapItems[i].draw(i);
		
		}
		
		//then draw the tunnel
		this.tunnel.draw();
		
		promptManager.init(); //draws the prompts
		
		//then draw the player so the player is on top of everything
		this.player.draw();
		
	};
	
	this.clearMapItems = function() {
		
	};
	
//--------------------------------------------------------------------------------------
// This section contains functions for downloading and importing maps
//--------------------------------------------------------------------------------------
	this.downloadMap = function(mapID) {
		
		var $parent = this;
		$.ajax({
			url: '/Game/DownloadMap',
			type: 'POST',
			async: false,
			data: {id:mapID},
			success: function (result) {
				//console.log(result);
				$parent.importMap(result);
				//console.log("Map imported!");
				return true;
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
		//variable to count number of carrots
		this.carrotMax = 0;
		
		for(var i = 0; i < mapitems.length; i++) {
			
			var mapitem;
			var playerAt;
			var tunnelAt;
			switch(mapitems[i].type) {

				case "Player":	
					mapitem = new Player();
					playerAt = i;
					break;
					
				case "Carrot":
					mapitem = new Carrot();
					this.carrotMax++;
					break;

				case "Tunnel":
					mapitem = new Tunnel();
					tunnelAt = i;
					break;

			}
			
			mapitem.spriteX = mapitems[i].sprite_x;
			mapitem.spriteY = mapitems[i].sprite_y;
			mapitem.posX = mapitems[i].pos_x;
			mapitem.posY = mapitems[i].pos_y;
			mapitem.width = mapitems[i].width;
			mapitem.height = mapitems[i].height;		
			mapitem.setAnimation();	
			
			if(playerAt === i) {
				this.player = mapitem;
			}
			else if (tunnelAt === i) {
				this.tunnel = mapitem;
			}
			else {
				this.mapItems.push(mapitem);
			}
			

		}
	};

//--------------------------------------------------------------------------------------
// This section contains functions for player movement and item collision
//--------------------------------------------------------------------------------------

	//Changes the player position and draws the player accordingly
	this.movePlayer = function(x,y) {
		
		this.player.posX = this.player.posX + x;
		this.player.posY = this.player.posY + y;
		
		$("#player").x(this.player.posX * 36 + this.player.drawOffsetX);
		$("#player").y(this.player.posY * 36 + this.player.drawOffsetY);
		
		var collision = this.checkItemCollision();
		return collision;
		
	};
	
	//Returns the name of the mapitem the player collided with. Returns "None" if there was no collision.
	this.checkItemCollision = function() {
	
		if(this.player.posX == this.tunnel.posX &&
			this.player.posY == this.tunnel.posY) {
				return "tunnel";			
		}
		
		for(var i = 0; i < this.mapItems.length; i++) {
			
			if(this.player.posX == this.mapItems[i].posX &&
				this.player.posY == this.mapItems[i].posY &&
				!this.mapItems[i].collected) {
				
				//for now, just return carrot, because that is the only other mapitem we have!
				this.mapItems[i].collected = true;
				this.player.carrots++;
				$(this.mapItems[i].id).hide();
				return this.mapItems[i].id; // returns the carrot's id
			}
		
		}
		
		return "none";
	};

	//highlights the tunnel once the player can exit through it
	this.highlightTunnel = function(){
		//print arrow just above tunnel location
		
	};
	
	
//--------------------------------MOVEMENT CHECKS----------------------------------------------------------------
	this.canMoveUp = function(mapItem) {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX >= 0 && mapItem.posX < this.map.width && // player posX in map
					mapItem.posY - 1 >= 0 && mapItem.posY - 1 < this.map.height && // player posY + 1 in map
					this.map.mask[mapItem.posX][mapItem.posY - 1] != 2); // 2 is the collidable gID for the mask 
	};
	
	this.canMoveDown = function(mapItem) {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX >= 0 && mapItem.posX < this.map.width && // player posX in map
					mapItem.posY + 1 >= 0 && mapItem.posY + 1 < this.map.height && // player posY + 1 in map
					this.map.mask[mapItem.posX][mapItem.posY + 1] != 2); // 2 is the collidable gID for the mask 	
	};
	
	this.canMoveLeft = function(mapItem) {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX - 1>= 0 && mapItem.posX - 1< this.map.width && // player posX in map
					mapItem.posY >= 0 && mapItem.posY < this.map.height && // player posY + 1 in map
					this.map.mask[mapItem.posX - 1][mapItem.posY] != 2); // 2 is the collidable gID for the mask 
	};
	
	this.canMoveRight = function(mapItem) {
		return (mapItem != null && //player exists
					this.map != null && //map exists
					mapItem.posX + 1 >= 0 && mapItem.posX + 1< this.map.width && // player posX in map
					mapItem.posY >= 0 && mapItem.posY < this.map.height && // player posY + 1 in map
					this.map.mask[mapItem.posX + 1][mapItem.posY] != 2); // 2 is the collidable gID for the mask 
	};
//----------------------------------------------------------------------------------------------------------------

}

