function TileMap() {
	
	//Dimensions of the map in tiles
	this.width = 0;
	this.height = 0;
	
	//Dimension of the tiles in pixels
	this.tileWidth = 0;
	this.tileHeight = 0;
	
	//tiles and mask will be initiated as 2d arrays 
	//that store info about the tiles and mask
	this.tiles = null;
	this.mask = null;
	
	this.tileSet = null;
	this.tileSetHeight = null
	this.tileSetWidth = null
	/*The map is drawn through #mapgroup
		#mapgroup has:
			#mapbackground
			#maptiles
			#mapobjects
	*/
	this.draw = function() {
		//this.clear();
		this.drawTiles();
	};
	
	this.clear = function() {
		$("#mapbackground").clearAll(false);
		$("#maptiles").clearAll(false);
		$("#mapobjects").clearAll(false);
	};
	
	this.drawTiles = function() {
	
		for(var i = 0; i < this.height; i++) {
			for(var j = 0; j < this.width; j++) {
				var gid = this.tiles[j][i];
				var tilesetX;
				var tilesetY = 0;
				if (gid == 1) {
					tilesetX = 32;
				}
				else {
					tilesetX = 0;
				}
				var posX = j * this.tileWidth;
				var posY = i * this.tileHeight;
				console.log(posX);
				console.log(posY);
				var anim = new $.gQ.Animation({ imageURL: "testtiles.png",
					numberOfFrame: 1,
					delta: 32,
					offsetx: tilesetX,
					offsety: tilesetY,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
				console.log("tileAdded");
				var id = "tile" + j.toString() + "," + i.toString();
				$("#maptiles").addSprite( id, {animation: anim,
										width: this.tileWidth,
										height: this.tileHeight,
										posx: posX,
										posy: posY
										});
				console.log(id);
				//$("#" + id).css("left", posX);
				//$("#" + id).css("top", posY);
			}
		}	
	};
	
	//This function loads map information from the server(a JSON object) 
	//into this object. mapInfo is an evaluated JSON object.
	this.loadMap = function(mapInfo) {
		
		this.width = mapInfo.width;
		this.height = mapInfo.height;
		
		this.tileWidth = mapInfo.tileWidth;
		this.tileHeight = mapInfo.tileHeight;
		
		this.loadTiles(mapInfo);
		this.loadMask(mapInfo);
	
	};
	
	//Loads the tile values into the 2d tiles array
	this.loadTiles = function(mapInfo) {
		
		this.tiles = this.createArray(this.width, this.height);
		for(var i = 0; i < this.height; i++) {
			for(var j = 0; j < this.width; j++) {
				this.tiles[i][j] = mapInfo.tiles[i][j]
			}
		}	
	};
	
	//Loads the mask values into the 2d mask array
	this.loadMask = function(mapInfo) {
		this.mask = this.createArray(this.width, this.height);
		for(var i = 0; i < this.height; i++) {
			for(var j = 0; j < this.width; j++) {
				this.mask[i][j] = mapInfo.mask[i][j]
			}
		}	
	};
	
	//Creates a 2D array with the specified width and height
	this.createArray = function(width,height) {
		var arr = new Array(width);
		
		for(var i = 0; i < width; i++) {
			arr[i] = new Array(height);
		}
	
		return arr;
	};
	
	this.printTiles = function() {
		for(var i = 0; i < this.height; i++) {
			for(var j = 0; j < this.width; j++) {
				console.log(this.tiles[j][i]);
			}
		}		
	};
	
	this.printMask = function() {
		for(var i = 0; i < this.height; i++) {
			for(var j = 0; j < this.width; j++) {
				console.log(this.mask[j][i]);
			}
		}		
	};
	
	this.getGIDX = function(gid) {
		return ((gid - 1) % this.tilesetWidth)) * this.tileWidth;
	}
	
	this.getGIDY = function(gid) {
		return ((gid - 1) / this.tilesetHeight) * this.tileHeight;
	}
	//10X10
	this.testPackage = '{ "width" : 10, "height" : 10, "tileWidth" : 32, "tileHeight" : 32, ' +
							 '"tiles" : [ [1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],' +
							 '[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1] ], '
							 '"mask" : [ [1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],' +
							 '[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1],[1,0,0,1,0,1,1,1,0,1] ] }';
							 
	this.testPackageSimple = '{ "width" : 3, "height" : 3, "tileWidth" : 32, "tileHeight" : 32, ' +
							 '"tiles" : [[1,0,0],[1,0,0],[1,1,1]], "mask" : [[1,0,0],[1,0,0],[1,1,1]], ' +
							 '"tileset" : "terrain.png", "tilesetHeight" : 32, "tilesetWidth" : 32 }'
					
}
