// simple_interest_calculator.js

function calculateSimpleInterest(principal, rate, time) {
    const interest = (principal * rate * time) / 100;
    return interest;
}

function main() {
    const principal = parseFloat(prompt("Enter principal amount: "));
    const rate = parseFloat(prompt("Enter interest rate: "));
    const time = parseFloat(prompt("Enter time (in years): "));

    const simpleInterest = calculateSimpleInterest(principal, rate, time);
    console.log(`Simple Interest: ${simpleInterest}`);
}

main();
