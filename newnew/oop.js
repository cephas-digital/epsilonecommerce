
class Car{
    constructor(CarName,CarModel,CarColor,CarPrice){
        this.name = CarName
        this.model = CarModel
        this.color = CarColor
       
    }

    Info(){
        if (this.color== 'red'){
            let mm =  document.getElementById('demo')
          mm.innerHTML= 'This is Currently Unavailable'
          mm.style.backgroundColor = 'red'
        }
        else if(this.color!='red'){
            return 'I have a '+ this.name + ' the model is '+ this.model + ' and it is a '+ this.color 
        }
    }
}

let id =0
function run(){
    id +=1
    let cname = document.getElementById('cn').value
    let cmodel = document.getElementById('cm').value
    let ccolor = document.getElementById('cc').value
    
    
    Luqman= new Car(cname ,cmodel ,ccolor) 

     // let display = document.getElementById('demo')
   
    // display.innerHTML= Luqman.Info()

    let myol = document.createElement('div');
    let myul = document.createElement('div');
    var mybtn = document.createElement('Button');
    mybtn.textContent ='Delete'
    mybtn.setAttribute('id','${id}')
    mybtn.onclick = function({id}){
        document.getElementById('${id}').parentElement.remove()
    }

    myul.textContent =id + Luqman.Info()
    myul.appendChild(mybtn)
    myol.appendChild(myul)
    document.body.appendChild(myol)
      
      

   
   
}

// document.write(Luqman.Info())
// document.write(Lukky.Info())



