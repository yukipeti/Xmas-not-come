const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName("test")
      .setDescription("テストだにょーん"),
    async execute(interaction) {
      await interaction.reply("にょ");
    },
  },
];
