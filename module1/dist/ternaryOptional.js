"use strict";
var _a, _b;
{
    const age = 22;
    if (age > 18) {
        console.log('Adult');
    }
    else {
        console.log('Not Adult');
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);
    // nullish coalescing operator
    //null => undefined => decision making
    const isAuthenticated = 0;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1, result2 });
    const user = {
        name: 'Sourave lal',
        address: {
            city: 'Dhaka',
            road: 'kali bazzer',
            presentAddress: 'dokla bazzer'
        }
    };
    console.log((_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No PermanentAddress');
}
