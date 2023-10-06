import React from 'react';
import Investment from "./Investment";

const InvestmentsList = (props) => {

    return (
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>

            {props.yearlyData.length === 0 ? (
                <tr>
                    <td>No data found</td>
                </tr>
            ) : (
                props.yearlyData.map((investment) => (
                    <Investment key={investment.year}
                                year={investment.year}
                                totalInterest={investment.totalInterest}
                                savingsEndOfYear={investment.savingsEndOfYear}
                                yearlyInterest={investment.yearlyInterest}
                                yearlyContribution={investment.yearlyContribution}
                    />
                ))
            )}

            </tbody>
        </table>
    )
};

export default InvestmentsList;