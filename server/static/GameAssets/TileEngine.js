function TileEngine(gameController) {
	
	this.map = null;
	this.mapItems = null;
	this.player = null;
	this.tunnel = null;

	this.gameController = gameController;
	
	this.mapItemIDCounter = 0;

	//max carrots for current map
	this.carrotMax = 0;
	//arrow animation for tunnel
	this.arrow=false;
	this.tunnelArrow = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/arrow.png",
			numberOfFrame: 2,
			delta: 41,
			offsetx: 0,
			offsety: 0,
			rate: 600,
			type: $.gQ.ANIMATION_HORIZONTAL});


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

	this.reset = function(){
		this.map = null;
		this.mapItems = null;
		this.player = null;
		this.tunnel = null;
		this.gameController = gameController;
	
		this.mapItemIDCounter = 0;

		this.carrotMax = 0;
		this.arrow=false;
		
		$("#mapBackground").empty();
		$("#mapForeground").empty();
		$("#mapObjects").empty();
		$("#tunnelArrow").remove();
		
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
		if(!this.arrow){
			this.arrow = true;
			//print arrow just above tunnel location
			$("#hud").addSprite("tunnelArrow", {animation: this.tunnelArrow,
											width: 41,
											height: 42,
											posx: (this.tunnel.posX*36),
											posy: ((this.tunnel.posY-1)*36)
											}).end()
											
			$("#tunnelArrow").css("opacity", 0.5);

		}
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
//----------------------------------------Scan for Objects around Player----------------------------------------
	this.objectToLeft = function() {
		return this.player != null && this.objectAt(this.player.posX - 1, this.player.posY);
	};
	
	this.objectToRight = function() {
		return this.player != null && this.objectAt(this.player.posX + 1, this.player.posY);
	};

	this.objectToUp = function() {
		return this.player != null && this.objectAt(this.player.posX, this.player.posY - 1);	
	};

	this.objectToDown = function() {
		return this.player != null && this.objectAt(this.player.posX, this.player.posY + 1);	
	};
	
	this.objectAt = function(x,y) {
		
		if(this.tunnel != null &&
			this.tunnel.posX == x &&
			this.tunnel.posY == y) {
				return true;
			}
		
		if(this.mapItems != null) {
			
			for(var i = 0; i < this.mapItems.length) {
				
				if(this.mapItems[i] != null &&
					this.mapItems[i].posX == x &&
					this.mapItems[i].posY == y) {
						return true;
					}
			}
			
		}
		
		return false;
	};
	

}

