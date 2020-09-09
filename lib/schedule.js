/* eslint-disable no-console */
class Schedule  {
    #schedule = [...Array(1440)].fill(false);

    nextOpenMinute() {
      const openMinute = this.#schedule.findIndex(minute => !minute);
      return openMinute;
    }

    
    freeWindow(startMinute, endMinute) {
      return this.#schedule
        .slice(startMinute, endMinute)
        .every(minute => !minute);
    }
    
    addOrder(order) {
      for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
        this.#schedule[i] = true;
      } 
    }
    
    clear() {
      this.#schedule.fill(false);
    }

  // print() {
  //   const schedule = this.#schedule.reduce((acc, minute, i) => {
  //     if(this.#schedule[i - 1] === minute) {
  //       acc[acc.length - 1] = { ...acc[acc.length - 1], end: i };
  //     } else {
  //       acc.push({ start: i, end: i, status: minute ? 'busy' : 'free' });
  //     }
    
  //     return acc;
  //   }, []);
    
  //   console.table(schedule);
  // }
}

module.exports = Schedule;
