export function sumArray (array) {
    let sum = 0
    array.forEach(item => {
        sum += item
    })

//    const sum = array.reduce((prev,next) => prev + next);
   return sum;
};
const array = [1,2,3]
console.log(sumArray(array))
