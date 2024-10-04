export default function createIteratorObject(report) {
  let ppl = [];

  Object.values(report.allEmployees).forEach(elem => {
    ppl = [...ppl, ...elem];
  });

  let i = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (i < ppl.length) {
        return { value: ppl[i++], done: false };
      }
      return { done: true };
    },
  };
}
