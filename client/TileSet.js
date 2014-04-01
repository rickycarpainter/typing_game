function TileSet(firstgID,image,tileheight,tilewidth,imageheight,imagewidth) {

	this.image = image;
	this.imageheight = imageheight;
	this.imagewidth = imagewidth;

	this.heightInTiles = imageheight / tileheight;
	this.widthInTiles = imagewidth / tilewidth;
	
	this.firstgID = firstgID;
	this.lastgID = this.heightInTiles * this.widthInTiles + firstgID - 1;
	
	this.tileHeight = tileheight;
	this.tileWidth = tileheight;
	
	//Returns the xOffset of the tile on the tileset based on tile GID
	this.getgIDXOffset = function(gID) {
		return Math.floor((((gID - 1) % this.widthInTiles) * this.tileWidth));
	};
	
	this.getgIDYOffset = function(gID) {
		return (Math.floor(((gID - 1) / this.heightInTiles)) * this.tileHeight);
	};
	
	//converts the gID to the gID schema of this tileset
	//example: if the firstgID of this TileSet was 45:
	// 	if gID = 45 this function returns 1
	//    if gID = 48 this function returns 4
	this.convertgID = function(gID) {

		return (gID - firstgid + 1);
	};
	
	this.gIDInTileset = function(gID) {
		return (gID >= this.firstgID && gID <= this.lastgID);
	};
	

}