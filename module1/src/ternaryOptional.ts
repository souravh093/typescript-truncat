{
    const age: number = 22;

    if (age > 18) {
        console.log('Adult')
    } else {
        console.log('Not Adult')
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult'

    console.log(isAdult)


    // nullish coalescing operator

    //null => undefined => decision making

    const isAuthenticated = 0;

    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'

    console.log({ result1, result2 })


    // optional caning

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: 'Sourave lal',
        address: {
            city: 'Dhaka',
            road: 'kali bazzer',
            presentAddress: 'dokla bazzer'
        }
    }


    console.log(user?.address?.permanentAddress ?? 'No PermanentAddress')
}


