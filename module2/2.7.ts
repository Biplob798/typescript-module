{
    // generic constrain with keyof operator
    type Vehicle={
        bike:string;
        car:string;
        ship:string;
    }
    type Owner = 'bike'|'car'|'ship';//manually
    type Owner2= keyof Vehicle


    const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }
     const user={
        name:'pars',
        age:36,
        address:'dha',
    }
    const result1 =getPropertyValue(user,'name')







   
    // user['name']
    // obj[key]









    // 
}