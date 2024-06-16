{
    // interface type

    type User1={
        name:string;
        age:number;
    };

    type UserWithRole1=User1&{role:string}

    interface User2{
        name:string;
        age:number;
    }


    interface UserWithRole2 extends User2{role:string}


    const user1:UserWithRole1={
        name:"abu",
        age:23,
        role:"admin"

    }

  

    
    const user2:UserWithRole2={
        name:"abu",
        age:23,
        role:"admin"
    }


    // js--->array for interface

    type Roll1=number[];

    interface Roll2{
        [index:number]:number
    }

    const rollNumber1:Roll1=[1,4,5]
    const rollNumber2:Roll2=[1,4,5]


// function for interface

    type Add1=(num1:number,num2:number)=>number
    interface Add2{
        (num1:number,num2:number):number
    }


    const add1:Add1=(num1,num2)=>num1+num2
    const add2:Add2=(num1,num2)=>num1+num2



    // 
}