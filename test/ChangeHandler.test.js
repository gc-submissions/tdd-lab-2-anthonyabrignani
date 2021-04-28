const ChangeHandler = require("../src/js/ChangeHandler");
const quarter = 25;
const dime = 10;
const nickel = 5;
const penny = 1;

describe("ChangeHandler", function () {
  test("class is defined", function () {
    expect(ChangeHandler).toBeDefined();
  });

  test("cashTendered is 0", function () {
    const cash = new ChangeHandler();
    expect(cash.cashTendered).toEqual(0);
  });

  test("insertCoin - quarter is 25", function () {
    const cash = new ChangeHandler();
    cash.insertCoin(quarter);
    expect(cash.cashTendered).toEqual(25);
  });

  test("insertCoin - dime is 10", function () {
    const cash = new ChangeHandler();
    cash.insertCoin(dime);
    expect(cash.cashTendered).toEqual(10);
  });

  test("insertCoin - dime is 5", function () {
    const cash = new ChangeHandler();
    cash.insertCoin(nickel);
    expect(cash.cashTendered).toEqual(5);
  });

  test("insertCoin - penny is 1", function () {
    const cash = new ChangeHandler();
    cash.insertCoin(penny);
    expect(cash.cashTendered).toEqual(1);
  });

  test("insertCoin - multiple coins add to total", function () {
    const cash = new ChangeHandler();
    cash.insertCoin(quarter);
    cash.insertCoin(quarter);
    cash.insertCoin(dime);
    cash.insertCoin(nickel);
    cash.insertCoin(penny);
    expect(cash.cashTendered).toEqual(66);
  });

  test("isPaymentSufficient - true if tendered > amountDue", function () {
    const cash = new ChangeHandler(25);
    cash.insertCoin(quarter);
    cash.insertCoin(quarter);
    expect(cash.isPaymentSufficient()).toEqual(true);
  });

  test("isPaymentSufficient - false if tendered < amountDue", function () {
    const cash = new ChangeHandler(75);
    cash.insertCoin(quarter);
    cash.insertCoin(quarter);
    expect(cash.isPaymentSufficient()).toEqual(false);
  });

  test("isPaymentSufficient - true if tendered = amountDue", function () {
    const cash = new ChangeHandler(50);
    cash.insertCoin(quarter);
    cash.insertCoin(quarter);
    expect(cash.isPaymentSufficient()).toEqual(true);
  });

  test("giveChange - 32 change = quarter: 1, nickel: 1, penny: 2", function () {
    const cash = new ChangeHandler(18);
    cash.insertCoin(quarter);
    cash.insertCoin(quarter);
    expect(cash.giveChange()).toEqual().changer;
  });

});

