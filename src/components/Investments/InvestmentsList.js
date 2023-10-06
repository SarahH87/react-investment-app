import React from 'react';
import Investment from "./Investment";
import styles from './investments.module.css';

const InvestmentsList = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <table className={styles.result}>
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
                                totalInterest={formatter.format(investment.totalInterest)}
                                savingsEndOfYear={formatter.format(investment.savingsEndOfYear)}
                                yearlyInterest={formatter.format(investment.yearlyInterest)}
                                yearlyContribution={formatter.format(investment.yearlyContribution)}
                    />
                ))
            )}

            </tbody>
        </table>
    )
};

export default InvestmentsList;