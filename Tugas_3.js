const array1 = [10, 11, 13];
const array2 = [10, 12, 13, 14, 15];

const similarities = array1.filter(element => array2.includes(element));

console.log(similarities);