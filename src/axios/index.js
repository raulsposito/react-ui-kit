import axios from 'axios'
import humps from 'humps'

// import { message } from '@messages/factory'

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    T1Authorization: process.env.REACT_APP_UUID,
    'Content-Type': 'application/json'
  },
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data)
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest
  ]
})

Axios.interceptors.response.use(
  response => response.data,
  error => {
    // TODO: UNCOMMENT THIS
    // const generic = 'GENERIC'

    // const { data, status } = error.response
    // if (status === 500) {
    //   message.error(generic)
    // } else {
    //   const { resData: { response } } = data
    //   const msg = response.showUser && response.message ? response.message : generic
    //   message.error(msg)
    // }

    throw error
  }
)

export default Axios
