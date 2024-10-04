export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (const elem of array) {
    appendedArray.push(appendString + elem);
  }

  return appendedArray;
}
