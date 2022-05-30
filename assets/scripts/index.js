let btn = document.getElementById('btn-el')
let billEl = document.querySelector('#bill')
let percentEl = document.getElementById('percent')
let tipAmount = document.getElementById('tip-amount')
let total =document.getElementById('total')
let dangerEl = document.getElementById('danger')
let amount;
let sum;
console.log(percentEl)
btn.addEventListener('click', ( ) => {
    let bill = billEl.value
    let pc = percentEl.value
    amount = (bill *  pc) / 100
    console.log(amount)
    tipAmount.value = amount
    sum = amount + parseInt(bill)
    total.value = sum
    console.log(sum)
})

percentEl.addEventListener('keypress', ()=>{
    if(isNaN(billEl.value) || isNaN(percentEl.value)){
        btn.classList.remove('active')
    }else{
        btn.classList.add('active')
    }
})

dangerEl.addEventListener('click', () => {
    billEl.value = ''
    percentEl.value = ''
    tipAmount.value = ''
    total.value = ''
    btn.classList.remove('active')
}) 