'use strict'
let https = require('https')
let Promise = require('bluebird')
let fs = require('fs')
let requestApi = require('./public/js/request')

let CA_Cert = fs.readFileSync('./public/cert/srca_der.cer');

let options = {
    rejectUnauthorized: false,  	 // 如果报错"SELF_SIGNED_CERT_IN_CHAIN"，则必须加上这个设置
    hostname: 'kyfw.12306.cn',		 //12306官网
    ca : [CA_Cert],
    headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    },
}

async function getQueryPrice(config) {
    /*
    * 9: "5065"
    * A9: "¥506.5" 商务
    * M: "¥269.0"  一等座
    * O: "¥169.0"  二等座
    * OT: []
    * WZ: "¥169.0" 无座
    * train_no: "6i000G291605" 
    */
   let query_lefttickets = 'leftTicket/query?'
        +'train_no='+config.train_no
        +'&from_station_no='+config.from_station_no
        +'&to_station_no='+config.to_station_no
        +'&seat_types='+config.seat_types
        +'&train_date='+config.train_date
    
    options.path = '/otn/'+query_lefttickets
    options.query_lefttickets = query_lefttickets     
    return await QueryPrice(options)
}

async function getQueryTicket(config){
    let query_lefttickets = 'leftTicket/queryTicketPrice?'
    +'train_no='+config.train_no
    +'&from_station_no='+config.from_station_no
    +'&to_station_no='+config.to_station_no
    +'&seat_types='+config.seat_types
    +'&train_date='+config.train_date
    
    options.path = '/otn/'+query_lefttickets
    options.query_lefttickets = query_lefttickets  

    return await QueryTicket(options)
}

const QueryTicket = (config) => {

}

const QueryPrice = (config) => {
    return new Promise((resolve, reject) => {        
        requestApi.get(options).then(res => {
            resolve(res)
        })
    })
}


module.exports = {
    QueryPrice: getQueryPrice
}