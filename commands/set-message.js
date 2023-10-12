const { SlashCommandBuilder } = require("discord.js");
const cron = require("node-cron");

const sendDate = "0 39 15 12 10 *";
let sendMessage = true;

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName("set-message")
      .setDescription("メッセージに関する設定をします")
      .setDefaultMemberPermissions(1 << 3)
      .setDMPermission(false)
      .addBooleanOption((option) =>
        option
          .setName("come-message")
          .setDescription("メッセージを送信するか設定できます(default: true)")
          .setRequired(true),
      ),

    async execute(interaction) {
      await interaction.deferReply({ ephemeral: false });
      console.log(sendMessage);
      sendMessage = interaction.options.getBoolean("come-message");
      console.log(sendMessage);

      //console.log(`${sendMessage}`);

      await interaction.editReply(
        `メッセージの送信が${sendMessage}に変更されました`,
      );

      if (sendMessage === true) {
        cron.schedule("* * * * * *", () => {
          interaction.channel.send("彼女いない歴 = 年齢乙");
        });
      } else {
        interaction.channel.send("彼女とは");
      }
    },
  },
];
