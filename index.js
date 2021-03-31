
let products= [
    {id:1,name:"Iphone15", Price:50, Description: 'Latest Phone in Town, Abba Made', image: 'assets/1.jpg'},
    {id:2,name:"Tecno 12", Price:90, Description: 'This product is very okay', image: 'assets/2.jpg'},
    {id:3,name:"camon", Price:19, Description: 'camon the best', image: 'assets/3.jpg'},
    {id:4, name:"samsung", Price:64, Description: 'Made by Buhari', image: 'assets/7.jpg'}
    ]   
    let text
    for(let i=0; i<products.length; i++){
    text+= `
    <div style="display:flex; flex-direction:column"> 
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body"><h5 class="card-title"> ${products[i].name} </h5>
    <h4 style="color:red">$  ${products[i].Price} </h4>
    <p class="card-text">${products[i].Description}</p>
    <div class="add-cart"><a href="#" class="btn btn-primary" >Add to Cart</a> </div>
    </div></div></div> 
   `
    }
    let f = document.getElementById("demo")
    f.innerHTML = text

    let add = document.querySelectorAll('.add-cart')
   //  console.log(html);
    add.forEach(function(btn){
   //  let html = btn.innerHTML;
   let newname = []
let tt = btn.parentElement.children[0].innerText

let rr = products.find(u=>u.name ==tt)
// document.getElementById('demo').innerHTML = tt   

    console.log(rr.name)

      btn.addEventListener("click", ()=>{
         let cart = [];

         for(i=0; i<rr.name.length; i++){
            cart+=rr.name[i];
         }


document.getElementById('my-cart').innerHTML = cart;


      })

let cart = [];

    })



    
   
// add.addEventListener("click", function(){
//    alert('added to cart')
// })

let m = f.children[3]
// m.classList
// console.log(add);
// console.log(selcart)
   //  console.log(text);

    function search(){  
       let newp =  document.getElementById('ser').value;

       let aa = products.find(i=>i.name==newp)

       const olo = products.map(i=>i.name);
       
       if(olo.includes(newp)){
document.getElementById('demo').innerHTML =`
<div style="display:flex; flex-direction:column"> <div class="card" style="width: 18rem;>
<div class="card" style="width: 18rem;">
<img src="${aa.image}" class="card-img-top" alt="...">
<div class="card-body"><h5 class="card-title"> ${aa.name} </h5>
<h4 style="color:red">$  ${aa.Price} </h4>
<p class="card-text">${aa.Description}</p>
<a href="#" class="btn btn-primary">Add to Cart</a>
</div></div></div> </div> 
` ;
       }
       else{
        document.getElementById('demo').innerHTML = "Not found"
       }


    }


    (function(){

const mycart = document.getElementById("my-cart");

const carticon = document.getElementById("cart-icon")

carticon.addEventListener("click",function show(){
   mycart.classList.toggle("show-cart")




})
 })()





    

 // foreach
 
 
//  let items = ['john', 'lola', 'kike', 'sam']

// let products= [
//     {name:"Iphone15", Price:50, Description: 'Latest Phone in Town, Abba Made', image: 'assets/1.jpg'},
//     {name:"Tecno 12", Price:90, Description: 'This product is very okay', image: 'assets/2.jpg'},
//     {name:"camon", Price:19, Description: 'camon the best', image: 'assets/3.jpg'},
//     {name:"samsung", Price:64, Description: 'Made by Buhari', image: 'assets/7.jpg'}
    
//     ]   

//  products.map(i=>console.log(i.name + i.Description + i.Price))
// var cart = [];

// cart.length==0?document.getElementById('demo').innerHTML = 'Nothing in Cart':null

// function addtocart(){
//    let num = document.getElementById("inp").value
//    // let newnum = Number(num)
//    cart.push(num)
//    cart.map(i=>{
//       // console.log(cart.length)
//       if(cart.indexOf(num)!=-1 )
//       {
//      alert('noooooo');
//       }
//       else{
//      document.getElementById("demo").innerHTML = cart.join(' ');
//       }
      
// }
// )
// }



// numbers.map(i=>{console.log(i)})