import { sort } from '../js/sort';

test.each([
  [{
    type: 'villian', attack: '15', defence: 7, city: 'Metropolis', name: 'Lex Luther',
  }, 'name', 'type',
  [{ key: 'name', value: 'Lex Luther' }, { key: 'type', value: 'villian' }, { key: 'attack', value: '15' }, { key: 'city', value: 'Metropolis' }, { key: 'defence', value: 7 }]],

  [{
    type: 'hero', attack: 20, defence: 11, city: 'Gotham', name: 'Batman',
  }, 'name', 'type',
  [{ key: 'name', value: 'Batman' }, { key: 'type', value: 'hero' }, { key: 'attack', value: 20 }, { key: 'city', value: 'Gotham' }, { key: 'defence', value: 11 }]],

  [{
    name: 'nuggets', meat: 'chicken', count: 9, calories: 506, vendor: 'Mcdonalds',
  }, 'name', 'meat',
  [{ key: 'name', value: 'nuggets' }, { key: 'meat', value: 'chicken' }, { key: 'calories', value: 506 }, { key: 'count', value: 9 }, { key: 'vendor', value: 'Mcdonalds' }]],
])(
  ('testing sort'),
  (object, key1, key2, expected) => {
    const result = sort(object, key1, key2);
    expect(result).toEqual(expected);
  },
);
