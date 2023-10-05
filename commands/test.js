const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction) {
        await interaction.reply('Hololive Production 2nd generation Minato Aqua is the cutest life form on earth!');
    },
};
