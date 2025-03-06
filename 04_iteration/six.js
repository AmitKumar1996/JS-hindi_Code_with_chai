const coding =["js", "ruby", "java", "python","cpp"]

const values =coding.forEach((item) => {
    console.log(item);
    return item
    
});
console.log(values);
console.log(typeof values)

const myNums =[1,2,3,4,5,6,7,8,9,10]

const values1=myNums.filter((nums)=> nums>4);
console.log(values1);
console.log(typeof values1);


// what is Explict return
const values2=myNums.filter((nums)=>{
  return  nums>4
});
console.log(values2);
console.log(typeof values2)

