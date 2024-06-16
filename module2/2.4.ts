{
    // generic with interface
    interface Developer<T,X=null>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        }
        smartWatch:T;
        bike?:X
    }

    type EmilabWatch={brand:string,model:string,display:string}



    const poorDeveloper:Developer<EmilabWatch>={
        name:'Persian',
        computer:{
            brand:'Asu',
            model:'123a',
            releaseYear:2024
        },
        smartWatch:{
            brand:'dell',
            model:'kw66',
            display:'old'
        }
    }


    interface AppleWatch{brand:string,model:string,ht:boolean,st:boolean}
    interface YamahaBike{
        model:string;
        engineCapacity:string
    }
    const richDeveloper:Developer<AppleWatch,YamahaBike>={
        name:'RichDev',
        computer:{
            brand:'del',
            model:'123a',
            releaseYear:2025
        },
        smartWatch:{
            brand:'app',
            model:'kw66',
            ht:true,
            st:true
           
        },
        bike:{
            model:'Yamaha',
            engineCapacity:'250'
        }
    }















    // 
}