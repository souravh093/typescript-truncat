
type Student = {
    name: string;
    age: number;
    gender: string;
    address: string;
    contactNum?: string;
    isMarried: boolean
}

const student: Student = {
    name: 'Sourave Halder',
    age: 25,
    gender: 'Male',
    contactNum: '01307420920',
    isMarried: false,
    address: 'Barista'
}

const student2: Student = {
    name: 'Rakib',
    age: 29,
    gender: 'Male',
    address: 'Dhaka',
    isMarried: true,
}

type UserName = string;
type isMarried = boolean;

const userName: UserName = "Hello World"

const isMarr: isMarried = false


// type alias in function
type Add = (num1: number, num2: number) => number
const add: Add = (num1, num2) => {
    return num1 + num2
}

