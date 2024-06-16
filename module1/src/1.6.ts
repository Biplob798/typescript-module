{// Learning Function
// Normal Function
// Arrow Function

function add(n1:number,n2:number):number{
    return n1+n2;
}
add(1,3)

const addArrow=(n1:number,n2:number):number=>n1+n2

// object --> function --> method

const poorUser={
    name:"a",
    balance:0,
    addBalance(balance:number):number{
        return this.balance +balance
    },
}

const arr:number[]=[1,2,4]
const newArray =arr.map((elem:number):number=>elem*elem)
}