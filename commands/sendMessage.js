const { SlashCommandBuilder } = require("discord.js");
const data = require("../data.json");
const { setTimeout: wait } = require("node:timers/promises");
const cron = require("node-cron");

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
        cron.schedule("* * * * * *", async () => {
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
        console.log("停止中だじょー");
      }
    },
  },
];

/*
          interaction.channel.send("('ε' )くー");
          interaction.channel.send("('ㅂ' ) り");
          interaction.channel.send("('ε' )す");
          interaction.channel.send("('□' )ま");
          interaction.channel.send("('ε' )す");
          interaction.channel.send("('□' )が");
          interaction.channel.send("('ﾛ' )こ");
          interaction.channel.send("('ﾛ' )と");
          interaction.channel.send("('ㅂ' )し");
          interaction.channel.send("('ﾛ' )も");
          interaction.channel.send("('□' )やーっ");
          interaction.channel.send("('ㅂ' )て");
          interaction.channel.send("('ﾛ' )こ");
          interaction.channel.send("('□' )な");
          interaction.channel.send("('ㅂ' )い");

           */

/*
実験は失敗。
けれど失敗は必ずしもくじける要因ではない
しかし
くじけた
例外ってやつ
await interaction.reply("('ε' )くー");
          await interaction.editReply("('ε' )くー\n" + "('ㅂ' ) り");
          await interaction.editReply(
            "('ε' )くー\n" + "('ㅂ' ) り\n" + "('ε' )す",
          );
          await interaction.editReply(
            "('ε' )くー\n" + "('ㅂ' ) り\n" + "('ε' )す\n" + "('□' )ま",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す\n" +
              "('□' )が",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す\n" +
              "('□' )が\n" +
              "('ﾛ' )こ",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す\n" +
              "('□' )が\n" +
              "('ﾛ' )こ\n" +
              "('ﾛ' )と",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す\n" +
              "('□' )が\n" +
              "('ﾛ' )こ\n" +
              "('ﾛ' )と\n" +
              "('ㅂ' )し",
          );
          await interaction.editReply(
            "('ε' )くー\n" +
              "('ㅂ' ) り\n" +
              "('ε' )す\n" +
              "('□' )ま\n" +
              "('ε' )す\n" +
              "('□' )が\n" +
              "('ﾛ' )こ\n" +
              "('ﾛ' )と\n" +
              "('ㅂ' )し\n" +
              "('ﾛ' )も",
          );
          await interaction.editReply(
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
              "('□' )やーっ",
          );
          await interaction.editReply(
            "('ㅂ' )て('ε' )くー\n" +
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
              "('ㅂ' )て",
          );
          await interaction.editReply(
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
              "('ﾛ' )こ",
          );
          await interaction.editReply(
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
              "('□' )な",
          );
          await interaction.editReply(
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
              "('ㅂ' )い",
          );
          //await wait(1000);
          await interaction.channel.send("# ('-' )");
 */
