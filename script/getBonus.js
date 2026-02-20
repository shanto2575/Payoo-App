
document.getElementById('get-bonus-btn').addEventListener('click', function () {

    //expire coupon
    const expireDate = new Date('2026-07-12');
    const today = new Date();
    if (today > expireDate) {
        alert('Coupon Expired');
        return;
    }

    const Bonus = 500;
    const BalanceValue = document.getElementById('amount')
    const Balance = BalanceValue.innerText;
    const newBalance = Bonus + Number(Balance)
    console.log(newBalance)

    const coupon = getValueFormInput('get-bonus-coupon');
    if (coupon === 'bonus2026') {
        alert('Get Bonus Successful');
        BalanceValue.innerText = newBalance;

        

        //transaction check
        const history = document.getElementById('history-container');
        console.log(history)

        const newHistory = document.createElement('div');
        console.log(newHistory)
        newHistory.innerHTML = `
            <div class="bg-gray-100 p-5">
            <div class="text-2xl font-bold text-green-500">Get Bonus Successful </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Coupon Code :${coupon}
            </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Get Bonus :${Bonus}
            </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Date :${new Date()}
            </div>
            <div class='p-3 border border-gray-400 m-2 rounded-3xl'>
            Current Balance :${newBalance}
            </div>
        `
        history.append(newHistory);
    }
    else {
        alert('Invalid Coupon Code');
        return;
    }

    

})