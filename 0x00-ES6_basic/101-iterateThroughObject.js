export default function iterateThroughObject(reportWithIterator) {
  let current = reportWithIterator.next();
  let result = '';

  while (!current.done) {
    result += `${current.value}`;
    current = reportWithIterator.next();
    if (!current.done) {
      result += ' | ';
    }
  }
  return result;
}
