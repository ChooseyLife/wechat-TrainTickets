'use strict'
let https = require('https')
let Promise = require('bluebird')
let fs = require('fs')

let CA_Cert = fs.readFileSync('./public/cert/srca_der.cer');

async function getQueryPrice(config) {
    let result = await QueryPrice(config)
    return result
}

const QueryPrice = (config) => {
    return new Promise((resolve, reject) => {
        let query_lefttickets = 'leftTicket/queryTicketPrice?'
        +'train_no='+config.train_no
        +'&from_station_no='+config.from_station_no
        +'&to_station_no='+config.to_station_no
        +'&seat_types='+config.seat_types
        +'&train_date='+config.train_date;
        let options = {
            rejectUnauthorized: false,  	 // 如果报错"SELF_SIGNED_CERT_IN_CHAIN"，则必须加上这个设置
            hostname: 'kyfw.12306.cn',		 //12306官网
            path: '/otn/'+query_lefttickets,
            query_lefttickets,
            ca : [CA_Cert],
            headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
            },
        }
        let DataBuf = ""
        https.get(options, (res) => {
            console.log('状态码:', res.statusCode)
            console.log('请求头:', res.headers)
            res.on('data', (d) => {
                DataBuf += d
            })
            res.on('end', () => {
                let resData = {}
                resData = JSON.parse(DataBuf)
                console.log(resData.data)
                resolve(resData)
            })
        }).on('error', (e) => {
            console.error(e)
        })
        /*
        let req = https.get(options, function(res){ 
            res.on('data',function(buf){
                DataBuf += buf;
            }); 
    
            res.on('end',function(){
                var resdata = {};
                console.log(DataBuf)
                try{
                    // resdata = JSON.parse(DataBuf);
                }
                catch(e) {
                    console.log(e)
                   // reject({error:e, info:DataBuf}, null);
                    return
                }
                var data = resdata.data;
                reject(null, data);
            });
        });
    
        req.on('error', function(err){
            reject(err, null);
            console.error(err.code);
        })
        */
    })
}

module.exports = {
    QueryPrice: getQueryPrice
}