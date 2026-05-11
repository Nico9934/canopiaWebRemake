# 📧 Guía Completa: Configurar EmailJS para Canopia

**Duración estimada**: 10 minutos  
**Costo**: GRATIS  
**Dificultad**: 🟢 Muy Fácil

---

## 📌 Índice
1. [¿Qué es EmailJS?](#qué-es-emailjs)
2. [Paso 1: Registrarse](#paso-1-registrarse)
3. [Paso 2: Email Service](#paso-2-crear-email-service)
4. [Paso 3: Email Template](#paso-3-crear-email-template)
5. [Paso 4: Public Key](#paso-4-obtener-public-key)
6. [Paso 5: Configurar .env](#paso-5-configurar-variables-de-entorno)
7. [Paso 6: Pruebas](#paso-6-probar-formulario)
8. [Troubleshooting](#troubleshooting)

---

## ¿Qué es EmailJS?

EmailJS es un servicio que **envía emails desde tu navegador sin necesidad de backend**.

### Ventajas:
- ✅ **Totalmente Gratis** (200 emails/mes)
- ✅ **Sin código backend** requerido
- ✅ **Seguro**: No expones tu email
- ✅ **Fácil**: 3 pasos en 10 minutos
- ✅ **Confiable**: Usado por miles de sitios

### Cómo Funciona:
```
Usuario llena formulario
        ↓
JavaScript entra en acción
        ↓
Envía email a EmailJS
        ↓
EmailJS reenvía a tu email
        ↓
Tu recibes el email ✉️
```

---

## Paso 1: Registrarse

### 1a. Ve a EmailJS
Abre: https://www.emailjs.com

### 1b. Haz Clic en "Sign Up Free"
![image alt text]

### 1c. Elige tu método de registro
```
┌─────────────────────────────┐
│ Sign Up With:               │
│ • Google                    │
│ • GitHub                    │
│ • Email & Password          │
└─────────────────────────────┘
```

**Recomendación**: Usa Google o GitHub (más rápido)

### 1d. Completa el formulario
- Email
- Password
- Confirma password

### 1e. Verifica tu email
- Revisa tu bandeja de entrada
- Haz clic en el link de confirmación
- ¡Listo! Estás registrado

---

## Paso 2: Crear Email Service

### 2a. Dashboard de EmailJS
Después de registrarte, deberías estar en el dashboard.

Si no, ve a: https://dashboard.emailjs.com

### 2b. Menú Lateral → "Email Services"
```
← Sidebar Menu
  ✓ Home
  ✓ Email Services      ← Haz clic aquí
  ✓ Email Templates
  ✓ Account
```

### 2c. Haz Clic en "Add Service"
Botón azul en la parte superior

### 2d. Elige tu proveedor de email

#### Opción A: Gmail (Recomendado)
1. Selecciona **Gmail**
2. Haz clic en **Connect**
3. Selecciona tu cuenta de Google
4. Confirma permisos
5. ¡Hecho! Gmail conectado

#### Opción B: Outlook
1. Selecciona **Outlook**
2. Haz clic en **Connect**
3. Ingresa tu usuario/password de Outlook
4. Confirma permisos
5. ¡Hecho!

#### Opción C: Otros (SMTP)
Si usas otro proveedor, se necesita configuración manual

### 2e. Copia tu Service ID
```
┌──────────────────────────────┐
│ Service Details              │
├──────────────────────────────┤
│ Service ID:                  │
│ service_abcd1234efgh5678.... │ ← COPIA ESTO
│                              │
│ Status: ✅ Connected         │
└──────────────────────────────┘
```

**Guarda este valor** (lo necesitarás más adelante)

---

## Paso 3: Crear Email Template

### 3a. Menú Lateral → "Email Templates"
```
← Sidebar Menu
  ✓ Home
  ✓ Email Services
  ✓ Email Templates    ← Haz clic aquí
  ✓ Account
```

### 3b. Haz Clic en "Create New Template"

### 3c. Configura el Template

#### Nombre del Template:
```
Template Name: Contacto Canopia
```

#### Email Service:
Selecciona el servicio que creaste en Paso 2 (Gmail, Outlook, etc)

#### From Name:
```
From Name: {{from_name}}
```
(Esto será reemplazado por el nombre del usuario)

#### From Email:
```
From Email: {{from_email}}
```
(Esto será reemplazado por el email del usuario)

#### To Email:
```
To Email: contactocanopia@gmail.com
```
(Tu email, donde recibirás los mensajes)

#### Email Subject:
```
Subject: Nuevo contacto de {{from_name}} - Canopia
```

#### Email Content (HTML):
En el área de **Email Content**, copia esto:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #8AA361 0%, #ADC92E 100%);
      color: white;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 20px;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      margin: 20px 0;
    }
    .field {
      margin: 15px 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    .field strong {
      color: #8AA361;
      display: block;
      margin-bottom: 5px;
    }
    .field p {
      margin: 0;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #eee;
      font-size: 12px;
      color: #666;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background: #8AA361;
      color: white;
      padding: 3px 8px;
      border-radius: 3px;
      font-size: 11px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">📧 NUEVO MENSAJE</span>
      <h2>Nuevo Contacto desde Canopia</h2>
    </div>
    
    <div class="content">
      <div class="field">
        <strong>👤 Nombre:</strong>
        <p>{{from_name}}</p>
      </div>
      
      <div class="field">
        <strong>📧 Email:</strong>
        <p>{{from_email}}</p>
      </div>
      
      <div class="field">
        <strong>💬 Mensaje:</strong>
        <p>{{message}}</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Este email fue enviado desde el formulario de contacto de Canopia.</p>
      <p>📍 <a href="https://canopia-opal.vercel.app">canopia-opal.vercel.app</a></p>
      <p>Para responder, envía un email a <strong>{{from_email}}</strong></p>
    </div>
  </div>
</body>
</html>
```

### 3d. Guarda el Template
- Haz clic en **"Save"**
- Deberías ver un checkmark ✅

### 3e. Copia tu Template ID
```
┌──────────────────────────────┐
│ Template Details             │
├──────────────────────────────┤
│ Template ID:                 │
│ template_xyz9876mnop1234.... │ ← COPIA ESTO
│                              │
│ Status: ✅ Saved             │
└──────────────────────────────┘
```

**Guarda este valor** (lo necesitarás más adelante)

---

## Paso 4: Obtener Public Key

### 4a. Menú Lateral → "Account"
```
← Sidebar Menu
  ✓ Home
  ✓ Email Services
  ✓ Email Templates
  ✓ Account              ← Haz clic aquí
```

### 4b. Busca "API Keys"
En la página Account, busca la sección **API Keys**

### 4c. Copia tu Public Key
```
┌──────────────────────────────┐
│ API Keys                     │
├──────────────────────────────┤
│ Public Key:                  │
│ abcd1234efgh5678ijkl9012.... │ ← COPIA ESTO
│                              │
│ Private Key: (no uses esto)  │
│ xxxx...xxxx (hide/show)      │
└──────────────────────────────┘
```

**IMPORTANTE**: 
- ✅ Copia el **Public Key**
- ❌ NO copies el Private Key

**Guarda este valor** (lo necesitarás más adelante)

---

## Paso 5: Configurar Variables de Entorno

### 5a. Abre la carpeta del proyecto
```bash
Front/.env.local
```

### 5b. Reemplaza los valores

Si `.env.local` no existe, créalo. Luego, rellena con tus valores:

```env
# Reemplaza estos valores con los que copiaste arriba

VITE_EMAILJS_SERVICE_ID=service_abc123def456...
VITE_EMAILJS_TEMPLATE_ID=template_xyz789mnop...
VITE_EMAILJS_PUBLIC_KEY=abcd1234efgh5678ijkl9012...
```

### 5c. Guarda el archivo

**IMPORTANTE**:
- ✅ Este archivo se ignora automáticamente (.gitignore)
- ✅ Seguro: tus credenciales NO irán a GitHub
- ✅ Cada máquina/servidor puede tener sus propios valores

---

## Paso 6: Probar Formulario

### 6a. Inicia el servidor local
```bash
cd Front
npm run dev
```

### 6b. Abre la página
```
http://localhost:5173
```

### 6c. Scroll hasta "Contacto"
O haz clic en el link de navegación

### 6d. Llena el formulario
```
Nombre: Tu nombre
Email: tu@email.com
Mensaje: Este es un mensaje de prueba
```

### 6e. Haz clic en "Enviar Mensaje"
- Verás el botón cambiar a "Enviando..."
- Si todo está bien, verás "✓ Mensaje enviado exitosamente"

### 6f. Revisa tu email
Ve a la bandeja de entrada del email que configuraste en el Template (Paso 3)

¡Debería haber un email nuevo! 🎉

---

## Troubleshooting

### ❌ Problema: "Missing Service ID"

**Causa**: `.env.local` no tiene el Service ID correcto

**Solución**:
1. Abre `.env.local`
2. Verifica que `VITE_EMAILJS_SERVICE_ID` no esté vacío
3. Copia nuevamente desde EmailJS Dashboard → Email Services
4. Guarda y recarga la página (F5)

---

### ❌ Problema: "Invalid Template ID"

**Causa**: Template ID incorrecto o no existe

**Solución**:
1. Ve a EmailJS Dashboard → Email Templates
2. Verifica que el template existe
3. Copia el Template ID nuevamente
4. Actualiza `.env.local`
5. Recarga la página

---

### ❌ Problema: "Invalid Public Key"

**Causa**: Public Key incorrecto

**Solución**:
1. Ve a EmailJS Dashboard → Account
2. Busca API Keys
3. Copia nuevamente el **Public Key** (no el Private)
4. Actualiza `.env.local`
5. Recarga la página

---

### ❌ Problema: Email se queda "Enviando..." para siempre

**Causa**: Conexión a internet o credenciales incorrectas

**Solución**:
1. Abre consola del navegador (F12)
2. Ve a Tab "Console"
3. Busca mensajes de error (rojo)
4. Verifica conexión a internet
5. Verifica credenciales en `.env.local`

---

### ❌ Problema: Email no llega a mi bandeja

**Causa**: Email bloqueado como spam o configuración incorrecta

**Solución**:
1. Revisa carpeta de SPAM en tu email
2. Verifica el "To Email" en el Template (Paso 3)
3. Prueba desde EmailJS Dashboard:
   - Email Services → Tu servicio → "Test"
4. Si sigue sin funcionar, crea un nuevo Email Service

---

### ❌ Problema: "CORS Error"

**Causa**: Tu dominio no está permitido en EmailJS

**Solución**:
1. Ve a EmailJS Dashboard → Account → Security
2. En "Allowed Origins", agrega tu dominio:
   - Desarrollo: `http://localhost:5173`
   - Producción: `https://tudominio.com`

---

## 📊 Límites y Planes

### Plan Gratis
```
├─ 200 emails/mes
├─ 1 Email Service
├─ 1 Email Template
├─ Public API
└─ Support Community
```

### Plan Pro ($25/mes)
```
├─ 10,000 emails/mes
├─ 20 Email Services
├─ 100 Email Templates
├─ SMTP Support
└─ Priority Support
```

**Recomendación**: Comienza con Plan Gratis. Upgrade si creces.

---

## ✅ Checklist Final

Antes de decir "completado":

- [ ] Registrado en EmailJS ✅
- [ ] Email Service creado ✅
- [ ] Email Template creado ✅
- [ ] Service ID copiado ✅
- [ ] Template ID copiado ✅
- [ ] Public Key copiado ✅
- [ ] `.env.local` completado ✅
- [ ] Formulario probado ✅
- [ ] Email recibido ✅

---

## 📚 Recursos Adicionales

### Documentación:
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [EmailJS SDK Docs](https://www.npmjs.com/package/@emailjs/browser)

### Soporte:
- [Email Support](mailto:support@emailjs.com)
- [Contact Form](https://www.emailjs.com/contact/)
- [Community Forum](https://forum.emailjs.com/)

### Tutoriales:
- [Guía Rápida](https://www.emailjs.com/docs/rest-api/send/)
- [Integraciones](https://www.emailjs.com/docs/integration/)

---

## 💡 Tips Pro

### 1. Pruebas
```javascript
// En Contact.jsx ya está hecho, pero si quieres probar manualmente:
emailjs.send(SERVICE_ID, TEMPLATE_ID, {
  from_name: "Test User",
  from_email: "test@test.com",
  message: "Test message",
  to_email: "tucontacto@gmail.com"
})
```

### 2. Variables Dinámicas
En el Template, puedes usar cualquier variable:
- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{message}}` - Mensaje completo
- `{{to_email}}` - Email destino

### 3. Reenvío Automático
Los emails se re-envían automáticamente a través de tu Email Service (Gmail, Outlook, etc)

### 4. Múltiples Emails
Si necesitas enviar a varias personas:
1. Crea múltiples templates
2. O modifica el template con lógica

---

## 🚀 Listo!

Ahora tu formulario de contacto envía emails automáticamente.

**¿Qué hacer después?**
1. ✅ Configura Google Analytics para rastrear contactos
2. ✅ Agrega confirmación visual cuando se envía
3. ✅ Crea respuesta automática para usuarios (opcional)
4. ✅ Monitorea tus límites de emails en EmailJS

---

**¿Necesitas ayuda?** Revisa la sección [Troubleshooting](#troubleshooting) o contacta a [EmailJS Support](https://www.emailjs.com/contact/)
