
const Discord = require("discord.js");
const miscSettings = require("../cfg/settings.json");
var getJSON = require('get-json');

exports.run = (client, message, args) => {
  var btcPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/', function(error, response){
		if(!error) {
      var ethPrice = response[0]["price_usd"];
      var change1h = response[0]["percent_change_1h"];
      var change24h = response[0]["percent_change_24h"];
      var change7d = response[0]["percent_change_7d"];

      const embed = new Discord.RichEmbed()
        .setTitle("Maple Change Discord Bot.")
        .setAuthor("MCX", miscSettings.img32x32)
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(miscSettings.msgcolor)
        .setDescription(":ledger: Maple Change ETH Market Data:")
        .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
        .setThumbnail(miscSettings.imgETH)
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://github.com/TeamEGEM/maplebot")
        .addField("Website:", "https://ethereum.org/")
        .addField("Price", ethPrice+" USD")
        .addField("Change 1 Hour", change1h+" %")
        .addField("Change 24 Hour", change24h+" %")
        .addField("Change 7 Days", change7d+" %")


        message.channel.send({embed})
		} else {
			console.log('**MCX BOT** Maple Change MARKET API ISSUE!');
		}
	})
}
