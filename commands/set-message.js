const { SlashCommandBuilder } = require("discord.js");
const test = require("../function/change-func.js");

const sendDate = "59 59 23 13 10 *";
export let changed = true;

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

      changed = interaction.options.getBoolean("come-message");

      await interaction.editReply(
        `メッセージの送信が${changed}に変更されました`,
      );
    },
  },
];
