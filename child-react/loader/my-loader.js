module.exports = function(content) {

  // 必須導出js或是二進制
  return `export default ${JSON.stringify({
    aaa: 'fjeoifjwo'
  })}`
}