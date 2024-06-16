{
    // Constraints

    const addCourseToStudent=<T extends {id:number;name:string;email:string}>(student:T)=>{
        const course='Next Level Web Development'
        return{
            ...student,
            course
        }
    }
    const           
     student3=addCourseToStudent({id:121,name:'g',email:'g@gmail.com'})

    const student1=addCourseToStudent <{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:122,
        name:'mr.X',
        email:'x@gmail.com',
        devType:'next level'})
    const student2=addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({
        id:22,
        name:'mr.Y',
        email:'y@gmail.com',
        hasWatch:'apple level'
    })


















    // 
}