const person = {
    id: 101,
    name: {
        firstName: 'Sourave',
        middleName: 'Chandra',
        lastName: 'Halder'
    },
    contactNo: '01307628955',
    address: 'Barishal'
}


{const { contactNo, name: { middleName } } = person;


// array destructuring
const myFriend = ['Rana', 'Ratul', 'Rakib', 'Riaj', 'Diva']

const [, , bestFriend, ...rest] = myFriend;

console.log(rest);}





