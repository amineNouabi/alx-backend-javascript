/**
 * updateUniqueItems - update values that has 1 to 100
 * @param {Map<string, number>} map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
}
