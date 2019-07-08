# Short Circuit Evaluation

Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.

```
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] > 10) {
    //   newArr.push(arr[i]);
    // }
    
    // arr[i] > 10 ? newArr.push(arr[i]) : null;
    
    arr[i] > 10 && newArr.push(arr[i]);
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // [ 12, 14, 80 ]
```