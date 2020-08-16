module.exports = {
  filterByCurentYear: (array) => {
    return array.filter((a) => new Date().getFullYear() == Number(a.modelYear));
  },

  filterByQuery: (query, cars) => {
    if (query.modelName && !query.modelYear) {
      return cars.filter((car) => query.modelName === car.modelName);
    }
    else if (!query.modelName && query.modelYear) {
      return cars.filter((car) => query.modelYear === car.modelYear);
    }
    else if (query.modelName && query.modelYear) {
      return cars.filter((car) =>
       query.modelName === car.modelName &&
       query.modelYear === car.modelYear);
    } 
  }
};
