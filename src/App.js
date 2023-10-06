import React, { useState } from 'react';

import Header from './components/Header';
import InvestmentForm from "./components/InvestmentForm";
import InvestmentsList from "./components/InvestmentsList";

function App() {
    const [yearlyInvestmentData, setYearlyInvestmentData] = useState([]);

    const calculateHandler = (userInput) => {
        const yearlyData = []; // per-year results

        let currentSavings = +userInput.savings;
        const yearlyContribution = +userInput.yearlySavings;
        const expectedReturn = +userInput.expectedInterest / 100;
        const duration = +userInput.investmentDuration;

        // The below code calculates yearly results (total savings, interest etc)
        let totalInterest = 0;
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalInterest +=yearlyInterest;

            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                totalInterest: totalInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        setYearlyInvestmentData(yearlyData);
    };

    return (
        <div>
          <Header />

          <InvestmentForm onSaveInvestmentData={calculateHandler} />

          <InvestmentsList yearlyData={yearlyInvestmentData} />
        </div>
    );
}

export default App;
