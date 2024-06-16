{

//  spread operator
//  rest
//  destructuring

// learn spread operator

const bros1:string[]=['a','b']
const bros2:string[]=['c','d']

bros1.push(...bros2)

const mentor1 ={
    typescript:'a',
    redux:'b',
    dbms:'c',
}
const mentor2 ={
    prisma:'d',
    next:'e',
    cloud:'f',
}
const mentorList={
    ...mentor1,
    ...mentor2
}

// learn rest operator

const greetFriends=(...friends:string[])=>{
    // console.log(`hi ${f1} ${f2} ${f3}`);
    friends.forEach((friend:string)=>console.log(`hi ${friend}`))
}
greetFriends('a','b','c')













}







