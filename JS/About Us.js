function changeSizeId() {
	document.getElementById("firstP").style.fontSize = "24";
}

function changeSizeTag() {
	document.getElementsByTagName("P")[1].style.fontSize = "24";
}

function changeSizeClass() {
	document.getElementsByClassName("colorful")[0].style.color = "black";
	document.getElementsByClassName("colorful")[0].style.fontSize = "24";
}

function grabData() {
	const htp = new XMLHttpRequest();
	const url= 'https://jsonplaceholder.typicode.com/posts/';
	http.open("GET", url);
	http.send();
	http.onreadystatechange = (e) => {
	  console.log(http.responseText)
	}
}