/* eslint-disable no-console */
const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('should return the first available minute', () => {
    const time = new Schedule();

    expect(time.nextOpenMinute()).toEqual(0);
  });

  it('should return all array items to false', () => {
    const time = new Schedule();
    // time.addOrder();
    time.clear();
    expect(time.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.clear();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  // it('prints the schedule', () => {
  //   console.table = jest.fn();
  //   const schedule = new Schedule();
  //   const order = new Order('pizza order', 40, 20);
  //   schedule.addOrder(order);

  //   schedule.print();

  //   expect(console.table).toHaveBeenCalledWith([
  //     { start: 0, end: 40, status: 'busy' },
  //     { start: 41, end: 1439, status: 'free' }
  //   ]);
  // });


});
