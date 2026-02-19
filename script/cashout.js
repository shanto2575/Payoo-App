// document.getElementById('cashout-btn').addEventListener('click',function(){
//     const cashOutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashOutNumberInput.value;
//     console.log( 'Cashout Agent Number is :',cashoutNumber)

//     const cashoutAmountInput=document.getElementById('cashout-amount');
//     const cashoutAmount=cashoutAmountInput.value;
//     console.log('Cash Out Amount is :',cashoutAmount)
//     if(cashoutNumber.length!=11){
//         alert('Invalid Agent Number')
//         return;
//     }

//     //current balance
//     const balanceElement=document.getElementById('amount');
//     const balance=balanceElement.innerText;
//     console.log( 'Current Balance is : ',balance)

//     //new balance
//     const NewBalance=Number(balance)-Number(cashoutAmount)
//     console.log('New Balance is :',NewBalance)

//     if(NewBalance<0){
//         alert('invalid Amount');
//         return;
//     }

//     //pin verification
//     const cashoutPinInput=document.getElementById('cashout-pin');
//     const Pin=cashoutPinInput.value;
//     if(Pin==='1234'){
//         alert('cashout successful')
//         balanceElement.innerText=NewBalance;
//     }
//     else{
//         alert('invalid Pin')
//         return;
//     }
// })



// shortcut process

document.getElementById('cashout-btn').addEventListener('click', function () {
    const cashOutNumber = getValueFormInput('cashout-number')
    if (cashOutNumber.length != 11) {
        alert('Invalid Agent Number')
    }
    const cashOutAmount = getValueFormInput('cashout-amount')
    //current value
    const currentBalance = getBalance()

    //calculate newBalance
    const newBalance = currentBalance - Number(cashOutAmount);
    console.log(newBalance)
    if (newBalance < 0) {
        alert('Invalid Amount')
        return;
    }
    // pin
    const pin = getValueFormInput('cashout-pin');
    if (pin === '1234') {
        alert(`Cashout Successful 
            from Agent Number :${cashOutNumber},
            Cashout Amount :${cashOutAmount},
            at ${new Date()},
            Current Balance :${newBalance}
            `);
        setBalance(newBalance);

        //transaction section
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="bg-gray-100 p-5">
            <div class="text-2xl font-bold text-red-500">Cashout Successful </div> 
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Agent Number :${cashOutNumber}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Cashout Amount :${cashOutAmount}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Date:${new Date()}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Current Balance :${newBalance}
            </div>
            </div>
        `;

        history.append(newHistory);
    }
    else {
        alert('Invalid Pin')
        return;
    }
})