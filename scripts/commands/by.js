module.exports.config = {
  name: "by",
  version: "1.0.0",
  permssion: 2,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "",
  category: "Admin",
  usages: "by [id]",
  cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
      if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
      if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join("Allahafez....!🧡🥺"));
        }
