const getCome = require("../commands/set-message.js");
const cron = require("node-cron");

console.log(getCome());
if (getCome() === true) {
  cron.schedule("* * * * * *", () => {
    console.log(
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
  });
} else if (getCome() === false) {
  console.log("nunti");
}
