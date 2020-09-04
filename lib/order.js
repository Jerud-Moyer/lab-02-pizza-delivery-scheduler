class Order {
    #COOK_TIME = 20
    #drivingDistanceInMinutes;
    constructor(name, deliveryMinute, drivingDistanceInMinutes) {
      this.name = name;
      this.deliveryMinute = deliveryMinute;
      this.#drivingDistanceInMinutes = drivingDistanceInMinutes;

    }
    startMinute() {
        return this.#COOK_TIME + this.#drivingDistanceInMinutes;
    }  

}

module.exports = Order;
