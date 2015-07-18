function search(){
	var query = document.getElementById('input-text').value;
	var url = "https://www.google.com/search?q="+query;
	window.location.href=url;
}