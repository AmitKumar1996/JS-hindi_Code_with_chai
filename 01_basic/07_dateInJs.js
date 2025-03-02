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
