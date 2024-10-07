/**
 * cleanSet - concatenates suffixes of all values prefixed by startString
 * @param {Set<string>} set
 * @param {string} startString
 */
export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') return '';
  let str = '';

  set.forEach((setElem) => {
    if (typeof setElem === 'string' && setElem.startsWith(startString)) {
      if (str.length > 0) str += '-';
      str += setElem.substring(startString.length);
    }
  });
  return str;
}
