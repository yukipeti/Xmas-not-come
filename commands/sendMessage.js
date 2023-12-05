const { SlashCommandBuilder } = require("discord.js");
const data = require("../data.json");
const { setTimeout: wait } = require("node:timers/promises");
const cron = require("node-cron");

const Xmas = "0 0 0 24 12 *";

module.exports = [
  {
    data: new SlashCommandBuilder()
      .setName("set-come-xmas")
      .setDescription("送信するメッセージに関する設定をします")
      .setDefaultMemberPermissions(1 << 3)
      .setDMPermission(false)
      .addBooleanOption((option) =>
        option
          .setName("come-xmas")
          .setDescription("クリスマスが来るのかどうかの設定ができます")
          .setRequired(true),
      ),

    async execute(interaction) {
      await interaction.deferReply({ ephemeral: true });

      data.come = interaction.options.getBoolean("come-xmas");

      await interaction.editReply(
        `comeXmasの判定が${data.come}に設定されました`,
      );

      if (data.comeSet === true) {
        cron.schedule(Xmas, async () => {
          if (data.come === true) {
            await interaction.channel.send(
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
                "('ε' )く\n" +
                "☝(^ε^ )☝るぅ\n",
            );
          } else if (data.come === false) {
            await interaction.channel.send(
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
                "('ㅂ' )い\n",
            );
            await wait(3000);
            await interaction.channel.send("# ('-' )");
          }
        });
      } else if (data.comeSet === false) {
        console.log("kitanai desu jyo");
      }
    },
  },
];
