{
    // type alias
    type Student={
        name:string;
        age:number;
        gender:string;
        contactNo?:string;
        address:string
    }

    const student1:Student={
        name:'abu',
        age:254,
        gender:'male',
        contactNo:'01521436261',
        address:'dha'
    }
    
    const student2:Student={
        name:'bau',
        age:25,
        gender:'male',
        contactNo:'01521436260',
        address:'kha'
    }

    type UserName=string
    type IsAdmin=boolean
    const userName:UserName='kab'
    const isAdmin:IsAdmin=true

    // type alias for function

    type Add=(n1:number,n2:number)=>number
    const add:Add =(n1,n2)=>n1+n2




















}