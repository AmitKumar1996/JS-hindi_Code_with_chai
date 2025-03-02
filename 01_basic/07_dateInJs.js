// JS Date object represent a single moment in time in a platform independent format.


let myDate  = new Date()
// console.log(myDate); // 
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2025, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2025, 0, 23,5,3);
console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("2025-03-02");
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("03-02-2025");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(".....................................................");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
    
})