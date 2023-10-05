import React, { useState } from 'react';

const InvestmentForm = (props) => {
    const [enteredSavings, setEnteredSavings] = useState('');
    const [yearlySavings, setYearlySavings] = useState('');
    const [expectedInterest, setExpectedInterest] = useState('');
    const [investmentDuration, setInvestmentDuration] = useState('');

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
        console.log('submitted');

        // const investmentData = {
        //     savings: enteredSavings,
        //     yearlySavings: yearlySavings,
        //     expectedInterest: expectedInterest,
        //     investmentDuration: investmentDuration,
        // }

        const investmentData = {
            savings: 100,
            yearlySavings: 1000,
            expectedInterest: 3,
            investmentDuration: 5,
        }

        // console.log(investmentData);
        props.onSaveInvestmentData(investmentData);

        setEnteredSavings('');
        setYearlySavings( '');
        setExpectedInterest('');
        setInvestmentDuration('');
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
                           onChange={setEnteredSavings}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number"
                           id="yearly-contribution"
                           value={yearlySavings}
                           onChange={setYearlySavings}
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
                           value={expectedInterest}
                           onChange={setExpectedInterest}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number"
                           id="duration"
                           value={investmentDuration}
                           onChange={setInvestmentDuration}
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