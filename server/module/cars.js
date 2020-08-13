module.exports = {
  filterByCurentYear: (array) => {
    return array.filter((a) => new Date().getFullYear() == Number(a.modelYear));
  },

  filterByQuery: (query, array) => {
    let cars = [];
    if (query.modelName && !query.modelYear) {
      cars = array.filter((a) => query.modelName === a.modelName);
    }
    if (!query.modelName && query.modelYear) {
      cars = array.filter((a) => query.modelYear === a.modelYear);
    }
    if (query.modelName && query.modelYear) {
      cars = array.filter((a) => query.modelName === a.modelName && query.modelYear === a.modelYear);
    }
    return cars;
  },
};
