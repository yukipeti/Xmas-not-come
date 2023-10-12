const item = require("../index.js");
const cron = require("node-cron");

exports.omg = function omg(interaction) {
  if (item.sendMessage === true) {
    cron.schedule("* * * * * *", () => {
      interaction.channel.send("彼女いない歴 = 年齢乙");
    });
  } else if (item.sendMessage === false) {
    interaction.channel.send("彼女とは");
  } else {
    interaction.channel.send("虚無虚無");
  }
};
