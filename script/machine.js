//machine > input
function getValueFormInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value)
    return value;
}

//machine > balance
function getBalance(value){
    const balanceElement = document.getElementById('amount');
    const balance=balanceElement.innerText;
    return Number(balance)
}

//machine>set balance
function setBalance(value){
    const balanceElement=document.getElementById('amount');
    balanceElement.innerText=value;
}

//machine id> hide all> show id

function showId(id){
    const addmoney=document.getElementById('add-money');
    const cashout=document.getElementById('cashout');
    const history=document.getElementById('history')
    const transferMoney=document.getElementById('transfer-Money')
    const PayBill=document.getElementById('pay-bill')

    addmoney.classList.add('hidden')
    cashout.classList.add('hidden')
    history.classList.add('hidden')
    transferMoney.classList.add('hidden')
    PayBill.classList.add('hidden')

    const select=document.getElementById(id);
    select.classList.remove('hidden')
}