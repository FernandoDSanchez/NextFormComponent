export const ContactInputConfig = {
  "welcomePage": {
    "title": 'Solicitud de Experto en Orum 🚀',
    "description": 'Vence al reloj ⏰ y conviértete en un experto en solo 5 minutos!',
    "buttonText": "Vamos a rockear"
  },
  "collectionName": "nuevos-expertos",
  "inputs": [
    {
      "name": "website",
      "type": "url",
      "placeholder": "https://www.tu-sitio-web.com",
      "title": "Sitio web",
      "required": true,
      "helpText": "Si tienes un sitio web, ¡déjanos el enlace aquí! Es opcional, pero siempre útil para conocerte mejor. 💻",
      "validated": "¡El sitio web se ve genial!"
    },
    {
      "name": "social",
      "type": "social",
      "placeholder": "https://www.tu-red-social.com/tu-nombre",
      "title": "Redes sociales",
      "required": false,
      "helpText": "¿Tienes perfiles en las redes sociales que te gustaría compartir? ¡Nos encantaría seguirte! 🎉",
      "validated": "¡Estos enlaces a las redes sociales son perfectos!"
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
      "name": "description",
      "type": "text",
      "placeholder": "Tu respuesta va aqui...",
      "title": "Tu dolor de Marketing Analytics 🤕",
      "required": true,
      "max": 50,
      "helpText": "¿Tienes algún problema de marketing analítico? Dilo en 50 caracteres o menos. ¡Es como Twitter, pero más secreto! 🦸‍♀️",
      "validated": "¡Tu descripción encaja perfectamente!"
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
      "name": "country",
      "type": "select",
      "placeholder": "Tu país aquí 🌍",
      "title": "País",
      "required": true,
      "options": ["Estados Unidos", "Canadá", "México"],
      "helpText": "¡Dinos dónde estás mandando! 👑",
      "validated": "¡País seleccionado correctamente!"
    },
    {
      "name": "bio",
      "type": "textarea",
      "placeholder": "Cuenta algo sobre ti 👤",
      "title": "Biografía",
      "required": false,
      "max": 500,
      "helpText": "¿Tienes alguna curiosidad o dato curioso sobre ti? ¡Déjalos aquí! Es opcional pero siempre divertido! 🎭",
      "validated": "¡Buena biografía, pareces interesante!"
    }
  ],
  "button": {
    "text": "Todo listo, ¡transpórtame! 🛸",
    "tailwindClasses": "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  },
}