export default function createIteratorObject(report) {
  let ppl = [];

  Object.values(report.allEmployees).forEach((elem) => {
    ppl = [...ppl, ...elem];
  });

  let i = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      i += 1;
      if (i < ppl.length) {
        return { value: ppl[i], done: false };
      }
      return { done: true };
    },
  };
}
