// // union type

// type FrontendDeveloper = 'fakeDeveloper' | 'JuniorDeveloper'
// type FullstackDeveloper = 'FrontendDeveloper' | 'ExpertDeveloper'

// type Developer = FrontendDeveloper | FullstackDeveloper


// const newDeveloper: FrontendDeveloper = 'fakeDeveloper'

// type User = {
//     name: string;
//     email: string;
//     gender: 'Male' | 'Female';
//     bloodGroup: 'A+' | 'AB+' | 'A-' | 'O+';
// }

// const user1: User = {
//     name: 'Sourve',
//     email: 'souraveh09@gmail.com',
//     gender: 'Male',
//     bloodGroup: 'O+'
// }


{
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}