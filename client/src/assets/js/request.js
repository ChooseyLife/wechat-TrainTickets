let optArr = []
export function toUrlParams(opt, oarr) {
  let options = opt
  for (let k in options) {
    if (typeof options[k] === 'object') {
      console.log('object:', options[k], k)
      toUrlParams(options[k])
    } else {
      optArr.push(k + '=' + options[k])
    }
  }
  return optArr.join('&')
}

export function request(url, option, method, cb) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send((option))
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 304) {
        cb(JSON.parse(xhr.responseText))
      }
    }
  }
}
