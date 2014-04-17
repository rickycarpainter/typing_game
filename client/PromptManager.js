function PromptManager(gameController) {

	this.left = null;
	this.right = null;
	this.up = null;
	this.down = null;

	this.gameController = gameController;

	var A = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var B = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var C = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var D = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var E = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var F = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var G = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var H = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var I = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var J = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var K = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var L = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var M = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var N = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var O = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var P = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var Q = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var R = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var S = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var T = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var U = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var V = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var W = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var X = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});	
	var Y = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});
	var Z = new $.gQ.Animation({ imageURL: "images/letters.png",
					numberOfFrame: 1,
					delta: 20,
					offsetx: 0,
					offsety: 0,
					type: $.gQ.ANIMATION_HORIZONTAL  | $.gQ.ANIMATION_ONCE}});		
}