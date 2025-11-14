import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  // Con mail nico9934
  //   const transport = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.EMAIL_USER,
  //       pass: process.env.EMAIL_PASS,
  //     },
  //   });

  //   Con nodeMailer
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      //   user: "e9dadd1ad9eed1",
      //   pass: "6690734e75cad7",
      pass: process.env.EMAIL_PASS,
    },
  });

  const datosHtml = datos.total.map((data) => {
    return `
      <tr>
          <td>${data.item}</td>
          <td>${data.cantidad}</td>
          <td>${data.total}</td>
      </tr>
    `;
  });

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Presupuesto Canopia</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
      <style>
          body {
              font-family: 'Comfortaa', sans-serif;
              margin: 20px;
              color: #ADC92E;
              
          }
          h1, h2, p {
              color:#222420 ;
              margin-bottom: 20px;
              font-size: 1.5rem;
          }
          h2 {
              font-size: 1.2rem;
          }
          p {
              font-size: .8rem;
          }
          table {
              border-collapse: collapse;
              width:70%;
         
              margin: auto
          }
          th, td {
              border: 1px solid #ADC92E;
              padding: 8px;
              text-align: center;
              font-size: .8rem;
          }
          td {
              color:#222420 ;
          }
          th {
              background-color: #ADC92E;
              color: white;
          }
          .alert_text {
              margin-top: 5rem;
          }
      </style>
  </head>
  <body>
  
      <h1>Bienvenido/a a Canopia</h1>
      <p>Hola ${datos.user.name}, gracias por elegir Canopia para tu presupuesto. A continuación, te presentamos los detalles:</p>
                  
      <h2>Detalle del Presupuesto</h2>
      <table id="presupuestoTable">
          <thead>
              <tr>
                  <th>Item</th>
                  <th>Cantidad</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
            ${datosHtml}
          </tbody>
      
      </table>
      <p class="alert_text">* Recuerda que estos valores son aproximados. En instantes, nos comunicaremos con vos para que
          podamos conocernos, y tener una cotización más exacta
      </p>
  </body>
  </html>
  
  `;

  const info = await transport.sendMail({
    from: "nico9934@gmail.com",
    to: datos.user.email,
    subject: "Presupuesto Paisajismo Canopia",
    html: htmlContent,
  });

  console.log(info);
};
