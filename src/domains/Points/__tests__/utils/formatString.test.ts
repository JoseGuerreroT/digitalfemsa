import {
  getTextualDateFormat,
  getThousandFormat,
} from '../../utils/formatString';

describe('getTextualDateFormat', () => {
  test('01 - returns the correct formatted date', () => {
    const dateString = '2022-03-16T12:00:00.000Z';
    const expectedFormattedDate = '16 de marzo, 2022';

    const formattedDate = getTextualDateFormat(dateString);

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  test('02 - throws an error when passed an invalid date string', () => {
    const dateString = 'invalid date string';

    expect(() => getTextualDateFormat(dateString)).toThrow();
  });
});

describe('getThousandFormat', () => {
  test('returns the correct formatted number', () => {
    const points = 12009;
    const expectedFormattedNumber = '12,009';

    const formattedNumber = getThousandFormat(points);

    expect(formattedNumber).toEqual(expectedFormattedNumber);
  });
});
