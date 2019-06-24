// Write a program will tell us at what position the capital letter B is at in the following sentence

// "Red Pill or Blue Pill?";

var pills = "Red Pill or Blue Pill";

**// for loop**

```
for (var i = 0; i < pills.length; i++){
    if (pills[i] == "B") {
        console.log("The letter B is at index", i);
    }
}
```

**// while loop**

```
var i = 0;
while ( pills[i] != "B") {
    i++;
}
console.log("The letter B is at index", i);
```

**// do loop**

```
i = 0;
do {
    i++;
} while ( pills[i] != "B");
console.log("The letter B is at index", i);
```

**// forEach**

// notice how the string pills must be converted into an array or the program will crash.

```
var pills = pills.split('');

pills.forEach((pill, i) => pills[i] == "B" ? console.log("The letter B is at index", i) : null);
```
