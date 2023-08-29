class BankAccount {
  static bankName = 'Bank'
  constructor(private accountNumber: string, private balance: number) {
  }
  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`)
  }
  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log(`Insufficient funds in account ${this.accountNumber}`);
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`)
  }
  introduce() {
    console.log(`${this.accountNumber}: ${this.balance}`)
  }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500);


setTimeout(account1.introduce, 0)
