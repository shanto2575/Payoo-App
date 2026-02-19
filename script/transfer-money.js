document.getElementById('transfer-money-btn').addEventListener('click',function(){

    const UserAccountNumber=getValueFormInput('transfer-money-number');
    if(UserAccountNumber.length!=11){
        alert('Invalid User Account Number')
    }
    const TransferAmount=getValueFormInput('transfer-amount');

    const CurrentBalance=getBalance()
    const newBalance=CurrentBalance-Number(TransferAmount)
    console.log(newBalance)
    if(newBalance<0){
        alert('Invalid Amount')
        return;
    }

    const pin=getValueFormInput('transfer-pin')
    if(pin==='1234'){
        alert('Transfer Money Successful')
        setBalance(newBalance);

        // transaction added
        const history=document.getElementById('history-container')
        const newHistory=document.createElement('div')

        newHistory.innerHTML=`
        <div class="bg-gray-100 p-5">
            <div class="text-2xl font-bold text-red-500">Transfer Money Successful </div> 
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Transfer Money Number :${UserAccountNumber}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Transfer Amount :${TransferAmount}
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
    }
    else{
        alert('Invalid Pin')
    }
})