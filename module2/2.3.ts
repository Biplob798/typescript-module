{
    // generic type

    const add=(x:number,y:number):number=>x+y

     add(3,4)

    type GenericArray<T>=Array<T>

    // const rollNumbers:number[]=[1,2,3];
    //  const rollNumbers:Array<number>=[1,2,3];
     const rollNumbers:GenericArray<number>=[1,2,3];

    // const mentors:string[]=['x','y','z']
    // const mentors:Array<string>=['x','y','z']
    const mentors:GenericArray<string>=['x','y','z']

    // const boolArray:boolean[]=[true,false,false]
    // const boolArray:Array<boolean>= 
    //  [true,false,false]
    const boolArray:GenericArray<boolean>= 
     [true,false,false]


    // generic with interface
     type User1={
        name:string;
        age:number
     }
     interface User2{
        name:string;
        age:number
     }
     const user:GenericArray<User1>=[
        {
            name:'abu',
            age:23
        },
        {
            name:'bu',
            age:25
        },
        {
            name:'cbu',
            age:63
        }
     ]

    //  Generic Tuple
     
    type GenericTuple<x,y>=[x,y]

     const manus:GenericTuple<string,string>=["mr.x","mrs.y"]

     type GenericBook<A,B>=[A,B]

    //  const book:[string,number]=['al-koran',12]
     const book:GenericBook<string,number>=['al-koran',12]

     const UserWithID:GenericTuple<number,{name:string,email:string}>=[123,{name:"avu",email:"a@gmail.com"}]
   








    // 
}