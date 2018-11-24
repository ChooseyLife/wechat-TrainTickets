let https = require('https')
let Promise = require('bluebird')

'use strict'
class Request {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    get(config) {
        return new Promise((resolve, reject) => {
            let dataBuf = ''
            let resData = {}
            https.get(config, (res) => {
                res.on('data', (d) => {
                    dataBuf += d
                })
                res.on('end', () => {
                    try {
                        resData = JSON.parse(dataBuf)
                    }
                    catch (e){
                        resolve({error: e, info: dataBuf})
                        return
                    }
                    if(!resData.status) {
                        resolve({error:resData.status})
                        return
                    }
                    resolve(resData)    
                })
            }).on('error', (e) => {
                resolve({error: e, info: dataBuf})
            })
        })
    }
}

module.exports = new Request()