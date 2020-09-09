const Driver = require('./driver');

class Parlor {
    #drivers = [];
    #orders = [];

    #clearDriversSchedule() {
      this.#drivers
        .forEach(driver => driver.currentSchedule.clear());
            
    }

    #sortOrders() {
      return this.#orders
        .sort((a, b) => a.deliveryMinute - b.deliveryMinute);
    }

    #calculateSchedule() {
      this.#clearDriversSchedule();

      this.#sortOrders()
        .forEach(order => {
          for(let i = 0; i < this.#drivers.length; i++) {
            const driversSchedule = this.#drivers[i].currentSchedule;
            if(driversSchedule.freeWindow(order.startMinute, order.deliveryMinute)) {
              driversSchedule.addOrder(order);
              break;
            }
          }
        });
    }

    addDriver(driver) {
      this.#drivers.push(driver);
      this.#calculateSchedule();
    }

    addOrder(order) {
      this.#orders.push(order);
      this.#calculateSchedule();
    }

    printSchedule() {
      this.#drivers.forEach(driver => {
        driver.currentSchedule.print();
      });
    }

}

module.exports = Parlor;
