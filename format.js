(function() {
	var chapters = document.getElementsByTagName("td");
	for(var i = 0; i < chapters.length; i++) {
		var chapter = chapters[i];
		var html = chapter.innerHTML.split("\n");
		var newHtml = "<p>" + html.join("</p><p>") + "</p>";
		newHtml = newHtml.replace(/<p>    /g, "<p class='indent'>");
		chapter.innerHTML = newHtml;
	}
})();