'use strict'
const comma = function(source, length = 3) {
  source = String(source).split(".");
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), "$1,");
  return source.join(".");
}

const pad = function(source, length = 2) {
  let pre = ""
  const negative = source < 0
  const string = String(Math.abs(source))
  if (string.length < length) {
    pre = (new Array(length - string.length + 1)).join('0')
  }
  return (negative ? "-" : "") + pre + string
}

const random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const range = function(start, end, padWidth = 2) {
  const rs = []
  while (start <= end) {
    rs.push(padWidth ? pad(start, padWidth) : start)
    start++
  }
  return rs
}

export default {
  comma,
  pad,
  random,
  range
}
