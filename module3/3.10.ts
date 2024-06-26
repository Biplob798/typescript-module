{
    // Encapsulation In OOP

    // 3.5 & 3.6 

    // privet kora 

    {
        // Getter Setter
        class BankAccount {
          public readonly id: number;
          public name: string;
          private _balance: number;
        //   protected _balance: number;
          constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
          }
          set deposit(amount:number){
            this._balance=this.balance+amount
          }
        //   addDeposit(amount:number){
        //       this._balance=this._balance+amount
      
        //   }
        // getter
        get balance(){
            return this._balance
        }
          getBalance(){
              return this._balance
          }
        }
      
         class StudentAccount extends 
        BankAccount{
          test(){
              this._balance
          }
        }
      
        const goribManusherAccound = new BankAccount(111, "Mr.gorib", 23);
      //   goribManusherAccound.id = 222;
        // goribManusherAccound.balance = 222;
        //    goribManusherAccound.addDeposit(30)///function call
        goribManusherAccound.deposit=50
        //   const myBalance=  goribManusherAccound.getBalance()//function call
        //   console.log(myBalance);
    
        const myBalance=goribManusherAccound.balance;//property call
        console.log(myBalance);

        // goribManusherAccound.
      
        //
      }
      

    // 
}