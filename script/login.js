document.getElementById('login-btn').addEventListener('click',function(){
    const inputNumber=document.getElementById('inputNumber')
    const contactNumber=inputNumber.value;
    console.log(contactNumber)

    // pin
    const inputPin=document.getElementById('inputPin');
    const pin=inputPin.value;
    console.log(pin)

    if(contactNumber=='01751389425' && pin=='1234'){
        alert('login Successful')
        window.location.assign('./home.html')
    }
    else{
        alert('login Failed');
        return;
    }
})