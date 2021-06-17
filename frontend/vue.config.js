const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8000',
        changeOrigin: true,
      },
    },
  },

  outputDir: path.resolve(__dirname, '../backend/public'),
  assetsDir: './dist',

  indexPath: path.resolve(__dirname, '../backend/resources/views/index.html'),
};
