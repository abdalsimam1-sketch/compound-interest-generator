function generate(){
    const pAmountInput=document.getElementById('pAmount');
    const iRateInput=document.getElementById('iRate');
    const yearsInput=document.getElementById('years');
    const resultSpan=document.getElementById('result');



    let pAmount=Number(pAmountInput.value);
    let iRate= Number(iRateInput.value);
    let years= Number(yearsInput.value  ) ;     
    let total=Number( pAmount * Math.pow((1 + iRate/100), years));
    resultSpan.textContent= "$"+total;

}