
const Discord = require("discord.js");
const miscSettings = require("../cfg/settings.json");
var getJSON = require('get-json');

exports.run = (client, message, args) => {
  var btcPrice = getJSON('https://maplechange.com/api/v2/tickers/waebtc.json', function(error, response){
		if(!error) {
      var buy = response["ticker"]["buy"];
      var sell = response["ticker"]["sell"];
      var low = response["ticker"]["low"];
      var high = response["ticker"]["high"];
      var last = response["ticker"]["last"];
      var vol = response["ticker"]["vol"];
      var volbtc = response["ticker"]["volbtc"];
      var change = response["ticker"]["change"];
      const embed = new Discord.RichEmbed()
        .setTitle("Maple Change Discord Bot.")
        .setAuthor("MCX", miscSettings.img32x32)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(miscSettings.msgcolor)
        .setDescription(":ledger: Maplechange WeyCoin Market Data:")
        .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
        .setThumbnail(miscSettings.imgWAE)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://github.com/TeamEGEM/maplebot")
        .addField("Buy", buy+" BTC", true)
        .addField("Sell", sell+" BTC", true)
        .addField("Low", low+" BTC", true)
        .addField("High", high+" BTC", true)
        .addField("Last", last+" BTC", true)
        .addField("Volume", vol+" WAE", true)
        .addField("Volbtc", volbtc+" BTC", true)
        .addField("Change", change+" %", true)
        .addField("Quick links:","Direct links to Maplechange.com trade page.")
        .addField("Bitcoin Pair", "[BTC/WAE :scales:](https://maplechange.com/markets/waebtc)", true)
        .addField("Litecoin Pair", "[LTC/WAE :scales:](https://maplechange.com/markets/waeltc)", true)
        .addField("Ethereum Pair", "[ETH/WAE :scales:](https://maplechange.com/markets/waeeth)", true)

        message.channel.send({embed})
		} else {
			console.log('**MCX BOT** Maplechange MARKET API ISSUE!');
		}
	})
}