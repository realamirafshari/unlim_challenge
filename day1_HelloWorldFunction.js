const createHelloWorld = () => {
  return function () {
    return "hello world";
  };
};
const f = createHelloWorld();
console.log(f());
