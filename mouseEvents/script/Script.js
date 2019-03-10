var body=document.getElementById('contain');
var box=document.getElementById('input1');

box.addEventListener("mousemove",function(event)
{
  input1.setAttribute("style","background-color: green");
  console.log(1);
});

body.addEventListener("mousemove",function(event)
{
  input2.setAttribute("style",`top: ${event.pageY}; left: ${event.pageX}`);
  console.log(3);
});

box.addEventListener("mouseout",function(event){
  input1.setAttribute("style","background-color: red;color:black");
  console.log(2);
});