// /* eslint-disable max-len */

// import { MESSAGE_TYPE } from 'global/constants'

// const ERROR = {
//   GENERIC: 'Ups, algo salió mal. Por favor vuelva a probar más tarde',
//   'No se creo al cliente, ocurrio algun error':
//       'No se creo al cliente, ocurrió algún error. Por favor pruebe más tarde.',
//   'Value for this field(uruguay_registration) must be True': 'El automóvil debe estar matriculado en Uruguay
//     para que podamos cotizar coberturas de seguro.',
//   'Error al verificar formulario: Matricula y Padron deben tener valor':
//        'Por favor complete los campos Matrícula y Padrón para poder continuar.'
// }

// const SUCCESS = {}

// const WARNING = {}

// const INFO = {}

// export const getRealMessage = ({ type, message }) => {
//   const check = type === MESSAGE_TYPE.SUCCESS ? SUCCESS
//     : type === MESSAGE_TYPE.INFO ? INFO
//       : type === MESSAGE_TYPE.WARNING ? WARNING : ERROR

//   return check[message] || message
// }
