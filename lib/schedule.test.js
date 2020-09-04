const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('should return the first available minute', () => {
    const time = new Schedule();

    expect(time.nextOpenMinute()).toEqual(0);
  });
});
