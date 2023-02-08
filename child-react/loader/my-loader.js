/**
 * @see https://github.com/webpack/webpack/wiki/Loader-Specification
 */
module.exports = function (content) {
  return 'module.exports = ' + JSON.stringify(content.toString());
};