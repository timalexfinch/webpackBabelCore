import mathAPI from './operations';

//alert("3 plus 5 = " + mathAPI.add(3, 5));

let add_listeners_to_buttons = () => {

    document.getElementById("btnAdd")
        .addEventListener("click", function () {
            document.getElementById("es6MathsContainer").innerHTML
                = "3 plus 5 = " + mathAPI.add(3, 5);
        });

    document.getElementById("btnSubtract")
        .addEventListener("click", function () {
            document.getElementById("es6MathsContainer").innerHTML =
                "3 minus 5 = " + mathAPI.subtract(3, 5);
        });

    document.getElementById("btnMultiply")
        .addEventListener("click", function () {
            document.getElementById("es6MathsContainer").innerHTML =
                "3 times 5 = " + mathAPI.multiply(3, 5);
        });

    document.getElementById("btnDivide")
        .addEventListener("click", function () {
            document.getElementById("es6MathsContainer").innerHTML =
                "3 divided by 5 = " + mathAPI.divide(3, 5);
        });
};

add_listeners_to_buttons();