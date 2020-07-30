const assert = require("assert")
// const readline = require("readline")
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

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

// Tests for your Bank Account App:
// 1. Should create Bank account: account number, name, transactions
// 2. Should create Transaction: is date defined, payee, amount
// 3. Should deposit correctly
// 4. Should deduct/charge correctly
// 5. Should return correct balance
// 6. Should prevent overdraft
// 7. Should not allow negative deposit
// 8. Should track multiple deposits and return accurate balance
// 9. Also, 8. should track multiple charges and return accurate balance]
// DONE
if (typeof describe === "function") {
  describe("Account", function () {
    it("Should create Bank account: account number, name, transactions", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      assert.equal(account1.accountNumber, "00001")
      assert.equal(account1.owner, "Dude Mcgee")
      assert.equal(account1.transactions.length, 0)
    })
    it("Should deposit correctly", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      account1.deposit(50, "Target")
      assert.equal(account1.transactions[0].amount, 50)
      assert.equal(account1.transactions[0].payee, "Target")
      account1.deposit(5000, "Walmart")
      assert.equal(account1.transactions[1].amount, 5000)
      assert.equal(account1.transactions[1].payee, "Walmart")
    })
    it("Should deduct/charge correctly", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      account1.deposit(50, "Target")
      account1.charge(45, "Steve")
      assert.equal(account1.balance(), 5)
    })
    it("Should prevent overdraft", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      account1.deposit(50, "Target")
      // eslint-disable-next-line prettier/prettier
      assert.equal(account1.charge(55, "BOB"), false)
    })
    it("Should not allow negative deposit", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      assert.equal(account1.deposit(-50, "Target"), false)
    })
    it("Should return correct balance", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      account1.deposit(50, "Target")
      assert.equal(account1.balance(), 50)
    })
    it("Should track multiple deposits, charges, and return accurate balance", function () {
      const account1 = new Account("00001", "Dude Mcgee")
      account1.deposit(50, "Tooth Fairy")
      account1.deposit(330, "Father Mcgee")
      account1.deposit(200, "Syntical Sugar Daddy")
      account1.charge(25, "Steve")
      account1.charge(200, "Snoop Dog")
      assert.equal(account1.balance(), 355)
    })
  })
  describe("Transactions", function () {
    it("Should create Transaction: is date defined, payee, amount", function () {
      const tran1 = new Transaction(50, "Dude Mcgee")
      assert.equal(tran1.amount, 50)
      assert.equal(tran1.payee, "Dude Mcgee")
      assert.notEqual(tran1.date, undefined)
      assert.notEqual(tran1.date, null)
    })
  })
}
