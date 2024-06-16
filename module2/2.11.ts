{
    // Utility type

    // pick

    type  Person={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

      // pick
    type Name= Pick<Person,'name'>
    type NameAge= Pick<Person,'name'|'age'>

    // Omit

    type ContactInfo=Omit<Person,'name'|'age'>

    // Required

    type PersonRequired=Required<Person>

    // Partial/optional
    type PersonPartial=Partial<Person>

    // ReadOnly

    type PersonReadOnly=Readonly<Person>
    const person1:PersonReadOnly=
    {
        name:'x',
        age:12,
        contactNo:'01521'
    }
    // person1.name='z'

    // Record type

    // type MyObj={
    //     a:string;
    //     b:string;
    // }
    type MyObj=Record<string,string>
    const EmptyObj:Record<string,unknown>={}
    const obj1:MyObj={
        a:'dd',
        b:'dd',
        c:'dd',
        d:'ss'
    }


















    // 
}