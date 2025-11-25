import { omitKeys } from './omitKeys';

describe('omitKeys', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omitKeys(obj, ['a', 'c']);
    expect(result).toEqual({ b: 2 });
  });


  it('should return an empty object if all keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    const result = omitKeys(obj, ['a', 'b']);
    expect(result).toEqual({});
  });

  it('should return the original object if keys array is empty', () => {
    const obj = { a: 1, b: 2 };
    const result = omitKeys(obj, []);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should handle objects with undefined or null values', () => {
    const obj = { a: undefined, b: null, c: 'value' };
    const result = omitKeys(obj, ['a']);
    expect(result).toEqual({ b: null, c: 'value' });
  });

  it('should not include inherited properties', () => {
    const base = { a: 1 };
    const obj = Object.create(base);
    obj.b = 2;
    obj.c = 3;
    const result = omitKeys(obj, ['b']);
    expect(result).toEqual({ c: 3 }); // 'a' is inherited, not own property
  });

  it('should work with symbol keys if casted properly', () => {
    const sym = Symbol('secret');
    const obj = { a: 1, b: 2, [sym]: 42 };
    const result = omitKeys(obj, ['a'] as (keyof typeof obj)[]);
    expect(result).toEqual({ b: 2 });
  });
});

