// type assertion

{
    let anything: any;

    anything = 'Next label web development';

    anything = 29;
    (anything as number)

    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `The converted value is ${convertedValue}`
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    console.log(kgToGram(100) as number) // I know it should be number then i fixed type using this 


    type CustomError = {
        message: string
    }

    try {
        console.log('HEllo world')
    } catch (error) {
        console.log((error as CustomError).message)
    }
}