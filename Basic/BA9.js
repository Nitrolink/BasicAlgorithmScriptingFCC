function findElement(arr, func) {
    let num = 0;
  
    for (let val of arr) {
        num = val;
        if (func(num)) {
            return num;
        }
    }
  
    return undefined;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);