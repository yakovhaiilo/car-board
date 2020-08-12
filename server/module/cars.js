module.exports = {
  filterByCurentYear: (array) => {
    return array.filter((a) => new Date().getFullYear() == Number(a.modelYear));
  },

  filterByQuery: function (query, array) {
    let cars = [];
    if (query.modelName && !query.modelYear) {
      cars = array.filter((a) => query.modelName === a.modelName);
    }
    if (!query.modelName && query.modelYear) {
      cars = array.filter((a) => query.modelYear === a.modelYear);
    }
    if (query.modelName && query.modelYear) {
      let resultByName = array.filter((a) => query.modelName === a.modelName);
      cars = resultByName.filter((a) => query.modelYear === a.modelYear);
    }
    return cars;
  },
};
