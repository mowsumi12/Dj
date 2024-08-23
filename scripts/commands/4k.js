const { get } = require('axios');
const { writeFileSync, createReadStream, unlinkSync } = require('fs-extra');
const { shorten } = require('tinyurl');

module.exports.config = {
  name: "4k",
  version: "1.6.9",
  credits: "Nazrul",
  permission: 0,
  prefix: false,
  category: "image",
  cooldowns: 4,
  description: "Image enhancer",
  usage: "<p> 4k [reply to an image]",
  };

  module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    const photoUrl = event.messageReply?.attachments[0]?.url || args.join(' ');
    
    if (!photoUrl) {
      api.sendMessage("🔰 | Please reply to a photo to proceed enhancing images...", threadID, messageID);
      return;
    }
    const finalUrl = await shorten(photoUrl);

      api.sendMessage("⏳ | Enhancing please wait...", threadID, async () => {
   try {

   const { data } = await get(`https://noobs-api2.onrender.com/dipto/4k?img=${encodeURIComponent(finalUrl)}&key=dipto008`);

   const result = data.dipto;
   const author = data.author;
   const ShortUrl = await shorten(result);
     
   const path = __dirname + `/cache/fuck.jpg`;

   const img = (await get(result, { responseType: "arraybuffer" })).data;


   writeFileSync(path, Buffer.from(img, "binary"));
   api.setMessageReaction("✅", messageID, (err) => {}, true);

    api.sendMessage({
      body: `
      ✅ | Successfully Enhanced Your Image...
      🔰 | Author: 𝐌𝐫 𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽 
      ☂ | Download Link: ${ShortUrl}`,
      attachment: createReadStream(path)
    }, threadID, () => unlinkSync(path), messageID);
  } catch (error) {
    api.sendMessage("❎ | " + error, threadID, messageID)
  }
 });
};
