module.exports.config = {
  name: "aotoreact5",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "..",
  prefix: false,
  category: "...",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase()
	if (event.body.indexOf("❤️")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("🤭")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("🎲")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎲", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("🌿")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
