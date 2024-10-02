function make_avg(array, size){

    let sum = 0;
    for(let i=0; i<size; i++){

        sum = sum + array[i];
    }
    let avg = sum/size; 

   return avg;

}
let numbers = [10,20,30,40,50];
let Asize = numbers.length;
let average = make_avg(numbers, Asize); 
console.log(average);
