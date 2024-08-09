module.exports.config = {
    name: "সুমি",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "nazrul",
    description: "Talk to sim",
    prefix: false,
    category: "sim",
    usages: "[ask]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("hmm darling bolo😘😘", tid, mid);
    try {
        const res = await axios.get(`https://mostakim-api.onrender.com/gpt4?ask=${question}&filter=false`);
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};
