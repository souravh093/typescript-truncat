{
    // create dynamic type
    type GenericArray<T> = Array<T>


    // const rollNumber: number[] = [5, 7, 8];

    // const rollNumber: Array<number> = [5, 7, 8]
    const rollNumber: GenericArray<number> = [5, 7, 8]

    // const mentors: string[] = ['Mr: Hello', "Mr: Hollaien"];
    // const mentors: Array<string> = ['Mr: Hello', "Mr: Hollaien"];
    const mentors: GenericArray<string> = ['Mr: Hello', "Mr: Hollaien"];

    // const booleanArray: Array<boolean> = [true, false, true, true]
    const booleanArray: GenericArray<boolean> = [true, false, true, true]


    // dynamic type generator
    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "Sourave halder",
            age: 22
        },
        {
            name: 'Jhankar Mahbub',
            age: 39
        }
    ]


    const add = (x: number, y: number) => x + y;

    console.log(add(5, 7))
}