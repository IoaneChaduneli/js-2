// დავალაბე 1 (პირველი მიდგომა)
let =[2,-9,5,11,30,100,-8,-11,-4,5,-6,8];
let sum=0;
for (let i=0; i<numbers.length;i++){
    if (numbers[i]>0){
        sum+=numbers[i];
    }  
}
console.log(sum);

// (მეორე მიდგომა)
const sumPositive=(positive)=>{
    let sum=0;
    for (let i=0; i<positive.length; i++){
        if(positive[i]>0){
            sum+=positive[i]
        }
    }
    return sum;
};
const result=sumPositive ([2,-9,5,11,30,100,-8,-11,-4,5,-6,8]);
console.log(result);

// ფუნქციები
function positiveSum(...numbers) {
    let number=0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > 0) {
            number+=element
        }
    }
    return number
}
console.log(positiveSum(2,-9,5,11,30,100,-8,-11,-4,5,-6,8));

// დავალება 2
function sum(...numbers) {
    let sum=0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sum+=element;
        
    }
    return sum
}
console.log(sum(10, 50, 6, 7, 8, 11, 6, 3, 9));

// დავალება 3
let user={
    firstname:'giorgi',
    lastname:'saakadze',
    age:32,
    isloggedin:true
}
function NAL(name, lastname){
    if (user.isloggedin===true) {
        return name + ' ' + lastname
    }
}
console.log(NAL(user.firstname, user.lastname));

// დავალება 4
function highestnumber(...highest) {
    let number=0;
    for (const item of highest) {
        if (number < item) {
            number=item
        }
    }
    return number
}
console.log(highestnumber(100, 20, 10000, 5, 10, 56, 76, 8888, 6667));

// დავალება 5
let numbers= [1,2,3,10,34,5,7,87];
for(const item of numbers){
    // if (10>item >0) {
    //     console.log(item);
    // }
    // or
    if (item>0 && item<10) {
        console.log(item);
    }
}

// დავალება 6

let integer=[1,2,3,4,5,6,7,8,9,10];
for (const i of integer) {
    if (integer [i]===5) {
        console.log(integer[i]);
        break;
    }
}

