import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import budgetRoutes from "./src/routes/budgetRoutes.js";
import emailRoutes from "./src/routes/emailRoutes.js";

// import emailRoutes from "./src/routes/emailRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", budgetRoutes);
app.use("/api/email", emailRoutes);

const port = 4000;
app.listen(port, () => {
  console.log("Base de datos conectadas en el port " + port);
});



// Funcion para enviar correos automatizados
// Esta función se ejecutará cada 15 días a las 10:00 AM
// Puedes ajustar la programación según tus necesidades

// Simulación con destinatarios fijos
cron.schedule("0 10 */15 * *", () => {
  enviarMailAutomatizado({
    body: {
      destinatarios: ["persona1@mail.com", "persona2@mail.com"],
    },
  }, {
    status: () => ({ json: () => {} }),
  });
});


app.post("/api/enviar-correo", (req, res) => {
  const { destinatarios } = req.body;

  if (!destinatarios || !Array.isArray(destinatarios)) {
    return res.status(400).json({ error: "Destinatarios no válidos" });
  }

  enviarMailAutomatizado(
    { body: { destinatarios } },
    {
      status: (code) => ({
        json: (response) => res.status(code).json(response),
      }),
    }
  );
});