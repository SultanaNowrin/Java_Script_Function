function count_zero(binaryString) {
    
    let count = 0;
    
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    
    return count;
}

let binaryStr = "10101010101";
let zeroCount = count_zero(binaryStr);
console.log(zeroCount);
