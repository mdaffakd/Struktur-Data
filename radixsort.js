function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        
        for (let num of nums) {
            const digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        
        nums = [].concat(...digitBuckets);
    }
    
    return nums;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Array sebelum diurutkan:", array);
const sortedArray = radixSort(array);
console.log("Array setelah diurutkan:", sortedArray);