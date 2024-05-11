import {calculateInvestmentResults, formatter} from '../util/investment.js'
export default function Results({userInput}){
   const resultsData = calculateInvestmentResults(userInput);
   //console.log(resultsData); 

   const initialInvestment = resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment;

    return (
        <table id = "result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData=>{
                    const totalInterestValue = yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment; 
                    const totalAmountInvested = yearData.valueEndOfYear-totalInterestValue
                    return <tr key = {yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterestValue)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}