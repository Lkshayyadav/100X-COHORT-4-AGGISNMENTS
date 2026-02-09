// Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

let quantity = 10;
let price = 10;
let amount = quantity*price;
let discoutAmount = amount * 10 /100;

let discout  = amount - discoutAmount;


console.log("Total amount = ", amount);
console.log("Discount on item = ", discoutAmount);
console.log("Amount after discount =", discout);