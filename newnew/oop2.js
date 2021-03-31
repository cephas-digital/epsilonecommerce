import {Hostel} from './hostel'

class Model extends Hostel{
constructor(hName, hLoc, hType, hColor, hRN, hP){
    super(hName, hLoc, hType, hColor)

    this.hRoom = hRN
    this.hPrice = hP


}

remark(){
 return this.info() + this.hRoom + this.hPrice
}

}

function run(){

    let HostelN =  inpN.value
    let HostelL = inpL.value
    let HostelT = inpT.value
    let HostelC = inpC.value
    joshua = new Model(HostelN, HostelL, HostelT, HostelC, 20, "$20")
    
    let show = document.getElementById('demo');
    show.innerHTML = joshua.remark()

}

btn.addEventListener('click', run)



