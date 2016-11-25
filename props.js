module.exports = function props(props, obj) {
  return props.reduce((out, prop) => {
    out[prop] = obj[prop]
    return out
  }, {})
}
