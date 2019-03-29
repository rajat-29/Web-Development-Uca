var temp_login = [];
var loginId = 1;

function retrive() {
	var d = localStorage.getItem("Register");
	if(d != null)
	{
		console.log(d);
		temp_login = JSON.parse(d);
	}
}

function rajat() {
	var user = document.getElementById('user').value;
	var upass = document.getElementById('userpass').value;
		

	if(temp_login!=null)
	{
		for(var i=0;i<temp_login.length;i++)
		{
			if(temp_login[i].Name == user)
			{

				if(temp_login[i].Password == upass)
				{
					console.log(upass);
					var objlogin = new Object();
					objlogin.username = temp_login[i].Name;
					objlogin.pass = temp_login[i].Password;
					sessionStorage.setItem("current_User",objlogin.username);
					if(user == "rajat") {
						window.open('manageProduct.html');
					}
					else {
					window.open('showProduct.html');
					}
					return ;
				}
				else{
					alert("Incorrect Password");
					return;
				}
			}
		}
	}
	else {
		alert("Please Register Yourself");
		return;
	}
}