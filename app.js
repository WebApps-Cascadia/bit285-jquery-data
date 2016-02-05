(function(){
	//get data from my own hosted json
	var jsonPath = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';
	$.getJSON(jsonPath, callBack);

	var projects = []; //projects array
	var featuredProjects = [];  //hold 3 featured project3

	function callBack(data){
		projects = data.projects;
		featuredProjects = projects.slice(0, 3);

		console.log(featuredProjects);

		$.each(featuredProjects, function(i, project){
			$('<img/>').attr('src', project.links.image)
			.attr('width', '250px')
			.appendTo('#project');
		});
	  	
	  }
	  

}());