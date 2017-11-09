console.log('Ex 11 Solution');
/* Rolling Project: BankSystem
* Initialize a variable: currentBalance with the value: 1000
* prompt for the user secret pin code and how much he would
like to withdraw, and then print a nice message with the new 
balance.
* Check that the secret pin code is '0796', if not, 
tell the user its wrong and don’t let him withdraw
* Add feature: don’t let the user withdraw more than 
he has in the account
*/ 
var currentBalance = 1000
var pinCode = +prompt('pin code:');

if (pinCode !== 0796){
    console.log('wrong pin code')
} else {
    var withdraw = +prompt('How much would you like to withdraw?')
    console.log('balance: '+ (currentBalance-withdraw));}