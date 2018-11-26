/* eslint-disable no-new */
function toUrlParams(opt) {
  let arr = []
  for (let k in opt) {
    arr.push(k + '=' + opt[k])
  }
  return arr.join('&')
}

/* eslint-disable no-new */
export function request(url, option, method, cb) {
  let xhr = new XMLHttpRequest()
  let params = method === 'POST' ? this.toUrlParams(option) : option
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhr.send(params)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        cb(JSON.parse(xhr.responseText))
      }
    }
  }
}

