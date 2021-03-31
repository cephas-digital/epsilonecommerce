class Car{
constructor(cname, cmodel, ccolor){
    this.name = cname
this.model = cmodel;
this.color = ccolor
}

info(){
    if(this.color =='Red'){
        document.getElementById('error').innerHTML = "You do not meet up with specification"
        // alert('danger')
    }
    else{
        return 'i have'+ this.name + 'car' + ' and the model is ' + this.model + ' and the color is ' + this.color

    }
}

}

let id = 0
function run() {
    id+=1;
    
let cna = document.getElementById('cn').value;
let cmo = document.getElementById('cm').value;
let cca = document.getElementById('cc').value;


Mariam = new Car(cna, cmo, cca)

let myol = document.createElement('div');
let mybutton = document.createElement('button');

myol.setAttribute('id', `${id}`)
let myul = document.createElement('div')
myul.textContent = `${id}ddd ${Mariam.info()} `
myol.appendChild(myul)
mybutton.onclick = 


document.body.appendChild(myol)

}


document.getElementById('btn').addEventListener("click", run
)
