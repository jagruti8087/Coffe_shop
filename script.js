
function saveData()
{
let name,email,phone,persons,date,time;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

phone=document.getElementById("phone").value;
persons = document.getElementById("persons").value;
date = document.getElementById("date").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{

  
  user_records.push({
  
  "name":name,
  "email":email,
  "phone":phone,
  "persons":persons,
  "date":date,
  "time":time
})

localStorage.setItem("users",JSON.stringify(user_records));


}
}	

function myFunction1(){
	  let data = JSON.parse(localStorage.getItem('users'));
	  localStorage.getItem("users",JSON.stringify(data));  
	  for(var i=0;i<data.length;i++){
	  if(data[i].email == data[0].email){
	    document.getElementById("T1").innerHTML="Reserve"
	    console.log("reserved");
	   }else{
	    console.log("false")
	    document.getElementById("T1").innerHTML="Booking Available"
	  }
	 }
	}
	
	
	function myFunction2(){
		   let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[1].email){
		    document.getElementById("T2").innerHTML="Reserve"
		   }else{
		    document.getElementById("T2").innerHTML="Booking Available"
		  }
		 }
		}
		
		
		
		 function myFunction3(){
		  let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[2].email){
		    document.getElementById("T3").innerHTML="Reserve"
		   }else{
		    document.getElementById("T3").innerHTML="Booking Available"
		  }
		 }
		}
		
		
		 function myFunction4(){
		   let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[3].email){
		    document.getElementById("T4").innerHTML="Reserve"
		   }else{
		    document.getElementById("T4").innerHTML="Booking Available"
		  }
		 }
		 }
		
		
		function myFunction5(){
		  let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[4].email){
		    document.getElementById("T5").innerHTML="Reserve"
		   }else{
		    document.getElementById("T5").innerHTML="Booking Available"
		  }
		 }
		}
		
		
		 function myFunction6(){
		   let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[5].email){
		    document.getElementById("T6").innerHTML="Reserve"
		   }else{ 
		    document.getElementById("T6").innerHTML="Booking Available"
		  }
		 }
		 }
		
		
		 function myFunction7(){
		  let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[6].email){
		    document.getElementById("T7").innerHTML="Reserve" 
		   }else{ 
		    document.getElementById("T7").innerHTML="Booking Available"
		  }
		 }
		}
		
		
		 function myFunction8(){
		  let data = JSON.parse(localStorage.getItem('users'));
		  localStorage.getItem("users",JSON.stringify(data)); 
		  for(var i=0;i<data.length;i++){
		  if(data[i].email == data[7].email){
		    document.getElementById("T8").innerHTML="Reserve"
		   }else{
		    document.getElementById("T8").innerHTML="Booking Available"
		  }
		 }
		 }




let productsInCart = JSON.parse(localStorage.getItem('ordersinCart'));
if(!productsInCart){
	productsInCart = [];
}

 var parentElement = document.querySelector('.modal-content');
   var carttotalPrice = document.querySelector('#totalprice');
 var products = document.querySelectorAll('.card-body');

const counttotalPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}
const updateorderscartinCartHTML = function () {  // 3
	localStorage.setItem('ordersinCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
            <div class="modal-content" id="modalcontent">
            <div class="modal-header" id="modalbody">
             
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ">
              <div class="row">
              <div class="col-lg-6">
                <img class="modal-img" src="${product.image}">
                <h5 class="modal-title">${product.name}
                <p class="mprice">${product.price}</p></h5>
              </div>
                <div class=col-3 id="count">
                  <h5 class="mbtitle">Quantity</h5>
                  <span class="minus"data-id=${product.id}>-</span>
                  <span class="num">${product.count}</span>
                  <span class="plus" data-id=${product.id}>+</span>
                </div>
              <div class="col-3" id="count">
                
              </div>
              </div>
            </div>
            
          </div> 
           
            `
		});
		parentElement.innerHTML = result.join('');
		//document.querySelector('.checkout').classList.remove('hidden');
		//carttotalPrice.innerHTML = counttotalPrice();

	}
	else {
		//document.querySelector('.checkout').classList.add('hidden');
		//parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		//carttotalPrice.innerHTML = '';
	}
}



function updateordersInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			// productsInCart[i].count += 1;
			productsInCart.splice(i, 1);
            localStorage.setItem('ordersinCart', JSON.stringify(productsInCart));
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		} 	
	}
	productsInCart.push(product);
}

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('btn-order')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.card-title').innerHTML;
			const productPrice = item.querySelector('.price').innerText; 
    
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			} 
            updateordersInCart(product);
			updateorderscartinCartHTML();
		} 
	});
});

parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('plus'); 
	const isMinusButton = e.target.classList.contains('minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
				console.log(productsInCart[i].count += 1)
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateorderscartinCartHTML();
	}
});

updateorderscartinCartHTML();


