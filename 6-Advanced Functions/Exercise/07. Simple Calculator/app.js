function calculator() {
    let firstEl;
    let secondEl;
    let result;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstEl = document.querySelector(selector1);
            secondEl = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => (result.value = Number(firstEl.value) + Number(secondEl.value)),
        subtract: () => (result.value = Number(firstEl.value) - Number(secondEl.value))
    }
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');



