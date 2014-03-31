function TileMap() {
	
	//Dimensions of the map in tiles
	this.width = 0;
	this.height = 0;
	
	//Dimension of the tiles in pixels
	this.tileWidth = 0;
	this.tileHeight = 0;
	
	//mask will be initiated as 2d arrays 
	//that store info about the tiles and mask
	this.mask = null;
	
	this.tilesets = null;
	this.tileLayers = null;
	
	/*The map is drawn through #mapgroup
		#mapgroup has:
			#mapbackground
			#maptiles
			#mapobjects
	*/
	this.draw = function() {
		//this.clear();
		this.drawLayers();
		
	};
	
	this.clear = function() {
		$("#mapbackground").clearAll(false);
		$("#maptiles").clearAll(false);
		$("#mapobjects").clearAll(false);
	};
	
	this.drawLayers = function() {
		for(var i = 0; i < this.tileLayers.length; i++) {
			this.tileLayers[i].draw(this.tilesets);
		}	
	};
	
	//This function loads map information from the server(a JSON object) 
	//into this object. mapInfo is an evaluated JSON object.
	this.loadMap = function(mapFile) {
		
       	var json = this.testPackage;
			var mapInfo = eval("(" + json + ")");
    		
			this.width = mapInfo.width;
			this.height = mapInfo.height;
			this.tileWidth = mapInfo.tilewidth;
			this.tileHeight = mapInfo.tileheight;
		
			this.loadTileLayers(mapInfo.layers);
			this.loadTilesets(mapInfo.tilesets);


	};
	
	this.loadTileLayers = function(layers) {
		this.tileLayers = new Array(layers.length);
		for(var i = 0; i < layers.length; i++) {
			if (layers[i].name == "mask") {
				this.mask = this.loadLayerTiles(layers[i].data,layers[i].width, layers[i].height);
			}
			else {
				this.tileLayers[i] = new TileMapLayer();
				this.tileLayers[i].height = layers[i].height;
				this.tileLayers[i].width = layers[i].width;
				this.tileLayers[i].tiles = this.loadLayerTiles(layers[i].data,layers[i].width, layers[i].height);
			}
		}
		
	};
	
	this.loadTilesets = function(ts) {
		this.tilesets = new Array(ts.length);
		for(var i = 0; i < this.tilesets.length; i++) {
			this.tilesets[i] = new TileSet(ts[i].firstgid,ts[i].image,ts[i].tileheight,
											ts[i].tilewidth,ts[i].imageheight,ts[i].imagewidth);	
		}	
	};
	
	
	//Loads the tile values into the 2d tiles array
	this.loadLayerTiles = function(data,layerWidth, layerHeight) {
		
		var tiles = this.createArray(layerWidth, layerHeight);
		var counter = 0;
		for(var i = 0; i < layerHeight; i++) {
			for(var j = 0; j < layerWidth; j++) {
				tiles[j][i] = data[counter];
				counter++;
			}
		}	
		return tiles;
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
	
	//10X10
	this.testPackage = '{ "height":10, ' +
 '"layers":[ ' +
        '{ ' +
         '"data":[278, 279, 279, 279, 279, 279, 279, 279, 279, 280, 310, 371, 372, 373, 372, 371, 371, 372, 372, 312, 310, 371, 373, 215, 343, 343, 216, 372, 372, 312, 310, 371, 373, 312, 374, 214, 310, 372, 371, 312, 310, 371, 373, 312, 246, 376, 310, 371, 371, 312, 310, 372, 373, 312, 125, 125, 310, 372, 373, 312, 310, 371, 371, 247, 279, 279, 248, 371, 371, 312, 310, 372, 373, 373, 371, 371, 372, 373, 371, 312, 310, 372, 371, 372, 373, 373, 372, 372, 371, 312, 342, 343, 343, 343, 343, 343, 343, 343, 343, 344], ' +
         '"height":10, ' +
         '"name":"Tile Layer 1", ' +
         '"opacity":1, ' +
         '"type":"tilelayer", ' +
         '"visible":true, ' +
         '"width":10, ' +
         '"x":0, ' +
         '"y":0 ' +
        '}], ' +
 '"orientation":"orthogonal", ' +
 '"properties": ' +
 '   { ' +

 '   }, ' +
 '"tileheight":32, ' +
 '"tilesets":[ ' +
       ' { ' +
        ' "firstgid":1, ' +
        ' "image":"terrain.png", ' +
        ' "imageheight":1024, ' +
        ' "imagewidth":1024, ' +
        ' "margin":0, ' +
        ' "name":"terrain", ' +
        ' "properties": ' +
        '    { ' +

         '   }, ' +
        ' "spacing":0, ' +
        ' "tileheight":32, ' +
        ' "tilewidth":32 ' +
       ' }], ' +
 '"tilewidth":32, ' +
' "version":1, ' +
 '"width":10 ' +
'}';
							 
	this.testPackageSimple = '{ "width" : 3, "height" : 3, "tileWidth" : 32, "tileHeight" : 32, ' +
							 '"tiles" : [[7,87,133],[5,78,15],[65,10,15]], "mask" : [[1,0,0],[1,0,0],[1,1,1]], ' +
							 '"tileset" : "terrain.png", "tilesetHeight" : 32, "tilesetWidth" : 32 }';
					
}
