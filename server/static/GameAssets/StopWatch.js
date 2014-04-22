var StopWatch = function() {
	var start_time;
	var clock = 0;
	
	
	this.begin = function()
	{
		this.clock = 0;
		this.start_time = Date.now();
	}
	
	this.display = function()
	{
		var current = Date.now();
		var change = current - this.start_time;
		clock += change;
		return clock;
	}
};