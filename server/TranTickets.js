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
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
    }
}

async function getQueryPrice(config) {
    /*
    * 票价查询
    * 9: "5065"
    * A9: "¥506.5" 商务
    * M: "¥269.0"  一等座
    * O: "¥169.0"  二等座
    * OT: []
    * WZ: "¥169.0" 无座
    * train_no: "6i000G291605" 
    */
   let query_lefttickets = 'leftTicket/queryTicketPrice?'
                            +'train_no='+config.train_no
                            +'&from_station_no='+config.from_station_no
                            +'&to_station_no='+config.to_station_no
                            +'&seat_types='+config.seat_types
                            +'&train_date='+config.train_date
    
    options.path = '/otn/'+query_lefttickets
    return await requestApi.get(options)
}

async function getQueryTicket(config){
    let query_lefttickets = 'leftTicket/query?'
                            +'leftTicketDTO.train_date='+config.date
                            +'&leftTicketDTO.from_station='+config.from_station
                            +'&leftTicketDTO.to_station='+config.end_station
                            +'&purpose_codes=ADULT';
    
    options.path = '/otn/'+query_lefttickets
    options.query_lefttickets = query_lefttickets  

    return await requestApi.get(options)
}

async function getQueryStations(config){
    let query_lefttickets = 'czxx/queryByTrainNo?'
                            +'train_no='+config.train_no
                            +'&from_station_telecode='+config.from_station
                            +'&to_station_telecode='+config.end_station
                            +'&depart_date='+config.date;
    
    options.path = '/otn/'+query_lefttickets
    options.query_lefttickets = query_lefttickets  

    return await requestApi.get(options)
}

async function updateStations(config){
    let query_lefttickets = 'leftTicket/query?'
                            +'leftTicketDTO.train_date='+config.date
                            +'&leftTicketDTO.from_station='+config.from_station
                            +'&leftTicketDTO.to_station='+config.end_station
                            +'&purpose_codes=ADULT';
    
    options.path = '/otn/'+query_lefttickets
    options.query_lefttickets = query_lefttickets  

    return await requestApi.get(options)
}

module.exports = {
    QueryPrice: getQueryPrice,
    QueryTicket: getQueryTicket,
    QueryStations: getQueryStations,
    updateStation: updateStations
}