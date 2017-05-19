'use strict';

function loan(){
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
  var missPayment = function(){
    var current = account.defaulted++;
    if(current >= account.defaultedToForeclose) {
      account.foreclosed = true;
    }
  };
  return {
    getBalance : function(){
      return balance;
    },
    receivePayment : function(amount) {
      if(amount < account.monthlyPayment) {
        missPayment();
      }
    },
    getMonthlyPayment : function(){
      return account.monthlyPayment;
    },
    isForeclosed : function(){
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
  var getFunds = function(){
    return account.funds;
  };
  var makePayment = function(){
    if(account.funds > loan.monthlyPayment){
      account.fund -= loan.monthlyPayment;
    } else{
      loan.receivePayment(account.funds);
    }
  };
  var payDay = function(){
    account.funds += account.monthlyIncome;
  };
  return {
    getFunds : getFunds,
    makePayment : makePayment,
    payDay : payDay
  };
}

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

stevesLoan = loan();
steve = borrower();