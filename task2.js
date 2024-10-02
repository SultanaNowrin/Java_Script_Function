function number(num){
    if (num % 2 === 0){

         return num/2; // when num is even
    }
    else{
         return num*2; // when num is odd

    }

}
let result = number(30);
console.log(result);