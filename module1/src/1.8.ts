{
// destructuring
// object destructuring

const user={
    id:123,
    name:{
        firstName:'Md',
        middleName:'Biplob',
        lastName:'Islam',
    },
    contact:'01521436261',
    address:'Dhaka'
}

const {contact,name:{middleName:midName}}=user;

// array destructuring

const myFriends=['abu','babu','cab']
const [a,b,c,...rest ]=myFriends









}