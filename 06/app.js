// var number=(Math.random() * 100);
// console.log(number);  // normal way


// Async Way of genrating number using 
const number1=CRYPTO.randomInt(0,1500,(err,num)=>{
    if(err){
        console.log('Error occuered!')
    }
    else{
        console.log(num);
    }
});