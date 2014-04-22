var StopWatch = function() {
	var start_time;
	
	
	this.begin = function()
	{
		this.start_time = Date.now();
	}
	
	this.display = function()
	{
		var current = Date.now();
		var change = current - this.start_time;
		
		return change.GetMinutes() + ": " + change.getSeconds() + ": " change.getMilliseconds();
	}
};