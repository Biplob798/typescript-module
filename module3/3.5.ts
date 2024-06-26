{
  // Access Modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount:number){
        this._balance=this._balance+amount

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

  const goribManusherAccound = new BankAccount(111, "Mr.gorib", 123);
//   goribManusherAccound.id = 222;
//   goribManusherAccound.balance = 222;
     goribManusherAccound.addDeposit(30)
    const myBalance=  goribManusherAccound.getBalance()
    console.log(myBalance);

  //
}
