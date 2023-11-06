// reference Type ---> object
const user: {
    // company: 'Programming Hero'; // type ===> literal types
    readonly company: string; // fixed only the type
    firstName: string;
    middleName?: string; // type ==> optional type
    lastName: string;
    age: number;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    firstName: "Sourave",
    lastName: "halder",
    age: 29,
    isMarried: true
}

