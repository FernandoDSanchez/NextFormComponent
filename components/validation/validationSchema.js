import * as yup from 'yup';
const url = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm


export const validationSchemas = {
  description: yup.object().shape({
    description: yup
      .string()
      .required("📝 ¡Vaya! Parece que te has saltado la descripción.")
      .max(50, "⚠️ ¡Espera! La descripción no puede tener más de 50 caracteres."),
  }),
  dateOfBirth: yup.object().shape({
    dateOfBirth: yup.date()
    .required("🎂 ¡Hey! Nos encantaría conocer tu cumpleaños."),
  }),
  email: yup.object().shape({
    email: yup
      .string()
      .email('📧 Hmm... Ese correo electrónico no parece correcto.')
      .required('📧 ¡Necesitamos tu correo electrónico aquí!')
      .max(100, "⏳ ¡Vaya, eso es un correo electrónico largo! ¿Podemos mantenerlo por debajo de los 100 caracteres?"),
  }),
  profilePicture: yup.object().shape({
    profilePicture: yup
      .mixed()
      .test('fileSize', '📁 ¡Vaya, ese es un archivo grande! Intenta mantenerlo por debajo de 5MB.', (value) => {
        if (!value) return true; 
        return value.size <= 5000000; 
      })
      .test('fileType', "🖼️ ¡Vaya! Sólo aceptamos tipos de archivo .png y .jpeg.", (value) => {
        if (!value) return true; 
        return value.type === 'image/png' || value.type === 'image/jpeg';
      }),
  }),
  country: yup.object().shape({
    country: yup.string().required('🌍 ¡Vaya! Parece que te has saltado tu país.'),
  }),
  bio: yup.object().shape({
    bio: yup.string().max(500, '📚 ¡Vaya, tienes mucho que decir! ¿Podemos mantenerlo por debajo de los 500 caracteres?'),
  }),
  social: yup.object().shape({
    social: yup
      .string()
      .matches(url,"💻 ¡Hmm, parece que ese no es un enlace URL válido!")
      .notRequired(),
  }),
  description: yup.object().shape({
    description: yup
      .string()
      .required("📝 ¡Vaya! Parece que te has saltado la descripción.")
      .max(50, "⚠️ ¡Espera! La descripción no puede tener más de 50 caracteres."),
  }),
  dateOfBirth: yup.object().shape({
    dateOfBirth: yup.date()
    .required("🎂 ¡Hey! Nos encantaría conocer tu cumpleaños."),
  }),
  email: yup.object().shape({
    email: yup
      .string()
      .email('📧 Hmm... Ese correo electrónico no parece correcto.')
      .required('📧 ¡Necesitamos tu correo electrónico aquí!')
      .max(100, "⏳ ¡Vaya, eso es un correo electrónico largo! ¿Podemos mantenerlo por debajo de los 100 caracteres?"),
  }),
  profilePicture: yup.object().shape({
    profilePicture: yup
      .mixed()
      .test('fileSize', '📁 ¡Vaya, ese es un archivo grande! Intenta mantenerlo por debajo de 5MB.', (value) => {
        if (!value) return true; 
        return value.size <= 5000000; 
      })
      .test('fileType', "🖼️ ¡Vaya! Sólo aceptamos tipos de archivo .png y .jpeg.", (value) => {
        if (!value) return true; 
        return value.type === 'image/png' || value.type === 'image/jpeg';
      }),
  }),
  website: yup.object().shape({
    website: yup
      .string()
      .matches(url,"💻 ¡Hmm, parece que ese no es un enlace URL válido!")
      .notRequired(),
  }),
};