const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@axios': path.resolve(__dirname, 'src/axios/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@global': path.resolve(__dirname, 'src/global/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@messages': path.resolve(__dirname, 'src/messages/')
    },
    esling: {
      failOnError: false,
      failOnWarning: false
    }
  }
}
