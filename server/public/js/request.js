let https = require('https')
let Promise = require('bluebird')

'use strict'
class Request {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    get(config, cb) {
        let dataBuf = ''
        https.get(config, (res) => {
            res.on('data', (d) => {
                dataBuf += d
            })
            res.on('end', () => {
                try {
                    let resData = JSON.parse(dataBuf)
                }
                catch (e){
                    cb({error: e, info: dataBuf})
                }

            })
        }).on('error', (e) => {
            reject(e)
        })
    }
}

module.exports = new Request()