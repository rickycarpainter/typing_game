function Map() {
	
	//Dimensions of the map in tiles
	this.width = 0
	this.height = 0
	
	//Dimension of the tiles in pixels
	this.tileWidth = 0
	this.tileHeight = 0
	
	//tiles and mask will be initiated as 2d arrays 
	//that store info about the tiles and mask
	this.tiles = null
	this.mask = null
	
	
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
			
			}
		}	
	};
	
	//Loads the mask values into the 2d mask array
	this.loadMask = function(mapInfo) {
	
	};
	
	//Creates a 2D array with the specified width and height
	this.createArray = function(width,height) {
	
	
	};
}
