const Button1 = document.getElementById("Button1")
const mortgage = document.getElementById("mortgage")
interestRate = 5.75 / 100

Button1.addEventListener("click", function(){
    try {
        let loan = window.prompt("Please enter the loan amount without commas")
        while (loan.includes(",")){
            loan = window.prompt("Please enter the loan amount WITHOUT commas")
        }
        loan = Number(loan)
        try {
            typeof Number(loan)
        } catch (error) {
            throw "error"
        }

        let percentage = window.prompt("Please enter the percentage of the loan that is the downpayment without %")
        while (percentage.includes("%") || percentage > 100){
            percentage = window.prompt("Please enter the percentage of the loan that is the downpayment WITHOUT %")
        }
        percentage = Number(percentage)
        downpayment = (percentage / 100) * loan
        let principal = loan - downpayment

        let term = window.confirm("Do you want a loan term of either Ok = 30 or Cancel = 15 years")
        let termYears
        if (term == true){
            termYears = 30
            console.log(termYears)
        
        } else {
            termYears = 15
            console.log(termYears)
        }

        let monthlyInterestRate = interestRate / 12
        let numberOfPayments = termYears * 12
        let monthly_payment = ((monthlyInterestRate * principal) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))).toFixed(2)
        let total_interest = (Number(monthly_payment * numberOfPayments) - principal).toFixed(2)
        let total_mortgage_amount = (Number(principal) + Number(total_interest)).toFixed(2)



        terms = document.createElement("p")
        terms.textContent = `You opted to pay for ${termYears} years`
        mortgage.appendChild(terms)

        Interest_Rate = document.createElement("p")
        Interest_Rate.textContent = `Your interest rate is ${interestRate*100}%`
        mortgage.appendChild(Interest_Rate)

        totalloanamount = document.createElement("p")
        totalloanamount.textContent = `Your mortgage is $${principal.toFixed(2)}`
        mortgage.appendChild(totalloanamount)

        totalInterest = document.createElement("p")
        totalInterest.textContent = `Your total interest is $${total_interest}`
        mortgage.appendChild(totalInterest)

        totalmortgageamount = document.createElement("p")
        totalmortgageamount.textContent = `Your total mortgage is $${total_mortgage_amount}`
        mortgage.appendChild(totalmortgageamount)

        let balance = Number(total_mortgage_amount).toFixed(2)
        for (let month = 1; month <= numberOfPayments; month++) {
            balance = (balance - Number(monthly_payment)).toFixed(2)
            let paymentinfo = document.createElement("p")
            paymentinfo.textContent = `Month ${month}, Payment = ${monthly_payment}, Remaining Balanace = $${balance}`
            mortgage.appendChild(paymentinfo)
            if (balance <= 0) {
                let zeroout = document.createElement("p")
                zeroout.textContent = "This is the Ending Amortization Calculator... "
                mortgage.appendChild(zeroout)
                break
            }
        }
    } catch (error) {
        window.alert("There seems to be an issue. Please reload the page and follow the designated format")
    }
})
