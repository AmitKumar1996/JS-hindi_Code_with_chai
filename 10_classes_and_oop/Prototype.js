// let myName = "Amit         "
// let mychannel = "Chai "

// console.log( myName.truelength )



let myHeros = [ "thor", "spiderman" ]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function ()
    {
        console.log( `Spidy power is ${ this.spiderman }` );

    }
}

Object.prototype.hitesh = function ()
{
    console.log( `hitesh is present in all objects` );

}

Array.prototype.heyHitesh = function ()
{
    console.log( `hitesh says Hello` );

}

heroPower.hitesh()

myHeros.hitesh()

//heroPower.heyHitesh()


// Inheritance


const USer = {
    name: "Amit",
    email: "amit@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf( TeachingSupport, Teacher )


let anotherUserName = "chaiAurCode       "

String.prototype.trueLength = function ()
{
    // console.log(`${this}`);

    // console.log( `${ this.name }` );
    console.log( `True length is: ${ this.trim().length }` );


}

anotherUserName.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()