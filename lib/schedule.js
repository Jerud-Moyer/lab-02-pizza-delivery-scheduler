class Schedule  {
    #schedule = [...Array(1440)].fill(false);

    nextOpenMinute() {
      const openMinute = this.#schedule.findIndex(minute => !minute);
      return openMinute;
    }
}

module.exports = Schedule;
