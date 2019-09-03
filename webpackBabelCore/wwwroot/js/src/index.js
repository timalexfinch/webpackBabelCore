import mathAPI from './operations';

//alert("3 plus 5 = " + mathAPI.add(3, 5));

document.querySelector("#btnAdd")
    .addEventListener("click", function () {
        document.querySelector("#es6MathsContainer").innerHTML
            = `3 plus 5 = ${mathAPI.add(3, 5)}`;
    });

document.querySelector("#btnSubtract")
    .addEventListener("click", function () {
        document.querySelector("#es6MathsContainer").innerHTML =
            `3 minus 5 = ${mathAPI.subtract(3, 5)}`;
    });

document.querySelector("#btnMultiply")
    .addEventListener("click", function () {
        document.querySelector("#es6MathsContainer").innerHTML =
            `3 times 5 =  ${mathAPI.multiply(3, 5)}`;
    });

document.querySelector("#btnDivide")
    .addEventListener("click", function () {
        document.querySelector("#es6MathsContainer").innerHTML =
            `3 divided by 5 = ${mathAPI.divide(3, 5)}`;
    });
