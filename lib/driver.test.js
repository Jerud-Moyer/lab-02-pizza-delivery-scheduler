const Driver = require('./driver');
const Schedule = require('./schedule');

describe('Driver class', () => {
  it('has a name and a currentSchedule', () => {
    const driver = new Driver('Jerud');

    expect(driver.name).toEqual('Jerud');
    expect(driver.currentSchedule).toEqual(expect.any(Schedule));
  });
});
