# Short Circuit Evaluation

Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.

```
function greaterThanTen(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
  	 // traditional if conditional
    // if (arr[i] > 10) {
    //   newArr.push(arr[i]);
    // }
    
    // ternary operator
    // arr[i] > 10 ? newArr.push(arr[i]) : null;
    
    // short circuit evaluation
    arr[i] > 10 && newArr.push(arr[i]);
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // [ 12, 14, 80 ]
```

Here's another example of  short circuit evaluation.

```
// the global Array
var array = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  array.forEach(function(element){
  
    // traditional if conditional
    // if (element % 2 === 1){
    //   newArray.push(element)
    // };
  
  	// short circuit evaluation
    element % 2 === 1 && newArray.push(element);
  });

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);
```

