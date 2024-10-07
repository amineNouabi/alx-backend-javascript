/**
 * cleanSet - concatenates suffixes of all values prefixed by startString
 * @param {Set<string>} set
 * @param {string} startString
 */
export default function cleanSet(set, startString) {
  let str = '';

  if (startString.length) {
    set.forEach((setElem) => {
      if (setElem.startsWith(startString)) {
        if (str.length > 0) str += '-';
        str += setElem.substring(startString.length);
      }
    });
  }
  return str;
}
