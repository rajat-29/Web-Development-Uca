var parent = document.getElementById("table");
var btn = document.getElementById("submitbutton");
var input = document.getElementById("input");
var arr=[];
var date=[];

btn.addEventListener("click",function(abc)
{
		if(!input.value)
		{
			alert("PLEASE ENTER THE VALUE");
			return ;
		}
	    	arr.push(input.value);
		date.push(new Date().toString());
		generateRows();
}
);

function generateRows()
{
		parent.innerHTML="";
		parent.appendChild(stat());
		for(var i=0;i<arr.length;i++)
		{
			var row=document.createElement('tr');
			row.setAttribute("id",i);
			var sr_no=document.createElement('td');
			sr_no.innerHTML=i+1;
			row.appendChild(sr_no);

			var task_no=document.createElement('td');
			task_no.innerHTML=arr[i];
			row.appendChild(task_no);

			var date_no=document.createElement('td');
			date_no.innerHTML=date[i];
			row.appendChild(date_no);

			var del_co=document.createElement('td');
			var button=document.createElement('button');
			button.innerHTML="Delete";

			button.addEventListener("click",function(e)
			{
				arr.splice(e.target.parentNode.parentNode.id,1);
				date.splice(e.target.parentNode.parentNode.id,1);
				generateRows();
			});

			del_co.appendChild(button);
			row.appendChild(del_co);
			parent.appendChild(row);
		}
		input.value="";
}

function stat() {
	        var row=document.createElement('tr');
			var sr_no=document.createElement('td');
			sr_no.innerHTML="Serial No";
			row.appendChild(sr_no);

			var task_no=document.createElement('td');
			task_no.innerHTML="TASK";
			row.appendChild(task_no);

			var date_no=document.createElement('td');
			date_no.innerHTML="Date";
			row.appendChild(date_no);

			var del_co=document.createElement('td');
			del_co.innerHTML="Delete";

			row.appendChild(del_co);
			parent.appendChild(row);

			return (row);
}