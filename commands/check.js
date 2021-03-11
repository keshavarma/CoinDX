const KeyManager = require("../lib/KeyManager");
const cryptoApi = require("../lib/cryptoApi");
const colors = require("colors");

const check = {
	async price(cmd) {
		try {
			keyManager = new KeyManager();
			const key = keyManager.getKey();

			const api = new cryptoApi(key);

			const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

			console.log(priceOutputData);
		} catch (error) {
			console.error(error.message.red);
		}
	},
};

module.exports = check;
