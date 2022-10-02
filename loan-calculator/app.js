document.getElementById('loan-form').addEventListener('submit',calculateResult)

function calculateResult(e) {
    showLoader();


    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment') 
    const totalInterest = document.getElementById('total-interest')
    // reset initial results
    monthlyPayment.value = ''
    totalPayment.value = ''
    totalInterest.value = ''

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1+calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
    }else {
        showError('Please check your numbers')
    }

    e.preventDefault();
}

function showError(error) {
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    setTimeout(function(){
        errorDiv.remove()
    },3000)
}

function showLoader() {
    const card = document.querySelector('.card');
    const result = document.getElementById('results');
    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'loading';
    const loaderImg = document.createElement('img');
    loaderImg.src = 'img/loading.gif';
    loaderDiv.appendChild(loaderImg);
    card.insertBefore(loaderDiv, result);
    result.style.display = 'none'
    setTimeout(function(){
       loaderDiv.remove(); 
       result.style.display = 'block'
    }, 1000);
}