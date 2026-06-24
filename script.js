function calculateEvenSum() {
    const input = document.getElementById("nInput");
    const resultDiv = document.getElementById("result");
    let N = parseInt(input.value, 10);
    if (N <= 0 || !Number.isInteger(N)) {
        resultDiv.textContent = "Please enter a positive integer.";
        return;
    }

    let sum = 0 ;

    // Calculate sum of even numbers from 1 to N
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    resultDiv.textContent =
        `Sum of even numbers from 1 to ${N} = ${sum}`;
}