let num = [12,34,56,78,90];
console.log(num);
let b = num.toString(); //toString method
console.log(b);
let c = num.join(":"); // join method
console.log(c,typeof c);
let r =  num.pop(); // pop method ; changes original array
console.log(r);
let s =  num.push(10); // push method ; changes original array
console.log(num);
let t= num.shift(); // shift method
console.log(t,num);
let x= num.unshift(123); // unshift method
console.log(num);