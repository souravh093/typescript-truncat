{
    const intersection = (): string => {
        return Math.random() >= 0.5 ? "True" : "False"
    }

    const result = intersection()

    console.log(result)


    const noReturn = (): any => {
        console.log("Hello world")
    }
    noReturn()


    // nothing to return this function then use void 
    const noReturn2 = (): void => {
        console.log("Hello world")
    }
    noReturn2()

    // explicit return types
    function trueOrFalse(value: boolean):
        boolean {
        if (value) {
            return true
        }

        return false
    }

    console.log(trueOrFalse(false))


    // Learning function

    // normal function
    function add(num1: number, num2: number) {
        return num1 + num2;
    }

    // console.log(add(2, '5')) // not to be string/boolean when you spice the type like number
    console.log(add(2, 4))


    const addArrow = (num1: number, num2: number): number => num1 + num2;

    console.log(addArrow(9, 7))


    // object ===> function ==> method

    const poorUser = {
        name: 'sourave',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is ${this.balance + balance}`
        }
    }

    const arr: number[] = [1, 3, 6];

    const newArray = arr.map((element: number): number => element * element)

    console.log(newArray)

}