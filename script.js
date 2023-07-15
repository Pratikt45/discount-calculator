


    const bill = document.querySelector('#bill');
    const discount = document.querySelector('#discount');
    const calculator= document.querySelector('#calculator');
    const total = document.querySelector('#total');


    calculator.addEventListener('click', () => {
    console.log('inside event lisetner');
    const billValue = bill.value;
    const discountValue = discount.value;
    console.log(billValue); console.log(discountValue);

    const discountAmount = billValue - (billValue*discountValue) / 100 ;
    console.log(discountAmount);
    total.innerHTML = `Total amount to pay is: ${discountAmount}`;
    })