{
    // 
    // nullable type/unknown type

    const searchName=(value:string|null)=>{
        if(value){
            console.log('searching');
        }else{
            console.log('There is nothing to searching');
        }
    }
    searchName(null)

    // unknown type  typeof

    const getSpeedMeterPerSecond=(value:unknown)=>{
        if(typeof value==='number'){
            const convertedSpeed=(value*1000)/3600
            console.log(`The speed is ${convertedSpeed}ms^-1`);
        }
       else if(typeof value==='string'){
            const [result,unit]=value.split(' ')
            const convertedSpeed=(parseFloat(result)*1000)/3600
            console.log(`The speed is ${convertedSpeed}ms^-1`);
            console.log(result);

        }
        else{
            console.log('wrong input');
        }
    }
    // getSpeedMeterPerSecond("1000 kmh^-1")
    getSpeedMeterPerSecond(23)


    // never type

    const throwError=(message:string):never=>{
        throw new Error(message)
    }
    throwError('problem')
    

















    // 
}