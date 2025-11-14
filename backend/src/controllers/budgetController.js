import budgetItems from "../apiData.js";
import { calculate } from "../libs/calculatePrices.js";
import { emailRegistro } from "../libs/sendEmail.js";

export const getServicesItems = async (req, res) => {
  let items = [];

  try {
    await budgetItems.map((item) => {
      items = [...items, item];
    });
    res.send(items);
    res.status(200).json({ message: "Items getted successfully" });
  } catch (error) {}
};

export const guardarNuevoPresupuesto = async (req, res) => {
  const { services, user } = req.body;
  let total = [];
  total = await calculate(services);
  try {
    await emailRegistro({ user, total });
    res.status(200).json({ message: "Presupuesto guardado correctamente" });
  } catch (error) {
    if (error) console.log(error);
  }
};
