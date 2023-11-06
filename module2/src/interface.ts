{
    type User1 = {
        name: string;
        age: number;
    }

    // one type we include another type
    type UserWithRole = User1 & { 
        role: string 
    }

    const user3: UserWithRole = {
        name: 'Kalki',
        age: 22,
        role: 'Developer'
    }

    interface User2 {
        name: string
        age: number;
    }

    interface UserWithRole2 extends User2 {
        Role: string
    }

    const user1: User1 = {
        name: "Hello",
        age: 23
    }

    const user2: UserWithRole2 = {
        name: "Hello",
        age: 23,
        Role: "UI/UX"
    }



}