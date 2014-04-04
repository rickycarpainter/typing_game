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
	
	
	this.draw = function() {
		this.clear();
		
	};
	
	this.clear = function() {
	
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
		for(var i = 0; i < this.width; i++) {
			for(var j = 0; j < this.height; j++) {
				this.tiles[i][j] = mapInfo.tiles[i][j]
			}
		}	
	};
	
	//Loads the mask values into the 2d mask array
	this.loadMask = function(mapInfo) {
		this.mask = this.createArray(this.width, this.height);
		for(var i = 0; i < this.width; i++) {
			for(var j = 0; j < this.height; j++) {
				this.mask[i][j] = mapInfo.mask[i][j]
			}
		}	
	};
	
	//Creates a 2D array with the specified width and height
	this.createArray = function(width,height) {
		var 2DArr = new Array(width);
		
		for(var i = 0; i < width; i++) {
			2DArr[i] = new Array(height);
		}
	
		return 2DArr;
	};
	
	this.printTiles = function() {
		for(var i = 0; i < this.width; i++) {
			for(var j = 0; j < this.height; j++) {
				console.log(this.tiles[i][j]);
			}
		}		
	};
	
	this.printMask = function() {
		for(var i = 0; i < this.width; i++) {
			for(var j = 0; j < this.height; j++) {
				console.log(this.mask[i][j]);
			}
		}		
	};
	
	this.testPackage = '{ "width" : 3, "height" : 3, "tileWidth" : 10, "tileHeight" : 10, ' +
							 '"tiles" : [[1,4,7],[2,5,8],[3,6,9]], "mask" : [[1,0,0],[1,0,0],[1,1,1]] }'
}
