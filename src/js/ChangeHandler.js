class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  insertCoin(type) {
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const penny = 1;
    let coin = type;
    if (coin === quarter) {
      this.cashTendered += quarter;
    }
    if (coin === dime) {
      this.cashTendered += dime;
    }
    if (coin === nickel) {
      this.cashTendered += nickel;
    }
    if (coin === penny) {
      this.cashTendered += penny;
    }
    return this.cashTendered;
  }

  isPaymentSufficient() {
    if (this.amountDue <= this.cashTendered) {
      return true;
    } else {
      return false;
    }
  }

  giveChange() {
    const changer = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
      if (this.amountDue >= 25) {
        changer.quarters++;
        this.amountDue - 25;
      }
      if (this.amountDue >= 10) {
        changer.dimes++;
        this.amountDue - 10;
      }
      if (this.amountDue >= 5) {
        changer.nickels++;
        this.amountDue - 5;
      }
      if (this.amountDue > 0) {
        changer.pennies++;
        this.amountDue - 1;
      }
    return changer;
  }
}

module.exports = ChangeHandler;
