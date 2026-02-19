document.getElementById('pay-btn').addEventListener('click',function(){
    const BillPay=getValueFormInput('pay-bills');
    if(BillPay==='Select bill'){
        alert('Place Select a Bill to Pay')
        return;
    }
    const BillerAccountNumber=getValueFormInput('biller-account-number');
    if(BillerAccountNumber.length!=11){
        alert('Invalid Bill Account Number')
        return;
    }

    const AmountToPay=getValueFormInput('pay-amount');

    const currentBalance=getBalance('amount')
    console.log(currentBalance)

    const newBalance=currentBalance-Number(AmountToPay)
    console.log(newBalance)
    if(newBalance<0){
        alert('Invalid Amount')
        return;
    }
    const pin=getValueFormInput('pay-pin');
    if(pin==='1234'){
        alert('Pay Bill Successful');
        setBalance(newBalance);

         //transaction section add
        const history = document.getElementById('history-container');
        console.log(history)

        const newHistory = document.createElement("div");
        console.log(newHistory)

        newHistory.innerHTML = `
            <div class="bg-gray-100 p-5">
            <div class="text-2xl font-bold text-green-500">Pay Bill Successful </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Pay Bill :${BillPay}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Biller Account Number :${BillerAccountNumber}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Amount :${AmountToPay}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Date:${new Date()}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Current Balance :${newBalance}
            </div>
            </div>
        `;

        history.append(newHistory)
        console.log(history)
    }
    else{
        alert('Invalid Pin');
        return;
    }
    
})