var register = [];
var registerId = 1;

function retrive() {
	var d = localStorage.getItem("Register");
	if(d != null)
	{
		console.log(d);
		register = JSON.parse(d);
		registerId=register.length;
	}
}


function rajat() {
	var user = document.getElementById('user').value;
	var pass1 = document.getElementById('pass5').value;
	console.log(user);
	addToCart(registerId);
}

function addToCart(selectProductIndex) {
	var user = document.getElementById('user').value;
	var pass1 = document.getElementById('pass5').value;
	var objRegister = new Object();
	objRegister.Id = registerId;
	objRegister.Name = user;
	objRegister.Password = pass1;
	register.push(objRegister);
		
	var temp = JSON.stringify(register);
	localStorage.setItem("Register", temp);
	registerId++;
}