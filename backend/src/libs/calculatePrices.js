import budgetItems from "../apiData.js";

export const calculate = (services) => {
  let serviceDetail = {
    item: "",
    cantidad: "",
    total: "",
  };
  let totalArray = [];

  services.map((service) => {
    budgetItems.map((item) => {
      if (item.name === service.item) {
        serviceDetail = {
          item: service.item,
          cantidad: service.cantidad,
          total: item.price * service.cantidad,
        };

        totalArray = [...totalArray, serviceDetail];
      }
    });
  });
  return totalArray;
};
