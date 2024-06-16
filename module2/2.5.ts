{
    // // Generic with function

    // const createArray=(param:string):string[]=>{
    //     return [param]
    // }


    // const createArrayWithGeneric=<T>(param:T):T[]=>{
    //     return [param]
    // }
    // const res1=createArray('Bangladesh')
    // const resGeneric=createArrayWithGeneric<boolean>(true)


    //     type User={id:number;name:string}
    // const resGenericObject=createArrayWithGeneric<User>({id:123,name:'Mr.Pasha'})



    // Generic with tuple


    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }
    const res1=createArrayWithTuple<string,number>('Bangladesh',1234)
    const resTuple=createArrayWithTuple<string,string>('india','srilanka')


        const addCourseToStudent=<T>(student:T)=>{
            const course='Next Level Web Development'
            return{
                ...student,
                course
            }
        }

        const student1=addCourseToStudent({name:'mr.X',email:'x@gmail.com',devType:'next level'})
        const student2=addCourseToStudent({name:'mr.Y',email:'y@gmail.com',hasWatch:'apple level'})







    // 
}