var inpu = document.getElementById('in');
var play = document.getElementById('play');
var pause = document.getElementById('pause');

var time=0;
var inter;

inpu.addEventListener("click",function() {   /* to increase time by 10 */
 time = time + 10;
 console.log(time);
 inpu.setAttribute("value",time);
});

play.addEventListener("click",function() {   /* to decrease the time */
	console.log(time);
	time--;
	inter = setInterval(function() {
		console.log(time);
		inpu.setAttribute("value",time);
		time--;
		  if(time==-1){
    alert("Time UP!");
    clearInterval(inter);
    flag=0;
    }
	},1000);

});


pause.addEventListener("click",function(){  /* to pause the time */
  inpu.setAttribute("value","0");
  time=0;
  console.log(time);
  clearInterval(inter);
});
