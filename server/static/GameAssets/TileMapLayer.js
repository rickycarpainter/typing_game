function TileMapLayer() {
	
	this.height = null;
	this.width = null;
	
	this.tiles = null;
	
	this.getgIDTileset = function(gID,tilesets) {
		for(var i = 0; i < tilesets.length; i++) {
			if(tilesets[i].gIDInTileset(gID))
				return tilesets[i];		
		}
	};

	this.draw = function(tilesets,groupID) {
		
		for(var i = 0; i < this.height; i++) {
			
			for(var j = 0; j < this.width; j++) {
				
			
				var gID = this.tiles[j][i];
				if (gID != 0) {
				var tileset = this.getgIDTileset(gID,tilesets);
				console.log(tileset.firstgID);
				console.log("oldgID");
				console.log(gID);
				gID = tileset.convertgID(gID);
				console.log(gID);
				var tilesetX = tileset.getgIDXOffset(gID);
				var tilesetY = tileset.getgIDYOffset(gID);
				var posX = Math.floor(j * tileset.tileWidth);
				var posY = Math.floor(i * tileset.tileHeight);

				var anim = new $.gQ.Animation({ imageURL: tileset.image,
					numberOfFrame: 1,
					delta: 32,
					offsetx: tilesetX,
					offsety: tilesetY,
					type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
				var id = "tile" + j.toString() + "," + i.toString();
				
				$(groupID).addSprite( id, {animation: anim,
										width: tileset.tileWidth,
										height: tileset.tileHeight,
										posx: posX,
										posy: posY 
										});
				}
			}
		}		
	
	};

}