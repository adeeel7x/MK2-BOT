const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const PREFIX = "ᴹᴷ²〢";

client.once("clientReady", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  try {
    await member.setNickname(`${PREFIX}${member.displayName}`);
  } catch (err) {
    console.log("❌ ما قدرش يبدل الاسم");
  }
});

client.login(process.env.TOKEN);
