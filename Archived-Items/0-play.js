const myObject = {
    firstNum: 3,
    secondNum: 4
}

// The way that my previous job approached destructuring
const myFunction = ({firstNum, secondNum}) => {
    return firstNum + secondNum;
}

console.log(myFunction(myObject));

// The way that the instructor wrote the function which was later used with a callback and destructuring.
const mySecondFunction = (incVar1, incVar2) => {
    return incVar1 + incVar2;
}