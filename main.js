class Transaction {
  constructor(amount, payee) {
    this.date = new Date()
    this.amount = amount
    this.payee = payee
  }
}
class Account {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }

  balance() {
    let balance = 0
    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].amount
    }
    return balance
  }

  deposit(amt, payee) {
    if (amt > 0) {
      this.transactions.push(new Transaction(amt, payee))
    }
    return false
  }

  charge(amt, payee) {
    if (this.balance() - amt < 0) {
      return false
    }
    return this.transactions.push(new Transaction(-amt, payee))
  }
}

module.exports = { Transaction, Account }
