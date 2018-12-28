class lib {
	/**
   * 返回JSON信息到页面
   * @param {JSON} data 
   * @param {InstanceType} status 
   * @param {String} message 
   */
	message(data, status, message) {
		return {
			status: status ? status : 10000,
			data,
			message: message ? message : '',
		};
	}
}
module.exports = lib;
