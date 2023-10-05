import React from 'react';

const InvestmentsList = (props) => {

    console.log('props' + props.yearlyData);

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
                <p>No data found</p>
            ) : (
                props.yearlyData.map((investment) => (
                    <tr>
                        <td>{investment.year}</td>
                        <td>{investment.savingsEndOfYear}</td>
                        <td>{investment.yearlyInterest}</td>
                        <td>TOTAL INTEREST GAINED</td>
                        <td>{investment.yearlyContribution}</td>
                    </tr>
                ))
            )}

            </tbody>
        </table>
    )
};

export default InvestmentsList;