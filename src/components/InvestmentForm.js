import React, { useState } from 'react';

const InvestmentForm = (props) => {
    const [enteredSavings, setEnteredSavings] = useState('');
    const [enteredYearlySavings, setYearlySavings] = useState('');
    const [enteredExpectedInterest, setExpectedInterest] = useState('');
    const [enteredInvestmentDuration, setInvestmentDuration] = useState('');

    const savingsChangeHandler = (event) => {
        setEnteredSavings(event.target.value);
        console.log('called');
    };

    const yearlySavingsChangeHandler = (event) => {
        setYearlySavings(event.target.value);
    };

    const expectedInterestHandler = (event) => {
        setExpectedInterest(event.target.value);
    };

    const investmentDurationHandler = (event) => {
        setInvestmentDuration(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const investmentData = {
            savings: enteredSavings,
            yearlySavings: enteredYearlySavings,
            expectedInterest: enteredExpectedInterest,
            investmentDuration: enteredInvestmentDuration,
        }

        props.onSaveInvestmentData(investmentData);

        console.log('form submit function working');
        //
        // setEnteredSavings('');
        // setYearlySavings( '');
        // setExpectedInterest('');
        // setInvestmentDuration('');
    };

    const resetButtonHandler = (event) => {
      console.log('reset button clicked');
    };

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number"
                           id="current-savings"
                           value={enteredSavings}
                           onChange={savingsChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number"
                           id="yearly-contribution"
                           value={enteredYearlySavings}
                           onChange={yearlySavingsChangeHandler}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number"
                           id="expected-return"
                           value={enteredExpectedInterest}
                           onChange={expectedInterestHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number"
                           id="duration"
                           value={enteredInvestmentDuration}
                           onChange={investmentDurationHandler}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="button" className="buttonAlt" onClick={resetButtonHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default InvestmentForm;