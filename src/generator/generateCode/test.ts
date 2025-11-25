import { generateCode } from './index';

describe('generateCode', () => {
  it('should generate a numeric string of default length 6', () => {
    const result = generateCode({ type: 'number' });
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(6);
    expect(/^\d+$/.test(result)).toBe(true);
  });

  it('should generate an alphabetic string of length 8', () => {
    const result = generateCode({ type: 'string', length: 8 });
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(8);
    expect(/^[A-Za-z]+$/.test(result)).toBe(true);
  });

  it('should generate an alphanumeric string of length 10', () => {
    const result = generateCode({ type: 'all', length: 10 });
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(10);
    expect(/^[A-Za-z0-9]+$/.test(result)).toBe(true);
  });

  it('should use default type "all" and default length 6 when no args are passed', () => {
    const result = generateCode();
    expect(typeof result).toBe('string');
    expect(result).toHaveLength(6);
    expect(/^[A-Za-z0-9]+$/.test(result)).toBe(true);
  });

  it('should throw an error for negative length', () => {
    expect(() => generateCode({ type: 'number', length: -5 })).toThrow('Length must be a positive number');
  });

  it('should throw an error for zero length', () => {
    expect(() => generateCode({ type: 'string', length: 0 })).toThrow('Length must be a positive number');
  });
});