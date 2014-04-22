var StopWatch = function() {
	var start_time;
	
	
	this.begin = function()
	{
		this.start_time = Date.now();
	}
	
	this.display = function()
	{
		var current = Date(this.start_time);
		console.log(current.getTime());
		return "00: 00: 00";
	}
};