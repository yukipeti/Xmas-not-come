const { SlashCommandBuilder } = require("discord.js");

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
      await interaction.deferReply({ ephemeral: true });
      sendMessage = interaction.options.getBoolean("come-message");

      console.log(`${sendMessage}`);

      await interaction.editReply(
        `メッセージの送信が${sendMessage}に変更されました`,
      );
    },
  },
];
module.exports = function getCome() {
  return sendMessage;
};
