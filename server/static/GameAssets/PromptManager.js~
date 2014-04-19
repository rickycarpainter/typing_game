function PromptManager(gameController, tileEngine) {
	
	this.gameController = gameController;
	this.tileEngine = tileEngine;
	
	this.init = function() {
					
			$("#mapObjects").addSprite("leftKey", {animation: this.keyUpAnimation,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("rightKey", {animation: this.keyUpAnimation,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("upKey", {animation: this.keyUpAnimation,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});
			$("#mapObjects").addSprite("downKey", {animation: this.keyUpAnimation,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});

			$("#mapObjects").addSprite("leftLetter", {animation: this.A,
										width: 22,
										height: 21,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("rightLetter", {animation: this.B,
										width: 22,
										height: 21,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("upLetter", {animation: this.C,
										width: 22,
										height: 21,
										posx: 0,
										posy: 0 
										});
			$("#mapObjects").addSprite("downLetter", {animation: this.D,
										width: 22,
										height: 21,
										posx: 0,
										posy: 0 
										});										
										
										
			$("#leftKey").hide();
			$("#rightKey").hide();
			$("#upKey").hide();
			$("#downKey").hide();
			
			$("#leftLetter").hide();
			$("#rightLetter").hide();
			$("#upLetter").hide();
			$("#downLetter").hide();
	
	};	
	
	//Shows or hides the keys and letters based on whether or not the player can move there
	this.showKeysAndLetters = function() {
			
			//Check to see if the left key should be shown or hidden
			if(tileEngine.canMoveLeft(this.tileEngine.player)) {
				$("#leftKey").show();
				$("#leftLetter").show();
			}
			else {
				$("#leftKey").hide();
				$("#leftLetter").hide();
			}
			
			//Check to see if the right key should be shown or hidden
			if(tileEngine.canMoveRight(this.tileEngine.player)) {
				$("#rightKey").show();
				$("#rightLetter").show();
			}
			else {
				$("#rightKey").hide();
				$("#rightLetter").hide();
			}
			
			//Check to see if the up key should be shown or hidden
			if(tileEngine.canMoveUp(this.tileEngine.player)) {
				$("#upKey").show();
				$("#upLetter").show();
			}
			else {
				$("#upKey").hide();
				$("#upLetter").hide();
			}
			
			//Check to see if the down key should be shown or hidden
			if(tileEngine.canMoveDown(this.tileEngine.player)) {
				$("#downKey").show();
				$("#downLetter").show();
			}
			else {
				$("#downKey").hide();
				$("#downLetter").hide();
			}
	};
	
	this.setKeysAndLetters = function() {
			
			var playerX = this.tileEngine.player.posX;
			var playerY = this.tileEngine.player.posY;
			
			this.gameController.randomizeKeys();
			
			$("#leftKey").setAnimation(this.keyUpAnimation)
				.x((playerX - 1) * 36)
				.y(playerY * 36).end();
			$("#rightKey").setAnimation(this.keyUpAnimation)
				.x((playerX + 1) * 36)
				.y(playerY * 36).end();
			$("#upKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36)
				.y((playerY - 1) * 36).end();
			$("#downKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36)
				.y((playerY + 1) * 36).end();
				
			$("#leftLetter").setAnimation(this.keyToAnimation[this.gameController.keyLeft])
				.x((playerX - 1)* 36 + 8)
				.y(playerY * 36 + 3).end();
			$("#rightLetter").setAnimation(this.keyToAnimation[this.gameController.keyRight])
				.x((playerX + 1)* 36 + 8)
				.y(playerY * 36 + 3).end();
			$("#upLetter").setAnimation(this.keyToAnimation[this.gameController.keyUp])
				.x(playerX * 36 + 8)
				.y((playerY - 1) * 36 + 3).end();
			$("#downLetter").setAnimation(this.keyToAnimation[this.gameController.keyDown])
				.x(playerX * 36 + 8)
				.y((playerY + 1)* 36 + 3).end();
	};

	this.keyUpAnimation = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/textures.png",
					numberOfFrame: 1,
					delta: 36,
					offsetx: 53,
					offsety: 363,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	
	this.keyDownAnimation = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/textures.png",
					numberOfFrame: 1,
					delta: 36,
					offsetx: 91,
					offsety: 363,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	
	this.A = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.B = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 22,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.C = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 44,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.D = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 66,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.E = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 88,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.F = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 21,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.G = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 22,
					offsety: 21,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.H = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 44,
					offsety: 21,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.I = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 66,
					offsety: 21,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.J = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 88,
					offsety: 21,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.K = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 42,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.L = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 22,
					offsety: 42,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.M = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 44,
					offsety: 42,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.N = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 66,
					offsety: 42,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.O = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 88,
					offsety: 42,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.P = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 63,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.Q = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 22,
					offsety: 63,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.R = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 44,
					offsety: 63,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.S = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 66,
					offsety: 63,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.T = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 88,
					offsety: 63,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.U = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 84,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.V = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 22,
					offsety: 84,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.W = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 44,
					offsety: 84,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.X = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 66,
					offsety: 84,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.Y = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 88,
					offsety: 84,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.Z = new $.gQ.Animation({ imageURL: "/static/GameAssets/images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 105,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
					
	this.keyToAnimation = {};
	this.keyToAnimation[65] = this.A;
	this.keyToAnimation[66] = this.B;
	this.keyToAnimation[67] = this.C;
	this.keyToAnimation[68] = this.D;
	this.keyToAnimation[69] = this.E;
	this.keyToAnimation[70] = this.F;
	this.keyToAnimation[71] = this.G;
	this.keyToAnimation[72] = this.H;
	this.keyToAnimation[73] = this.I;
	this.keyToAnimation[74] = this.J;
	this.keyToAnimation[75] = this.K;
	this.keyToAnimation[76] = this.L;
	this.keyToAnimation[77] = this.M;
	this.keyToAnimation[78] = this.N;
	this.keyToAnimation[79] = this.O;
	this.keyToAnimation[80] = this.P;
	this.keyToAnimation[81] = this.Q;
	this.keyToAnimation[82] = this.R;
	this.keyToAnimation[83] = this.S;
	this.keyToAnimation[84] = this.T;
	this.keyToAnimation[85] = this.U;
	this.keyToAnimation[86] = this.V;
	this.keyToAnimation[87] = this.W;
	this.keyToAnimation[88] = this.X;
	this.keyToAnimation[89] = this.Y;
	this.keyToAnimation[90] = this.Z;

	
}