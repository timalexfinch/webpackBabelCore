/*
 * This is the version that calls the maths lib using jQuery
 */

import $ from 'jquery';
import mathAPI from './operations';

// Here's the jQuery version:
$(function () {

    $("#btnAdd").click(function () {
        $("#es6MathsContainer").html("jQuery code: <br /><br /> 3 plus 5 = " + mathAPI.add(3, 5));
    });

    $("#btnSubtract").click(function () {
        $("#es6MathsContainer").html("jQuery code: <br /><br /> 3 minus 5 = " + mathAPI.subtract(3, 5));
    });

    $("#btnMultiply").click(function () {
        $("#es6MathsContainer").html("jQuery code: <br /><br /> 3 times 5 = " + mathAPI.multiply(3, 5));
    });

    $("#btnDivide").click(function () {
        $("#es6MathsContainer").html("jQuery code: <br /><br /> 3 divided by 5 = " + mathAPI.divide(3, 5));
    });
});