let Router = require('koa-router');
let router = new Router();
const apiController = require('../app/controller/api');
router.post('/price', apiController.price);

router.post('/ticket', apiController.ticket);

router.post('/station', apiController.station);

router.post('/updateStations', apiController.updateStations);

module.exports = {
	router: router,
};
