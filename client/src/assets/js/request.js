export function toUrlParams(opt) {
  let arr = []
  for (let k in opt) {
    arr.push(k + '=' + opt[k])
  }
  return arr.join('&')
}

export function request(url, option, method, cb) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.send(toUrlParams(option))
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        cb(JSON.parse(xhr.responseText))
      }
    }
  }
}
