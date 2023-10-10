const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Pong!と返信。"),
    async execute(interaction) {
      await interaction.reply(
        "('ε' )くー\n" +
          "('ㅂ' ) り\n" +
          "('ε' )す\n" +
          "('□' )ま\n" +
          "('ε' )す\n" +
          "('□' )が\n" +
          "('ﾛ' )こ\n" +
          "('ﾛ' )と\n" +
          "('ㅂ' )し\n" +
          "('ﾛ' )も\n" +
          "('□' )やーっ\n" +
          "('ㅂ' )て\n" +
          "('ﾛ' )こ\n" +
          "('□' )な\n" +
          "('ㅂ' )い\n" +
          "('-' )",
      );
    },
  },
];
