# 📧 Configuración de EmailJS para Canopia

Este proyecto ahora envía emails automáticamente cuando un usuario llena el formulario de contacto. Aquí está la guía paso a paso.

## 🚀 Pasos para Configurar EmailJS

### 1. Registrarse en EmailJS (GRATIS)
Ve a https://www.emailjs.com/ y haz clic en **"Sign Up Free"**
- Puedes usar tu email o GitHub/Google para registrarte

### 2. Crear Email Service (Conectar tu Email)
Una vez registrado:
1. Ve al menú lateral → **Email Services**
2. Haz clic en **"Add Service"**
3. Elige tu proveedor (Gmail, Outlook, etc) - recomendado: **Gmail**
4. Sigue los pasos para conectar tu cuenta
5. **Copia el Service ID** (algo como `service_xxxxxxxxxxx`)

### 3. Crear Email Template
En el menú lateral → **Email Templates**
1. Haz clic en **"Create New Template"**
2. Dale un nombre (ej: "Contacto Canopia")
3. En la sección **Service**, selecciona el servicio que creaste arriba
4. **Email To**: `{{to_email}}` (será reemplazado por contactocanopia@gmail.com)
5. En el **Subject**, escribe algo como: "Nuevo contacto de {{from_name}}"
6. En el **Email Content**, copia este template:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #8AA361; color: white; padding: 20px; border-radius: 5px; }
    .content { margin: 20px 0; }
    .footer { border-top: 1px solid #ddd; padding-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📧 Nuevo Mensaje de Contacto</h2>
    </div>
    
    <div class="content">
      <p><strong>Nombre:</strong> {{from_name}}</p>
      <p><strong>Email:</strong> {{from_email}}</p>
      <p><strong>Mensaje:</strong></p>
      <p>{{message}}</p>
    </div>
    
    <div class="footer">
      <p>Este email fue enviado desde el formulario de contacto de Canopia.</p>
      <p>Responde directamente a {{from_email}}</p>
    </div>
  </div>
</body>
</html>
```

7. Haz clic en **"Save"**
8. **Copia el Template ID** (algo como `template_xxxxxxxxxxx`)

### 4. Obtener Public Key
En el menú lateral → **Account**
- Busca la sección **API Keys**
- **Copia tu Public Key** (comienza con números/letras aleatorios)

### 5. Configurar Variables de Entorno
En la carpeta `Front/`, crea/edita el archivo `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

Reemplaza los valores con los que copiaste en los pasos anteriores.

### 6. ¡Listo! Prueba el Formulario
- Ejecuta `npm run dev`
- Ve a http://localhost:5173
- Rellena el formulario de contacto
- Haz clic en "Enviar Mensaje"
- Revisa tu email (donde configuraste el servicio) - ¡Debería llegar el email!

## 📝 Notas Importantes

- **Limites Gratis**: EmailJS te permite **200 emails por mes** en el plan gratis (más que suficiente para un pequeño negocio)
- **Más emails**: Si necesitas más adelante, actualiza al plan Pro
- **Seguridad**: El Public Key de EmailJS no es una credencial sensible (está diseñado para ser público)
- **.env.local**: Este archivo NO se versionará en Git (está en .gitignore), así que cada máquina/servidor puede tener sus propias credenciales

## 🐛 Si tienes problemas

### Error: "Missing Service ID"
→ Verifica que copiaste correctamente el Service ID y está en `.env.local`

### No llega el email
→ Revisa la consola del navegador (F12) para ver el error exacto
→ Prueba desde la consola de EmailJS (Account → Usage)

### El formulario se queda "Enviando..."
→ Verifica que las credenciales sean correctas
→ Comprueba tu conexión a internet

## 📚 Más Información

- Documentación oficial: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/contact/
