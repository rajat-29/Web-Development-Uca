var cart = [];
var cartId = 1;

function retrive() {
	if(!sessionStorage.current_User) {
		window.location.href = 'login.html';
	}
	else {
	var d = localStorage.getItem("Carts");
	if(d != null)
	{
		cart = JSON.parse(d);
		for(var i=0;i<cart.length;i++)
		{
			addProducttoDOM(cart[i]);
		}
	}
	else{
		cart = [];
	}
}
}

var divListCart = document.getElementById("divListCarts");

function addProducttoDOM(objProduct) {  	
	//create a new DIV for this product 
	var tr = document.createElement("tr");

	var td1 = document.createElement("td");
	td1.setAttribute("id","Product"+cartId);
	td1.innerHTML = cartId;
	tr.appendChild(td1);

	var td2 = document.createElement("td");
	td2.setAttribute("id","ProductName"+cartId);
	td2.innerHTML = objProduct.Name;
	tr.appendChild(td2);

	var td3 = document.createElement("td");
	td3.innerHTML = objProduct.Price;
	td3.setAttribute("id","ProductPrice"+cartId);
	tr.appendChild(td3);

	var td7 = document.createElement("td");
	td7.innerHTML = objProduct.Quantity;
	td7.setAttribute("id","ProductQuantity"+cartId);
	tr.appendChild(td7);

	var td5 = document.createElement("td");
	var btn = document.createElement("button");
	btn.innerHTML = "Remove";
	btn.setAttribute("id","btn"+cartId);
	btn.setAttribute("style","color :black;");
	td5.appendChild(btn);
	tr.appendChild(td5);

	btn.addEventListener("click", function(event) {  
var parentNode = event.target.parentNode.parentNode;
		   var selectProductIndex = td1.innerHTML; 
		   console.log(selectProductIndex);
		   removeFromCart(selectProductIndex);
		   	//var parentNode = event.target.parentNode.parentNode;
		   	console.log(parentNode);
	parentNode.parentNode.removeChild(parentNode);
 
	});
	console.log(tr);
	divListCart.appendChild(tr);
	cartId++;
}

function removeFromCart(selectProductIndex) {
	cart.splice((selectProductIndex-1),1);
	console.log(cart);
	data = JSON.stringify(cart);
	localStorage.setItem("Carts", JSON.stringify(cart));
	//localStorage.setItem("Carts",data);
}

function getProductIndex(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].Id == id) 
			return i;
    }
} 