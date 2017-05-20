//go through steps again, we missed lines of code maybe.

'use strict';

function loan() {
  //private var
  var account = {
    borrowed : 550000,
    balance : 286000,
    monthlyPayment : 1700,
    defaulted : 0,
    defaultedToForeclose : 5,
    foreclosed : false
  };

  //private funct
  var missPayment = function() {
    account.defaulted++;
    if (account.defaulted >= account.defaultedToForeclose) {
      account.foreclosed = true;
    }
  };
  return {
    getBalance : function() {
      return account.balance;
    },
    receivePayment : function(amount) {
      if (amount < account.monthlyPayment) {
        missPayment();
      }
      account.balance -= amount;
    },
    getMonthlyPayment : function() {
      return account.monthlyPayment;
    },
    isForeclosed : function() {
      return account.foreclosed;
    }
  };
}

function borrower(loan) {
  //prV
  var account = {
    monthlyIncome : 1350,
    funds : 2800,
    loan : loan
  };

  //puM
  var getFunds = function() {
    return account.funds;
  };
  var makePayment = function() {
    if (account.funds > loan.getMonthlyPayment()) {
      account.funds -= loan.getMonthlyPayment();
      loan.receivePayment(loan.getMonthlyPayment());
    } else {
      loan.receivePayment(account.funds);
      account.funds = 0;
    }
  };
  var payDay = function() {
    account.funds += account.monthlyIncome;
  };
  var getLoanBalance = function() {
    return loan.getBalance();
  };
  var isForeclosed = function () {
    return loan.isForeclosed();
  };
  return {
    getFunds : getFunds,
    makePayment : makePayment,
    payDay : payDay,
    getLoanBalance : getLoanBalance,
    isForeclosed : isForeclosed
  };
}

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

stevesLoan = loan();
steve = borrower(stevesLoan);

while (!steve.isForeclosed()) {
  steve.payDay();
  steve.makePayment();
  month++;
  console.log("month",month,"balance",steve.getLoanBalance(), "funds", steve.getFunds());
  console.log(steve.isForeclosed());
  if (steve.getLoanBalance() <= 0) {
    break;
  }
}
monthsUntilEvicted = month;
