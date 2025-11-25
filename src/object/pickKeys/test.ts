import { pickKeys } from './pickKeys';

describe('pickKeys', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pickKeys(obj, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
  });


  it('should return an empty object if keys array is empty', () => {
    const obj = { a: 1, b: 2 };
    const result = pickKeys(obj, []);
    expect(result).toEqual({});
  });

  it('should handle objects with undefined or null values', () => {
    const obj = { a: undefined, b: null, c: 'value' };
    const result = pickKeys(obj, ['a', 'b', 'c']);
    expect(result).toEqual({ a: undefined, b: null, c: 'value' });
  });

  it('should not include inherited properties', () => {
    const base = { a: 1 };
    const obj = Object.create(base);
    obj.b = 2;
    const result = pickKeys(obj, ['a', 'b']);
    expect(result).toEqual({ b: 2 }); // 'a' is inherited, not own property
  });

  it('should work with symbol keys if casted properly', () => {
    const sym = Symbol('secret');
    const obj = { a: 1, [sym]: 42 };
    const result = pickKeys(obj, ['a'] as (keyof typeof obj)[]);
    expect(result).toEqual({ a: 1 });
  });
});