document.body.onload = function()
{
	document.body.className = "jsReady";		
	
	var shell = document.createElement("div");
	
	shell.id = "test";
	
	var thumbnail_container = document.createElement("div");
	thumbnail_container.id = "thumbnail_container";
	
	document.body.appendChild(shell);
	
	
	
	var image_container = document.getElementById("image_container");
	
	shell.appendChild(image_container);
	shell.appendChild(thumbnail_container);
	
	var span = document.createElement("span");
	span.id = "description";
	span.innerHTML = "Select an image";
		
	image_container.appendChild(span);

	var gallery = image_container.getElementsByTagName("img");
	
	for (var i = 0; i < gallery.length; i++)
	{
		gallery[i].style.display = "none";
		var img_src = gallery[i].src;
		var img_alt = gallery[i].alt;
		
		var thumbnail = document.createElement("div");
		thumbnail.style.backgroundImage = "url(" + img_src + ")";
		
		thumbnail.data = img_alt;
		
		
		thumbnail.onclick = function()
		{
			image_container.style.backgroundImage = this.style.backgroundImage;
			description.innerHTML = this.data;
		};
		
		thumbnail_container.appendChild(thumbnail);
	}

};