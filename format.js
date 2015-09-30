(function() {
	var headings = document.getElementsByTagName("h1");
	document.title = headings[0].innerHTML + " " + headings[1].innerHTML;
	var chapters = document.getElementsByTagName("td");
	for(var i = 0; i < chapters.length; i++) {
		var chapter = chapters[i];
		var html = chapter.innerHTML.split("\n");
		var newHtml = "<p>" + html.join("</p><p>") + "</p>";
		newHtml = newHtml.replace(/<p>    /g, "<p class='indent'>");
		chapter.innerHTML = newHtml;
	}
})();