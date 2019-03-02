var parent = document.getElementById("table");
var btn = document.getElementById("submitbutton");
	var input = document.getElementById("input");
	var arr=[];
	var count=0;

	btn.addEventListener("click",function(abc)
	{
		var value=input.value;
		if(!value)
		{
			alert("not value");
			return ;
		}
		arr.push(value);
		generateRows();
}
);
	function generateRows()
	{
		parent.innerHTML="";
		for(var i=0;i<arr.length;i++)
		{
			var row=document.createElement('tr');
			row.setAttribute("id",i);
			var sr_no=document.createElement('tr');
			sr_no.innerHTML=i+1;
			row.appendChild(sr_no);

			var task_no=document.createElement('td');
			task_no.innerHTML=arr[i];
			row.appendChild(task_no);

			var del_co=document.createElement('td');
			var button=document.createElement('button');
			button.innerHTML="Delete";

			button.addEventListener("click",function(e)
			{
				arr.splice(e.target.parentNode.parentNode.id,1);
				generateRows();
			});
			del_co.appendChild(button);
			row.appendChild(del_co);



			parent.appendChild(row);
		}
	}
