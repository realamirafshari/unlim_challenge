// Write a function createCounter.
// It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = function (init) {
  let current = init;
  return {
    increment: function () {
      current++;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
    decrement: function () {
      current--;
      return current;
    }
  };
};
const counter = createCounter(5);
console.log("increment", counter.increment());
console.log("reset", counter.reset());
console.log("decrement", counter.decrement());

//Project INPUT ---------------
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
