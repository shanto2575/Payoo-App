
document.getElementById('add-money-btn').addEventListener('click', function () {

    const bankAccount = getValueFormInput('add-money-bank')
    if (bankAccount == 'Select bank') {
        alert('places select a bank');
        return;
    }

    const accountNumber = getValueFormInput('add-money-number')
    if (accountNumber.length != 11) {
        alert('Invalid Account Number')
        return;
    }

    const amount = getValueFormInput('add-money-amount')
    const newAmount = getBalance() + Number(amount);

    const pin = getValueFormInput('add-money-pin')
    if (pin === '1234') {
        alert(`Add Money Successful
        from ${bankAccount}
        at ${new Date()} 
        current Balance : ${newAmount}`)
        setBalance(newAmount);

        //transaction section add
        const history = document.getElementById('history-container');
        console.log(history)

        const newHistory = document.createElement("div");
        console.log(newHistory)

        newHistory.innerHTML = `
            <div class="bg-gray-100 p-5">
            <div class="text-2xl font-bold text-green-500">Money Add Successful </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Bank :${bankAccount}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Bank Account Number :${accountNumber}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Amount :${amount}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Date:${new Date()}
            </div>
            <div class="p-2 border border-gray-400 m-2 rounded-3xl">
            Current Balance :${newAmount}
            </div>
            </div>
        `;

        history.append(newHistory)
        console.log(history)
    }
    else {
        alert('Invalid Pin')
        return;
    }
});