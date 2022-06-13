//  function saveData(){
//      let name,email,mob,no,time,msg;
//      name = document.getElementById("name").value;
//      email = document.getElementById("email").value;
//      mob = document.getElementById("mob").value;
//      no = document.getElementById("no").value;
//      time = document.getElementById("time").value;
//      msg = document.getElementById("msg").value;

//      localStorage.setItem("name",name);
//      localStorage.setItem("email",email);
//      localStorage.setItem("mob",mob);
//      localStorage.setItem("no",no);
//      localStorage.setItem("time",time);
//      localStorage.setItem("msg",msg);
//  }
localStorage.clear();
 showData();

function saveData()
{
let name,email,mob,no,time,msg;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

mob=document.getElementById("mob").value;
no = document.getElementById("no").value;
time = document.getElementById("time").value;
 msg = document.getElementById("msg").value;

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
  "mob":mob,
  "no":no,
  "time":time,
  "msg":msg
})

localStorage.setItem("users",JSON.stringify(user_records));

}
showData();

}

// let btnSend =


// for (const button of btnSend) {
// 	button.addEventListener('click', function(event) {
// 		if(this.innerText === "Book Your Table"){
// 			this.innerText = "Reserved";
// 		}else{
// 			this.innerText ="Book Your Table";
// 		}
		

// 	})
// }

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='<div class="col-sm-2" style="padding:5px;background-color: rgb(177, 169, 169);">'+user_records[i].name+'</div><div class="col-sm-2" style="padding:5px;background-color: rgb(177, 169, 169);">'+user_records[i].email+'</div><div class="col-sm-2" style="padding:5px;background-color: rgb(177, 169, 169);">'+user_records[i].mob+'</div><div class="col-sm-2" style="padding:5px;background-color: rgb(177, 169, 169);">'+user_records[i].no+
  '</div><div class="col-sm-2" style="padding: 5px;background-color: rgb(177, 169, 169);">'+user_records[i].time+
  '<div class="col-sm-2" style="padding: 5px;background-color: rgb(177, 169, 169);">'+user_records[i].msg+'</div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
   
  }
  
}
//   if(user_records!= empty){
//   addEventListener("click",(e)=>{
//   var book = document.getElementById("book");
//   book.innerHTML = "Reserved";
// })
//   }





  document.getElementById("bton").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("info").removeAttribute("hidden");
    // btnSend.innerText="uyyjhg";
   //document.getElementById("book").innerHTML="jhgjh";

  })
  