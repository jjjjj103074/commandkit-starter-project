/** @type {import('commandkit').CommandData} */
const data = {
  name: 'ping',
  description: 'Pong!',
  options: [
    {
      name: 'user',
      description: 'User to ping',
      type: 'USER',
      required: true,
    }
  ],
};

/** @param {import('commandkit').SlashCommandProps} param0 */
async function run({ interaction, client }) {
  const embed = new EmbedBuilder()
  .setAuthor()
  .setColor('#0099ff')
  .setTitle('title')
await interaction.reply({embeds:[embed]});
}

/** @type {import('commandkit').CommandOptions} */
const options = {};

module.exports = { data, run, options };
