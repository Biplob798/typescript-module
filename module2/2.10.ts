{
    // mapped type

    const arrayOfNumber:number[]=[1,2,3]
    // const arrayOfString:string[]=['1','2','3']

     const arrayOfString:string[]=arrayOfNumber.map((number)=>number.toString())

        console.log(arrayOfString);

    type AreaNumber={
        hight:number;
        width:number;
    }
    type Hight = AreaNumber['hight']//Lookup type
    // type AreaString={
    //     hight:String;
    //     width:String;
    // }


    // T=>{hight:string;width:number}
    type AreaString<T>={
        [key in keyof T]:T[key]
    }

    const area1:AreaString<{hight:string;width:number}>={
        hight:'100',
        width:50
    }







    // 
}