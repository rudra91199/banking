const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balance = document.getElementById('balance');
const totalWithdraw= document.getElementById('total-withdraw');
const totalDeposit= document.getElementById('total-deposit');
depositAmount.defaultValue = 0

document.getElementById('deposit').addEventListener('click', function () {
    newDepositValue = parseFloat(depositAmount.value);
    balanceValue = parseFloat(balance.innerText);
    prevDepositValue = parseFloat(totalDeposit.innerText);

    totalDepositValue = prevDepositValue + newDepositValue;
   
    totalDeposit.innerText = totalDepositValue;

    newBalanceValue = balanceValue + newDepositValue;
    balance.innerText = newBalanceValue;
    depositAmount.value = "0";
})

document.getElementById('withdraw').addEventListener('click', function () {
    newWithdrawValue = parseFloat(withdrawAmount.value);
    prevWithdrawValue = parseFloat(totalWithdraw.innerText);
    balanceValue = parseFloat(balance.innerText);

    if ((balanceValue - newWithdrawValue) >= 0) {       
        totalWithdrawValue = prevWithdrawValue + newWithdrawValue;
        totalWithdraw.innerText = totalWithdrawValue;
        newBalanceValue = balanceValue - newWithdrawValue;
        balance.innerText = newBalanceValue;
    }

    else {
        withdrawError = document.createElement('p');
        withdrawError.innerText = "You don't have Sufficient Balance"
        withdrawError.style.color = '#ffc300';
        withdrawError.style.fontSize = '0.5em';
        withdrawError.style.marginTop = '5px';
        document.getElementById('withdraw-container').appendChild(withdrawError); 
    }

})

document.getElementById('withdraw').addEventListener('blur', function () {
    withdrawError.style.display = 'none';
 })


