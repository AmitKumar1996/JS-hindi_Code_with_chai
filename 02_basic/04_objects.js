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

console.log(reguralUser.fullname.userFullnmae)