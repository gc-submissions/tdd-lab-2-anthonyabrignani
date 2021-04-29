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

  giveChange(change) {
    var changer = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    while (change >= 25) {
      changer.quarters++;
      change -= 25;
    }
    while (change >= 10) {
      changer.dimes++;
      change -= 10;
    }
    while (change >= 5) {
      changer.nickels++;
      change -= 5;
    }
    while (change >= 1) {
      changer.pennies++;
      change -= 1;
    }
    return changer;
  }
}

module.exports = ChangeHandler;
