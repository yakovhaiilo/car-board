module.exports = {
  filterByCurentYear: (array) => {
    return array.filter((a) => new Date().getFullYear() == Number(a.modelYear));
  },

  filterd: function (query, array) {
    let cars = [];
    if (query.modelName && !query.modelYear) {
      console.log("by name");
      cars = array.filter((a) => query.modelName === a.modelName);
    }
    if (!query.modelName && query.modelYear) {
      console.log("by year");
      cars = array.filter((a) => query.modelYear === a.modelYear);
    }
    if (query.modelName && query.modelYear) {
      console.log("by year && name");
      let resultByName = array.filter((a) => query.modelName === a.modelName);
      cars = resultByName.filter((a) => query.modelYear === a.modelYear);
    }
    return cars;
  },
};
