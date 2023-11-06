"use strict";
// type assertion
{
    let anything;
    anything = 'Next label web development';
    anything = 29;
    anything;
    const kgToGram = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    console.log(kgToGram('100'));
}
