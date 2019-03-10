var box1 = document.getElementById("input1");
var box2 = document.getElementById("input2");
var cordinates = document.getElementById("cordinate");

box1.addEventListener("mousemove", function(event) {
	box1.setAttribute("style", "background-color : white;");
	cordinates.innerHTML = "(" + event.pageX + ", " + event.pageY + ")";
	cordinates.setAttribute("style", "background-color: red;color:black", "width: 50px;")
	console.log(box1);
});

box1.addEventListener("mouseout", function(event) {
	box1.setAttribute("style", "background-color:red;");
});

box2.addEventListener("mousemove", function(event) {
	box2.setAttribute("style", "background-color : white;");
	console.log(box2);
});

box2.addEventListener("mouseout", function(event) {
	box2.setAttribute("style", "background-color : red;");
});