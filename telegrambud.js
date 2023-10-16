const { Telegraf } = require("telegraf");

const bot = new Telegraf("6573100860:AAHKJzYD-45dkLN3bd3erhlVnxPvl6pHcVA");

bot.start((ctx) => {
  ctx.reply("welcome to littleBuds");
});
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))



bot.launch();

/**
 * 
 * 
 */