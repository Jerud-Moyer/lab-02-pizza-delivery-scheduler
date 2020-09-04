const Order = require('./order');

describe('Order class', () => {
  it('will tell us when to start pizza based on cook_time and drivingDistanceInMinutes', () => {
    const firstOrder = new Order('pizzaFood', 45, 15);
    const makeTime = firstOrder.startMinute();
    expect(makeTime).toEqual(35);
        
  });

  it('will have a name and deliveryMinute that matches the constructor', () => {
    const orderName = new Order('food', 35, 15);
    const orderTime = new Order('food', 45, 20);
    const newOrderName = orderName.name;
    const newOrderTime = orderTime.deliveryMinute;
    expect(newOrderName).toEqual('food');
    expect(newOrderTime).toEqual(45);

  });
});
