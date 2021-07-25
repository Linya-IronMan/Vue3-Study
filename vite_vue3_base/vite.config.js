const path = require("path");

function pathResolve(dir) {
  return path.resolve(__dirname, ".", dir);
}

module.exports = {
  // 服务端渲染
  ssr: false,
  // 是否开启 https
  https: false,
  // 设置目录别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 跨域设置
  proxy: {
    // 如果是 /api 开头，则访问如下地址
    // '/api': 'http://10.7.40.138:8080',
  },
  // 引入第三方的配置
  optimizeDeps: {
    // include: ["moment", "echarts", "axios", "mockjs", "@ant-design/icons-vue"]
  },
};
