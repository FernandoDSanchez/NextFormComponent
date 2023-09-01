export const ContactInputConfig = {
  "welcomePage": {
    "title": 'Solicitud de Experto en Orum 🚀',
    "description": 'Vence al reloj ⏰ y conviértete en un experto en solo 5 minutos!',
    "buttonText": "Vamos a rockear"
  },
  "collectionName": "nuevos-expertos",
  "inputs": [
    {
      "name": "name",
      "type": "text",
      "placeholder": "Tu nombre completo aquí 📝",
      "title": "Nombre",
      "required": true,
      "max": 200,
      "helpText": "Nos encantaría saber cómo te llamas. ¡No te preocupes, mantendremos esto en la familia Orum! 🤗",
      "validated": "¡Nombre registrado con éxito!"
    },
    {
      "name": "email",
      "type": "email",
      "placeholder": "nombre@ejemplo.com",
      "title": "Correo Electrónico",
      "required": true,
      "max": 100,
      "helpText": "Aquí es donde enviaremos el certificado de '¡eres un experto!', ¡así que nada de travesuras! 🏆",
      "validated": "¡Tu correo electrónico es correcto!"
    },
    {
      "name": "dateOfBirth",
      "type": "date",
      "title": "Fecha de nacimiento 🎂",
      "required": true,
      "helpText": "¿Cuándo empezaste a causar caos por primera vez? No le diremos a nadie, ¡lo prometemos! 🤞",
      "validated": "¡La fecha de nacimiento se ve bien!"
    },
    {
      "name": "country",
      "type": "select",
      "placeholder": "Tu país aquí 🌍",
      "title": "País",
      "options" : ["Colombia", "Chile", "Mexico"],
      "required": true,
      "helpText": "¡Dinos dónde estás viviendo!",
      "validated": "¡País seleccionado correctamente!"
    },
    {
      "name": "profilePicture",
      "type": "file",
      "placeholder": "Sube tu foto cool 📸",
      "title": "Foto de Perfil",
      "required": false,
      "maxSize": 5000000, // max file size in bytes
      "accept": "image/png, image/jpeg", // file types to accept
      "helpText": "¿Quién es esa persona guapa? 🤩 Recuerda, mantenlo por debajo de 5MB y en formato .png o .jpg!",
      "validated": "¡Bonita foto!"
    },
    {
      "name": "website",
      "type": "url",
      "placeholder": "https://www.tu-sitio-web.com",
      "title": "Sitio web",
      "required": false,
      "helpText": "Si tienes un sitio web, ¡déjanos el enlace aquí! Es opcional, pero siempre útil para conocerte mejor. 💻",
      "validated": "¡El sitio web se ve genial!"
    },
    {
      "name": "expertDescription",
      "type": "textarea",
      "placeholder": "Describe quién eres y los servicios de bienestar que ofreces",
      "title": "Descripción del experto y servicios",
      "required": true,
      "max": 500,
      "helpText": "¿Eres un experto en yoga, meditación o nutrición? Cuéntanos más sobre tus habilidades y cómo puedes ayudar a nuestra comunidad. ¡Incluso puedes añadir alguna anécdota divertida! 😄",
      "validated": "¡Descripción impresionante, tu experiencia y servicios suenan emocionantes! 🌟"
    }
],
  "button": {
    "text": "Todo listo, ¡transpórtame! 🛸",
    "tailwindClasses": "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  },
}