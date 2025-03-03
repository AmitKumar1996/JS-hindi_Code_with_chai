// What is differance b/w Singelton  Non Singelton Objects write one use case 
const tinderUser = new Object() // Singelton Objects

const tinderUser1 = {} // Non Singelton Objects

console.log(tinderUser);
console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(tinderUser1);


const reguralUser = {
    email: "some@gmail.com",
    fullname:{
        userFullnmae:{
        fullname:"Amit kumar",
        firstname:"Amit",
        latname: "kumar"


        }
    }
}

console.log(reguralUser.fullname.userFullnmae.firstname);
//console.log(reguralUser.fullname?.userFullnmae.firstname); // Explain this using example 

const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}

//const obj3= {obj1, obj2}
const obj3=Object.assign({},obj1, obj2)
console.log(obj3);