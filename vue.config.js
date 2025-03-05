const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 8083 // doit etre le meme que dans le server.js   origin: 'http://localhost:8083',
  }
}
