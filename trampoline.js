const func = x => {
    if(x > 500000) {
        console.log(x);
        return;
    }
    return ()=> func(x + 1); // TODO: you return a function, it hasn't been called yet
};

const trampoline = fn => (...args) => {
    let result = fn(...args);
    // TODO: repeatedly call the function till you hit your base case
    while (typeof result === 'function') {
        result = result();
    }
    return result;
};

const temp = trampoline(func);
temp(1);
