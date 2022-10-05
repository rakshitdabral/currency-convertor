const firstAmount = document.getElementById("firstAmount");
const secondAmount = document.getElementById("secondAmount");
const firstCurrency = document.getElementById("from");
const secondCurrency = document.getElementById("to");
const conversionText = document.getElementById("conversion");


const funcSwap= document.getElementById("swap");


function getData(){
    const currencyOne = firstCurrency.value;
    const currencyTwo = secondCurrency.value;
    url=`https://v6.exchangerate-api.com/v6/7738d58626e0e280f5d2f22f/latest/${currencyOne}`;
    fetch(url).then((response) =>{
        return response.json();
    })    
    .then((data)=>{
        const rate = data.conversion_rates[currencyTwo];
        secondAmount.value = (firstAmount.value * rate).toFixed(2);
        conversionText.innerHTML=`1 ${currencyOne} = ${rate} ${currencyTwo}`;
    })
}


function swap(){
    const temp= firstCurrency.value;
    firstCurrency.value =secondCurrency.value;
    secondCurrency.value = temp;
    getData();   
}



firstCurrency.addEventListener('change', getData);
firstAmount.addEventListener('input', getData);
secondCurrency.addEventListener('change', getData);
secondAmount.addEventListener('input', getData);
funcSwap.addEventListener('click',swap);


getData();