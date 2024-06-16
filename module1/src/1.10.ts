{
// union type

// type FrontendDeveloper= 'Normal'|'regular'
// type FullstackDeveloper= 'FrontendDeveloper'|'expertDeveloper'
// type Developer=FrontendDeveloper|FullstackDeveloper

// const newDeveloper:FrontendDeveloper='Normal'

// type User={
//         name:string;
//         email:string;
//         age:number;
//         gender:'male'|'female';
//         bloodGroup:'b+'|'a-'|'ab';
       
// }

// const user1:User={
//     name:'a',
//     email:'a@gmail.com',
//     age:12,
//     gender:'male',
//     bloodGroup:'b+'
// }


type FrontendDeveloper={
    skill:string[];
    designation1:'Frontend Developer'
}
type BackendDeveloper={
    skill:string[];
    designation2:'Backend Developer'
}


type FullstackDeveloper= FrontendDeveloper & BackendDeveloper


const fullstackDeveloper:FullstackDeveloper={
skill:['html','css'],
designation1:'Frontend Developer',
 designation2:'Backend Developer'
}








}