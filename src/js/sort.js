export function sort(obj, ...keys) {
  const arrayFromKeys = [];
  const arrayfromOthers = [];

  for (const prop in obj) {
    if (keys.includes(prop)) {
      const propIndex = keys.findIndex((item) => {
        if (item === prop) {
          return true;
        }
      });
      arrayFromKeys[propIndex] = {};
      arrayFromKeys[propIndex].key = prop;
      arrayFromKeys[propIndex].value = obj[prop];
    }
  }

  for (const prop in obj) {
    if (!keys.includes(prop)) {
      arrayfromOthers.push({});
      arrayfromOthers[arrayfromOthers.length - 1].key = prop;
      arrayfromOthers[arrayfromOthers.length - 1].value = obj[prop];
    }
  }

  arrayfromOthers.sort((a, b) => {
    if (a.key[0] > b.key[0]) { return 1; }
    if (a.key[0] < b.key[0]) { return -1; }
    if (a.key[0] === b.key[0]) {
      if (a.key[1] > b.key[1]) { return 1; }
      if (a.key[1] < b.key[1]) { return -1; }
    }
  });

  const fullArray = arrayFromKeys.concat(arrayfromOthers);

  return fullArray;
}
