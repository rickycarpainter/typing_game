//----------------------------------------------------------------------------
// MapItem Class
function MapItem() {

	this.posX = 0;
	this.posY = 0;
	
	this.spriteX = 0;
	this.spriteY = 0;
	this.width = 0;
	this.height = 0;
	
	this.animation = null;
	
}

//----------------------------------------------------------------------------
// Player Class
function Player() {
	
	this.carrots = 0;
	this.drawOffsetX = 4;
	this.drawOffsetY = -15;	
	
	this.setAnimation = function() {
		this.animation = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/textures.png",
						numberOfFrame: 1,
						delta: this.width,
						offsetx: this.spriteX,
						offsety: this.spriteY,
						type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
	}
	
	this.draw = function() {
			
		
		var posX = 36 * this.posX + this.drawOffsetX;
		var posY = 36 * this.posY + this.drawOffsetY;
		$("#mapObjects").addSprite( "player", {animation: this.animation,
								width: this.width,
								height: this.height,
								posx: posX,
								posy: posY 
								});	
								
		$("#player").scale(0.75);
	
	}

}

Player.prototype = new MapItem(); //Inherit from MapItem

//----------------------------------------------------------------------------
// Collectable Class
function Collectable() {

	this.collected = false;

}

Collectable.prototype = new MapItem(); //Inherit from MapItem

//----------------------------------------------------------------------------
// Carrot Class
function Carrot() {

	this.setAnimation = function() {
		this.animation = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/textures.png",
						numberOfFrame: 1,
						delta: this.width,
						offsetx: this.spriteX,
						offsety: this.spriteY,
						type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
	}
	
	this.draw = function() {
		
		var posX = 36 * this.posX + 4;
		var posY = 36 * this.posY + 13;
		$("#mapObjects").addSprite( "carrot", {animation: this.animation,
								width: this.width,
								height: this.height,
								posx: posX,
								posy: posY 
								});	
								
	
	}
}

Carrot.prototype = new Collectable(); //Inherit from Collectable

//----------------------------------------------------------------------------
// Tunnel Class
function Tunnel() {
	
	this.setAnimation = function() {
		this.animation = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/textures.png",
						numberOfFrame: 1,
						delta: this.width,
						offsetx: this.spriteX,
						offsety: this.spriteY,
						type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
					
	}
	
	this.draw = function() {
		
		var posX = 36 * this.posX - 4;
		var posY = 36 * this.posY + 1;
		$("#mapObjects").addSprite( "tunnel", {animation: this.animation,
								width: this.width,
								height: this.height,
								posx: posX,
								posy: posY 
								});	
								
	
	}

}

Tunnel.prototype = new MapItem(); //Inherit from MapItem
