function TileEngine(gameController) {
	
	this.map = null;
	this.mapItems = null;
	this.player = null;
	this.tunnel = null;

	this.gameController = gameController;
	this.promptManager = new PromptManager(this.gameController);
	
	this.mapItemIDCounter = 0;


//--------------------------------------------------------------------------------------
// This section contains functions for drawing maps and mapitems
//--------------------------------------------------------------------------------------	
	
	//Clears and draws a new map if the map exists
	//Only call this function once per map
	this.drawMap = function() {
		
		if(this.map != null) {
			this.map.clear();
			this.map.draw();
		}
	};
	
	//Draws all of the mapitems. Only call this function once per map
	this.drawMapItems = function() {

		$("#mapObjects").clearAll(false);
		//draw carrots and other items first
		for(var i = 0; i < this.mapItems.length; i++) {
			
			this.drawMapItem(this.mapItems[i], "mapitem" + i.toString());
		
		}
		
		//then draw the tunnel
		this.drawMapItem(this.tunnel, "tunnel");
		
		//then draw the player so the player is on top of everything
		this.drawMapItem(this.player, "player");
		
		this.promptManager.init();
	};
	
	this.drawMapItem = function(mapItem,id) {
	
		var posX = this.map.tileWidth * mapItem.posX;
		var posY = this.map.tileHeight * mapItem.posY;
		$("#mapObjects").addSprite( id, {animation: this.makeAnimation(mapItem),
								width: mapItem.width,
								height: mapItem.height,
								posx: posX,
								posy: posY 
								});		
	};
	
	//Returns an animation to be used for the mapitem
	this.makeAnimation = function(mapItem) {
		
		return new $.gQ.Animation({ imageURL: "images/textures.png",
					numberOfFrame: 1,
					delta: mapItem.width,
					offsetx: mapItem.spriteX,
					offsety: mapItem.spriteY,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
	
	};
	
	this.clearMapItems = function() {
		
	};
	
//--------------------------------------------------------------------------------------
// This section contains functions for downloading and importing maps
//--------------------------------------------------------------------------------------
	this.downloadMap = function(mapID) {
		
		$.ajax({
			url: '/DownloadMap',
			type: 'POST',
			data: {id:mapID},
			success: function (result) {
				this.importMap(result);
				console.log("Map imported!");
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
		
		$("#player").x(this.player.posX);
		$("#player").y(this.player.posY);
	};
	
	//Returns the name of the mapitem the player collided with. Returns "NONE" if there was no collision.
	this.checkItemCollision = function() {
	
		if(this.player.posX == this.tunnel.posX &&
			this.player.posY == this.tunnel.posY) {
				return "Tunnel";			
		}
		
		for(var i = 0; i < this.mapItems.length; i++) {
			
			if(this.player.posX == this.mapItems[i].posX &&
				this.player.posY == this.mapItems[i].posY) {
				
				//for now, just return carrot, because that is the only other mapitem we have!
				return "Carrot";
			}
		
		}
	
		return "NONE";
	};
	
	
//--------------------------------MOVEMENT CHECKS----------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------

}

