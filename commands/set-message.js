const { SlashCommandBuilder } = require("discord.js");
const data = require("../data.json");

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
          .setDescription("メッセージを送信するか設定できます")
          .setRequired(true),
      ),

    async execute(interaction) {
      await interaction.deferReply({ ephemeral: true });

      data.comeSet = interaction.options.getBoolean("come-message");
      await interaction.editReply(
        `メッセージの送信が${data.comeSet}に変更されました`,
      );
    },
  },
];
