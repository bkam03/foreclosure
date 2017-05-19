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

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

stevesLoan = loan();