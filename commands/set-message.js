const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName("set-message")
      .setDescription("メッセージに関する設定をします")
      .addBooleanOption((option) =>
        option
          .setName("come-message")
          .setDescription("メッセージを送信するか設定できます(default: ture)")
          /*.setDefaultMemberPermissions(1<<3)
                    .setDMPermission(false)*/
          .setRequired(true),
      ),

    async execute(interaction) {
      //await interaction.deferReply({ephemeral: true});
      await interaction.reply("nunti");
    },
  },
];
