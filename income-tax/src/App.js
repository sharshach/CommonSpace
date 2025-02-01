import React from 'react';
import './App.css';
import OldTaxRegime from './util/oldTaxRegime.ts';
import NewTax2024Regime from './util/newTax2024.ts';
import NewTax2025Regime from './util/newTax2025.ts';

function App() {
  const oldTax = new OldTaxRegime();
  const newTax2024 = new NewTax2024Regime();
  const newTax2025 = new NewTax2025Regime();

  const incomeRanges = [];
  for (let i = 0; i <= 10000000; i += 100000) {
    incomeRanges.push(i);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tax Calculation for Different Regimes</h1>
        <table>
          <thead>
            <tr>
              <th>Income</th>
              <th>Old Tax Regime</th>
              <th>New Tax Regime 2024</th>
              <th>New Tax Regime 2025</th>
              <th>Difference (2024 - 2025)</th>
            </tr>
          </thead>
          <tbody>
            {incomeRanges.map(income => {
              const tax2024 = newTax2024.calculateTax(income);
              const tax2025 = newTax2025.calculateTax(income);
              return (
                <tr key={income}>
                  <td>{income.toLocaleString('en-IN')}</td>
                  <td>{oldTax.calculateTax(income).toLocaleString('en-IN')}</td>
                  <td>{tax2024.toLocaleString('en-IN')}</td>
                  <td>{tax2025.toLocaleString('en-IN')}</td>
                  <td>{(tax2024 - tax2025).toLocaleString('en-IN')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;