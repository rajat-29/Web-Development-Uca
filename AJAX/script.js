	var data=[];
	var table = document.getElementById('table');
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://api.github.com/users?since=1",true);
	xhr.onload = function() {
		var d = xhr.responseText;
		data = JSON.parse(d);
		for(i in data)
		{
			addingtoDom(data[i]);
		}
 }
	xhr.send();

	function addingtoDom(obj) {
		var tr1 = document.createElement('tr');

		var td0 = document.createElement('img');
		td0.setAttribute("src",obj.avatar_url);
		td0.setAttribute("style","width:50px; height=50px");
		tr1.appendChild(td0);

		var td1 = document.createElement('td');
		td1.innerHTML = obj.login;
		tr1.appendChild(td1);

		var td2 = document.createElement('td');
		td2.innerHTML = obj.id;
		tr1.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerHTML = obj.type;
		tr1.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerHTML = obj.url;
		tr1.appendChild(td4);

		table.appendChild(tr1);
}