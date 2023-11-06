"use strict";
{
    const intersection = () => {
        return Math.random() >= 0.5 ? "True" : "False";
    };
    const result = intersection();
    console.log(result);
    const noReturn = () => {
        console.log("Hello world");
    };
    noReturn();
    // nothing to return this function then use void 
    const noReturn2 = () => {
        console.log("Hello world");
    };
    noReturn2();
    // explicit return types
    function trueOrFalse(value) {
        if (value) {
            return true;
        }
        return false;
    }
    console.log(trueOrFalse(false));
    // Learning function
    // normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    // console.log(add(2, '5')) // not to be string/boolean when you spice the type like number
    console.log(add(2, 4));
    const addArrow = (num1, num2) => num1 + num2;
    console.log(addArrow(9, 7));
    // object ===> function ==> method
    const poorUser = {
        name: 'sourave',
        balance: 0,
        addBalance(balance) {
            return `My new balance is ${this.balance + balance}`;
        }
    };
    const arr = [1, 3, 6];
    const newArray = arr.map((element) => element * element);
    console.log(newArray);
}
