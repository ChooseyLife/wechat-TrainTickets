const train = require('../../TranTickets');
const lib = require('../../lib');
class apiController extends lib {
	/**
   * price
   */
	async price(ctx, next) {
		let data = ctx.request.body;
		const result = await train.QueryPrice(data);
		ctx.body = message(result);
  }
  /**
   * ticket
   */
	async ticket(ctx, next) {
		let params = ctx.request.body;
		let results = await train.QueryTicket(params);
		let train_message = null;
		if (!results.error) {
			train_message = this.handleTickets(results);
		} else {
			results.message = '没有该列车信息';
			train_message = results;
		}

		ctx.body = train_message;
  }
  /**
   * station
   */
	async station(ctx, next) {
		let data = ctx.request.body;
		ctx.body = await train.QueryStations(data);
  }
  /**
   * updateStations
   */
	async updateStations(ctx, next) {
		ctx.body = await train.updateStations();
	}
  /**
   * handleTickets
   */
	handleTickets(trainArray) {
		let { flag, map, result } = trainArray.data;

		let train_tickets = {
			flag: null,
			map: null,
			result: [],
		};
		// 处理from_station,to_from转中文，座位数量处理，到达时间处理
		result.forEach((val) => {
			let list = {};
			let r = val.split('|');
			list.train_no = r[2];
			list.train_Id = r[3];
			list.fStation = this.transtionCode(r[6], map);
			list.tStation = this.transtionCode(r[7], map);
			list.depart = r[8];
			list.arrive = r[9];
			list.total_time = r[10];
			list.train_date = r[13];
			list.from_station_no = r[16];
			list.to_station_no = r[17];
			list.ruanwo = r[23];
			list.ruanSeat = r[24];
			list.wuSeat = r[26];
			list.yingwo = r[28];
			list.yingSeat = r[29];
			list.scSeat = r[30];
			list.ftSeat = r[31];
			list.bsSeat = r[32];
			list.dongwo = r[33];
			list.seat_types = r[35];
			train_tickets.result.push(list);
		});
		train_tickets.flag = flag;
		train_tickets.map = map;
		train_tickets.status = trainArray.status;
		train_tickets.httpstatus = trainArray.httpstatus;
		return train_tickets;
	}
  /**
   * transtionCode
   */
	transtionCode(code, map) {
		if (map) {
			let name = map[code];
			if (name) {
				return name;
			}
		}
		return code;
	}
}

module.exports = new apiController();