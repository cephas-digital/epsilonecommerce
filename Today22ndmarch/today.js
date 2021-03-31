// Spread and rest operators ES6
let jss2 = ['pelumi', 'kenny', 'joshua', 'Lukeman'];
let jss3 = ['tunji', 'mariam', 'dammy'];
let ss3 = [ 'Lateefat']
let grad = [ 'Lovej', 'Modinah','Bro Kay']
let all = [...jss2, ...jss3, ...ss3, ...grad]

let text = ''

all.map(i=>{
    text+=i +'<br>';
    document.getElementById('demo').innerHTML = text
})


// mariam.sort()
// let text =''

// for(i of mariam){
//     text+=i
//     let aa = document.createElement('option')
//    let bb= aa.textContent = i
//    let sel  = document.getElementById('sel')
// sel.appendChild(aa);
// }

// console.log(text);


