
const Discord = require("discord.js");
const miscSettings = require("../cfg/settings.json");
var getJSON = require('get-json');

exports.run = (client, message, args) => {
  var btcPrice = getJSON('https://api.coinmarketcap.com/v1/ticker/digibyte/', function(error, response){
		if(!error) {
      var dgbPrice = response[0]["price_usd"];
      var change1h = response[0]["percent_change_1h"];
      var change24h = response[0]["percent_change_24h"];
      var change7d = response[0]["percent_change_7d"];

      const embed = new Discord.RichEmbed()
        .setTitle("Maple Change Discord Bot.")
        .setAuthor("MCX", miscSettings.img32x32)

        .setColor(miscSettings.msgcolor)
        .setDescription(":ledger: Maple Change DGB Market Data:")
        .setFooter(miscSettings.footerBranding, miscSettings.img32x32)
        .setThumbnail(miscSettings.imgDGB)

        .setTimestamp()
        .setURL("https://github.com/TeamEGEM/maplebot")
        .addField("Website:", "https://digibyte.io/")
        .addField("Price", dgbPrice+" USD")
        .addField("Change 1 Hour", change1h+" %")
        .addField("Change 24 Hour", change24h+" %")
        .addField("Change 7 Days", change7d+" %")


        message.channel.send({embed})
		} else {
			console.log('**MCX BOT** Maple Change MARKET API ISSUE!');
		}
	})
}
