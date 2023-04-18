const getOpeningHours = require('../src/getOpeningHours');

describe('getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';
  it('returns the zoo hours for the given day and hour', () => {
    expect(getOpeningHours('Monday', '10:00-PM')).toEqual(closed);
    expect(getOpeningHours('Tuesday', '10:00-AM')).toEqual(closed);
    expect(getOpeningHours('Wednesday', '10:00-AM')).toEqual(open);
    expect(getOpeningHours('Thursday', '11:00-AM')).toEqual(open);
    expect(getOpeningHours('Friday', '12:00-PM')).toEqual(closed);
    expect(getOpeningHours('Saturday', '12:00-AM')).toEqual(closed);
    expect(getOpeningHours('Sunday', '1:00-PM')).toEqual(open);
  });

  it('throws an error for invalid day', () => {
    expect(() => getOpeningHours('Munday', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('throws an error for invalid hour', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '12:60-PM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Monday', '10:00-XX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
