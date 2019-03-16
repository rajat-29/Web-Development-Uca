var products = [];
var productId = 1;
var cart = [];
var cartId = 1

function retrive() {
	var d = localStorage.getItem("Content");
	if(d != null)
	{
		products = JSON.parse(d);
		for(var i=0;i<products.length;i++)
		{
			addProducttoDOM(products[i]);
		}
		productId=products.length;
		cartId=cart.length;
	}
}

var divListProducts = document.getElementById("divListProducts");

function addProducttoDOM(objProduct) {  	
	//create a new DIV for this product 
	var tr = document.createElement("tr");

	var td1 = document.createElement("td");
	td1.setAttribute("id","Product"+productId);
	td1.innerHTML = productId;
	tr.appendChild(td1);

	var td2 = document.createElement("td");
	td2.setAttribute("id","ProductName"+productId);
	td2.innerHTML = objProduct.Name;
	tr.appendChild(td2);

	var td3 = document.createElement("td");
	td3.innerHTML = objProduct.Price;
	td3.setAttribute("id","ProductPrice"+productId);
	tr.appendChild(td3);

	var td7 = document.createElement("td");
	td7.innerHTML = objProduct.Quantity;
	td7.setAttribute("id","ProductQuantity"+productId);
	tr.appendChild(td7);

	var td4 = document.createElement("td");
	var input = document.createElement("input");
	input.setAttribute("type","textbox"+productId);
	input.setAttribute("id","input"+productId);
	td4.appendChild(input);
	tr.appendChild(td4);

	var td5 = document.createElement("td");
	var btn = document.createElement("button");
	btn.innerHTML = "Add to Cart";
	btn.setAttribute("id","btn"+productId);
	td5.appendChild(btn);
	tr.appendChild(td5);

	btn.addEventListener("click", function(event) {  
	var selectProductIndex = td1.innerHTML;
	var a = td4.value;
	console.log(a); 
    addToCart(selectProductIndex); 
	});
	console.log(tr);
	divListProducts.appendChild(tr);
	productId++;
}

function addToCart(selectProductIndex) {
	var i = document.getElementById("Product"+selectProductIndex).innerHTML;
	var objProduct = new Object();
	objProduct.Id = cartId;
	objProduct.Name = document.getElementById("ProductName"+selectProductIndex).innerHTML;
	var temp=document.getElementById("input"+selectProductIndex);
	objProduct.Price = document.getElementById("ProductPrice"+selectProductIndex).innerHTML;
	qty = document.getElementById("input"+selectProductIndex).value;
	objProduct.Quantity = document.getElementById("input"+selectProductIndex).value;
	cart.push(objProduct);
	temp.value="";
		
	var temp = JSON.stringify(cart);
	localStorage.setItem("Carts", temp);
	cartId++;
	update(i,qty);
}

function update(i,qty) {
	var new1 = products[i-1];
	var a = new1.Quantity-qty;	
	if(a<0)
	{
		alert("Not Available")
	}
	new1.Quantity=a;
	products[i-1]=new1;
	var temp = JSON.stringify(products);
	localStorage.setItem("Content", temp);
}