module.exports.config = {
  name: "goiadm3",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61560186343783") {
    var aid = ["61560186343783"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার বস চিপায়  বিজি আছে\n যা বলার আমাকে বলো", "মেয়ে পটাতে গেছে😁😁😁", "এমন ভাবে মেনশান না দিয়ে একটা জি এফ দাও🙈🙈", "এত ডাকিস কেন😡😡😡\n আমার বস অনেক বিজি", "বস কই তুমি\nতোমারে এক বলদে খোজ করে 😑😑😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                 }
