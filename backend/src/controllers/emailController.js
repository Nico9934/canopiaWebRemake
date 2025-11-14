import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config(); // Cargar variables de entorno

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function enviarMailAutomatizado(req, res) {
  try {
    const { destinatarios } = req.body;

    const templatePath = path.resolve("templates", "recordatorio.html");
    let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

    for (const persona of destinatarios) {
      const htmlPersonalizado = htmlTemplate.replace("{{nombre}}", persona.nombre);

      await transporter.sendMail({
        from: `"Canopia" <${process.env.EMAIL_USER}>`,
        to: persona.email,
        subject: "Sumá valor a tu proyecto con espacios verdes que marcan la diferencia",
        html: htmlPersonalizado,
      });
    }

    res.status(200).json({ message: "Correos enviados correctamente." });
  } catch (error) {
    console.error("Error al enviar emails:", error);
    res.status(500).json({ message: "Error al enviar emails.", error });
  }
}