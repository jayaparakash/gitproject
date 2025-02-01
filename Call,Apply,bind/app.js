// Call/Apply/Bind

// blabla



let driver1 ={
    name:'kondlarao',
    age:'30',
    loc:'hyd',
    car:'benz',
  
}
 
let driver2 ={
    name:'santhi',
    age:'31',
    loc:'hyd',
    car:'vovlo',

}

 

let driver3 ={
    name:'basha',
    age:'30',
    loc:'hyd',
    car:'audio'
}

let driver4 ={
    name:'kondlarao',
    age:'30',
    loc:'hyd',
    car:'ambassdor'
}


 function blabla(passanger,greets) {
      console.log(`Hii ${passanger} good ${greets} your partner is ${this.name} drivingCar ${this.car} to ${this.loc} `);
      ;
}

// let person1 = blabla.call(driver1,'lakshman','morning')

// let person2 = blabla.call(driver1,'rajesh','morning')

// console.log(person1,person2);


///bind

let newPassanger = blabla.bind(driver3)
newPassanger('jp','morning')
newPassanger('rajesh','morning')
newPassanger('surya','morning')

