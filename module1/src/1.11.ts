{
    // ternary operator|| optional chaining || nullish coalescing

    const age:number= 13;
    if(age>=18){
        console.log('adult');
    }else{
        console.log('No adult');
    }

    const isAdult = age>=18?'adult':'not adult'
    console.log({isAdult});
    // nullish coalescing--->null & undefined
    // const isAuthenticated=null;
    const isAuthenticated=undefined;
    const result1 = isAuthenticated??'guest'
    const result2=isAuthenticated?isAuthenticated:'guest'
    console.log(result1);


    type User={
        name:string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string
        }
    }
    const user:User={
        name:"abu",
        address:{
            city:"dha",
            road:"120/23a",
            presentAddress:"dha"
        }
    }

    const permanentAddress=user?.address.permanentAddress??"No permanentAddress";
    console.log({permanentAddress});
    


















    // 
}