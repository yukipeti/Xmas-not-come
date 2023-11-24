const cron = require("node-cron");
const data = require("../data.json");

exports.omg = function omg(interaction) {
  cron.schedule("0 14 10 24 11 *", async () => {
    if (data.comeSet === true) {
      await interaction.channel.send("comeSet-true");
    } else if (data.comeSet === false) {
      await interaction.channel.send("comeSet-false");
    } else {
      await interaction.channel.send("panic");
    }
  });
};
