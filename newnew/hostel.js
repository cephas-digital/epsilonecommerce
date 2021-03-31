class Hostel{
    constructor(hName, hLoc, hType, hColor  ){
        this.name= hName
        this.loc = hLoc
        this.type = hType
        this.color=hColor
    }
    
    
    info(){
    return `my hostel is ${this.name} in ${this.loc} 
    and it is ${this.type} which is ${this.color} in color`
    }
    
    }
    export {Hostel}