const Button1 = document.getElementById("Button1")
const mortgage = document.getElementById("mortgage")

Button1.addEventListener("click", function(){
    let loan = window.prompt("Please enter the loan amount without commas")
    while (loan.includes(",")){
        loan = window.prompt("Please enter the loan amount WITHOUT commas")
    }
    loan = Number(loan)
    loan = loan.toFixed(2)

    let percentage = window.prompt("Please enter the percentage of the loan that is the downpayment without %")
    while (percentage.includes("%") || percentage > 100){
        percentage = window.prompt("Please enter the percentage of the loan that is the downpayment WITHOUT %")
    }
    percentage = Number(percentage)
    downpaymentp = percentage / 100
    let downpayment = downpaymentp * loan
    console.log(downpayment)

    let term = window.confirm("Do you want a loan term of either Ok = 30 or Cancel = 15 years")
    let termYears
    if (term == false){
        termYears = 30
        console.log(termYears)
        
    } else {
        termYears = 15
        console.log(termYears)
    }

    interestRate = 5.75 / 100

    let monthly_payment = (((interestRate / 12) * loan) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2)
    let total_interest = (monthly_payment * termYears * 12 ) - loan
    let total_mortgage_amount = loan + total_interest
    let total_loan_amount = loan + total_interest



    terms = document.createElement("mortgage")
    terms.textContent = `You opted to pay for ${termYears} years`
    mortgage.appendChild(terms)

    Interest_Rate = document.createElement("mortgage")
    Interest_Rate.textContent = `Your interest rate is ${interestRate.toFixed(2)}`
    mortgage.appendChild(Interest_Rate)

    totalloanamount = document.createElement("mortgage")
    totalloanamount.textContent = `Your mortgage is $${total_interest.toFixed(2)}`
    mortgage.appendChild(totalloanamount)

    totalInterest = document.createElement("mortgage")
    totalInterest.textContent = `Your total interest is ${total_interest.toFixed(2)}`
    mortgage.appendChild(totalInterest)

    totalmortgageamount = document.createElement("mortgage")
    totalmortgageamount.textContent = `Your total mortgage is $${total_mortgage_amount}`
    mortgage.appendChild(totalmortgageamount)

    let m
    let i
    let elements = {}
    while (i != termYears){
        let mName = "m" + m
        elements[mName = document.createElement("p")]
        elements[mName].textContent = `Pay: ${monthly_payment}`
        mortgage.appendChild(monthly_payment)
    }
})
