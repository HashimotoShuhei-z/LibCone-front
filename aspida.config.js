module.exports = {
  input: 'src/api',
  outputEachDir: true, // エンドポイントごとにディレクトリを生成
  openapi: { inputFile: 'openapi/openapi.yml' }
}
