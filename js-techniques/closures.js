const text = 'something';

/**
  inner function can access:

    1. text variable
    2. arguments of outer function
    3. anything in outer function

 */
function outer() {
   // const outerVariable = text;
    return () => {
        console.log(text);
    }
}

const inner = outer();

inner();

module.exports = {
    outer,
};
