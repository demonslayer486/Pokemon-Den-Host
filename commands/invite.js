module.exports = {
  name: "Invite Link Command",
  cmdName: "invite",
  aliases: ["link"],
  description: "Delivers an Alcremie-M invite link to allow Alcremie-M to join your server.",
  args: false,
  usage: "{{prefix}}invite",
  example: "{{prefix}}invite",
  guildOnly: false,
  adminOnly: false,
  run(client, message) {
    run(client, message);
  }
};

const embedHelper = require("../modules/embedHelper.js");

const run = (client, message) => {
  const embed = embedHelper.createEmbed("invite", client);
  message.channel.send(embed)
    .then()
    .catch(console.error);
  return;
};