function PromptManager(gameController) {
	
	this.gameController = gameController;
	
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
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("rightLetter", {animation: this.B,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});	
			$("#mapObjects").addSprite("upLetter", {animation: this.C,
										width: 36,
										height: 37,
										posx: 0,
										posy: 0 
										});
			$("#mapObjects").addSprite("downLetter", {animation: this.D,
										width: 36,
										height: 37,
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
	
	this.showKeysAndLetters = function() {
			$("#leftKey").show();
			$("#rightKey").show();
			$("#upKey").show();
			$("#downKey").show();
			
			$("#leftLetter").show();
			$("#rightLetter").show();
			$("#upLetter").show();
			$("#downLetter").show();
	};
	
	this.setKeysAndLetters = function(playerX,playerY) {
	
			this.gameController.randomizeKeys();
			
			$("#leftKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36 - 36)
				.y(playerY * 36).end();
			$("#rightKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36 + 36)
				.y(playerY * 36).end();
			$("#upKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36)
				.y(playerY * 36 - 36).end();
			$("#downKey").setAnimation(this.keyUpAnimation)
				.x(playerX * 36)
				.y(playerY * 36 + 36).end();
				
			console.log($("upKey").x());
				
			$("#leftLetter").setAnimation(this.keyToAnimation[this.gameController.keyLeft])
				.x(playerX * 36 - 36 + 8)
				.y(playerY * 36 + 3).end();
			$("#rightLetter").setAnimation(this.keyToAnimation[this.gameController.keyRight])
				.x(playerX * 36 + 36 + 8)
				.y(playerY * 36 + 3).end();
			$("#upLetter").setAnimation(this.keyToAnimation[this.gameController.keyUp])
				.x(playerX * 36 + 8)
				.y(playerY * 36 - 36 + 3).end();
			$("#downLetter").setAnimation(this.keyToAnimation[this.gameController.keyDown])
				.x(playerX * 36 + 8)
				.y(playerY * 36 + 36 + 3).end();
	};

	this.keyUpAnimation = new $.gQ.Animation({ imageURL: "images/textures.png",
					numberOfFrame: 1,
					delta: 36,
					offsetx: 53,
					offsety: 363,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	
	this.keyDownAnimation = new $.gQ.Animation({ imageURL: "images/textures.png",
					numberOfFrame: 1,
					delta: 36,
					offsetx: 91,
					offsety: 363,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	
	this.A = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.B = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 21,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.C = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 42,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.D = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 21,
					offsetx: 63,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.E = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.F = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.G = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.H = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.I = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.J = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.K = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.L = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.M = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.N = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.O = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.P = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.Q = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.R = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.S = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.T = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.U = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.V = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.W = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.X = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});	
	this.Y = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE});
	this.Z = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
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