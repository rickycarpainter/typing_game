var StopWatch = function() {
	var start_time;
	
	
	this.begin = function()
	{
		this.start_time = Date.now();
	}
	
	this.display = function()
	{
		var current = Date.now(this.start_time);
		
		return current.getMinutes() + ": " + current.getSeconds() + ": " current.getMilliseconds();
	}
};