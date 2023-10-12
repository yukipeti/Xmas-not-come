const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

//関数読み込み
const changeFnc = require("./function/change-func.js");
const send = require("./function/sendMessage-func.js");

// commandsフォルダから、.jsで終わるファイルのみを取得
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const commands = require(filePath);

  for (const command of commands) {
    //console.log(command);
    if (command.data && command.execute) {
      client.commands.set(command.data.name, command);
    } else {
      console.error(
        `[WARNING]  ${filePath} のコマンドには、必要な "data" または "execute" プロパティがありません。`,
      );
    }
  }
}

// コマンドが送られてきた際の処理
client.on(Events.InteractionCreate, async (interaction) => {
  // コマンドでなかった場合は処理せずさよなら。
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);
  console.log(command);

  // 一致するコマンドがなかった場合
  if (!command) {
    console.error(` ${interaction.commandName} というコマンドは存在しません。`);
    return;
  }

  try {
    // コマンドを実行
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "コマンドを実行中にエラーが発生しました。",
      ephemeral: true,
    });
  }
});
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

//メッセージ送信の判定
let sendMessage = true;
let aa;
cron.schedule("* * * * * *", async () => {
  await aa = changeFnc.exchange(sendMessage);
  //でばっく
  console.log(`${aa} ${sendMessage}`);
});
console.log(sendMessage);

//メッセージ送信
cron.schedule("* * * * * *", async () => {
  await send.omg();
});

client.login(token);
