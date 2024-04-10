// challenges.test.js

const { printEvenNumbers, printMultiplicationTable, kilometersToMiles, sumArray, reverseArray } = require('./challenges');

test('Even numbers up to 1 (should return empty array)', () => {
    expect(printEvenNumbers(1)).toEqual([]);
});

test('Even numbers up to 15', () => {
    expect(printEvenNumbers(15)).toEqual([2, 4, 6, 8, 10, 12, 14]);
});

test('Even numbers up to 0 (should return empty array)', () => {
    expect(printEvenNumbers(0)).toEqual([]);
});

test('Even numbers with negative limit (should return empty array)', () => {
    expect(printEvenNumbers(-10)).toEqual([]);
});

test('Even numbers up to 2 (edge case)', () => {
    expect(printEvenNumbers(2)).toEqual([2]);
});




test('Print 1x1 multiplication table', () => {
    expect(printMultiplicationTable(1)).toEqual([[1]]);
});

test('Print 3x3 multiplication table', () => {
    expect(printMultiplicationTable(3)).toEqual([
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9]
    ]);
});

test('Print 0x0 multiplication table (edge case, should return empty array)', () => {
    expect(printMultiplicationTable(0)).toEqual([]);
});

test('Print 10x10 multiplication table size check', () => {
    const table = printMultiplicationTable(10);
    expect(table.length).toBe(10);
    expect(table[0].length).toBe(10);
});

test('Print 6x6 multiplication table last value check', () => {
    const table = printMultiplicationTable(6);
    expect(table[5][5]).toBe(36);
});


test('Convert 0 kilometers to miles', () => {
    expect(kilometersToMiles(0)).toBeCloseTo(0);
});

test('Convert 100 kilometers to miles', () => {
    expect(kilometersToMiles(100)).toBeCloseTo(62.1371);
});

test('Convert 12.345 kilometers to miles', () => {
    expect(kilometersToMiles(12.345)).toBeCloseTo(7.67022);
});

test('Convert negative kilometers to miles (should return negative miles)', () => {
    expect(kilometersToMiles(-10)).toBeCloseTo(-6.21371);
});

test('Convert very large number of kilometers to miles', () => {
    expect(kilometersToMiles(1000000)).toBeCloseTo(621371);
});



test('Sum of an array with negative numbers [-1, -2, -3]', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
});

test('Sum of an array with mixed numbers [-1, 2, -3, 4]', () => {
    expect(sumArray([-1, 2, -3, 4])).toBe(2);
});

test('Sum of an array with all zeros [0, 0, 0]', () => {
    expect(sumArray([0, 0, 0])).toBe(0);
});

test('Sum of a single-element array [10]', () => {
    expect(sumArray([10])).toBe(10);
});

test('Sum of an empty array (should return 0)', () => {
    expect(sumArray([])).toBe(0);
});



test('Reverse array with single element [1]', () => {
    expect(reverseArray([1])).toEqual([1]);
});

test('Reverse array with strings ["a", "b", "c"]', () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});

test('Reverse an empty array (should return an empty array)', () => {
    expect(reverseArray([])).toEqual([]);
});

test('Reverse array with mixed elements [1, "a", 2, "b"]', () => {
    expect(reverseArray([1, "a", 2, "b"])).toEqual(["b", 2, "a", 1]);
});



test('Sort an array of integers', () => {
    expect(sortArray([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
});

test('Sort an array with negative numbers', () => {
    expect(sortArray([-2, -1, -3])).toEqual([-3, -2, -1]);
});

test('Sort an array with decimals', () => {
    expect(sortArray([3.1, 2.2, 1.3])).toEqual([1.3, 2.2, 3.1]);
});

test('Sort an empty array (should return an empty array)', () => {
    expect(sortArray([])).toEqual([]);
});

test('Sort an array with identical elements', () => {
    expect(sortArray([1, 1, 1])).toEqual([1, 1, 1]);
});


test('Filter negative numbers from mixed array', () => {
    expect(filterNegativeNumbers([-1, 2, -3, 4])).toEqual([2, 4]);
});

test('Filter negative numbers from all-negative array', () => {
    expect(filterNegativeNumbers([-1, -2, -3])).toEqual([]);
});

test('Filter negative numbers from array without negatives (no change)', () => {
    expect(filterNegativeNumbers([1, 2, 3])).toEqual([1, 2, 3]);
});

test('Filter negative numbers from an empty array (should return an empty array)', () => {
    expect(filterNegativeNumbers([])).toEqual([]);
});

test('Filter negative numbers from array with zeros', () => {
    expect(filterNegativeNumbers([0, -1, 1])).toEqual([0, 1]);
});


test('Remove spaces from a string with spaces', () => {
    expect(removeSpaces('Hello World')).toBe('HelloWorld');
});

test('Remove spaces from a string with no spaces (no change)', () => {
    expect(removeSpaces('HelloWorld')).toBe('HelloWorld');
});

test('Remove spaces from a string with multiple spaces', () => {
    expect(removeSpaces('   Hello    World   ')).toBe('HelloWorld');
});

test('Remove spaces from an empty string (should return an empty string)', () => {
    expect(removeSpaces('')).toBe('');
});

test('Remove spaces from a string with tabs and newlines', () => {
    expect(removeSpaces('\tHello\nWorld\n')).toBe('HelloWorld');
});


test('Check if 100 is divisible by 10', () => {
    expect(isDivisibleByTen(100)).toBeTruthy();
});

test('Check if 25 is divisible by 10', () => {
    expect(isDivisibleByTen(25)).toBeFalsy();
});

test('Check if 0 is divisible by 10', () => {
    expect(isDivisibleByTen(0)).toBeTruthy();
});

test('Check if -20 is divisible by 10', () => {
    expect(isDivisibleByTen(-20)).toBeTruthy();
});

test('Check if 19 is divisible by 10', () => {
    expect(isDivisibleByTen(19)).toBeFalsy();
});


test('Count vowels in a string', () => {
    expect(countVowels('Hello World')).toBe(3);
});

test('Count vowels in a string with all vowels', () => {
    expect(countVowels('AEIOUaeiou')).toBe(10);
});

test('Count vowels in a string with no vowels', () => {
    expect(countVowels('bcdfg')).toBe(0);
});

