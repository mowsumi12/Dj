module.exports.config = {
    name: "রিয়া",
    version: "1.0.2",
    permission: 0,
    prefix: 'awto',
    credits: "Emon",
    description: "ai",
    category: "botAi",
    usages: "bot+bot Help", 
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const query = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var tl = ["🍒)⎯⃝লিৃ্ঁপৃ্ঁ কিৃ্ঁসৃ্ঁ কৃ্ঁরুৃ্ঁমৃ্ঁ আৃ্ঁয়ৃ্ঁ🥺","⎯͢⎯⃝🩵 খাৃ্ঁলি্ঁ ডাৃ্ঁকেঁ দেৃ্ঁখ্ঁ তো্ঁ কে্ঁম্ঁন্ঁ ডা্ঁ লা্ঁগে্ঁ😒🌚🔪⎯͢⎯⃝💚","≛⃝🌺উ্ঁফ্ঁস্ঁ জা্ঁনস্ঁ✿︎'ন্ঁক্ঁ দি্ঁও্ঁ কি্ঁন্তুু্ঁ༉༐༐🌺🥺","🙄🙄★≛⃝🌸🍂◄──⃜⃜͢͢⎼⎼⎼⃡⃝⃨ ছ্যাকা খাইলে নক দিছ শান্তনা দিবো 🙄🙄★≛⃝🌸🍂","༎⎯͢⎯⃝দেৃ্ঁখৃ্ঁতেৃ্ঁ কিৃ্ঁ কৃ্ঁমৃ্ঁ সুৃ্ঁন্দৃ্ঁরৃ্ঁ ছিৃ্ঁলাৃ্ঁমৃ্ঁ রেৃ্ঁ প্রৃ্ঁপোৃ্ঁজৃ্ঁ কৃ্ঁরৃ্ঁলিৃ্ঁ নাৃ্ঁ যেৃ্ঁ•⎯͢⎯⃝🩷😾🪽🪄","┉❈🐰⋆⃝চলো রিলেশন সিপ স্ট্যাটাস দেয়🙈❈┄","•⎯͢⎯⃝🩷  ꙰আ্ঁসো্ঁ সো্ঁনা্ঁ ⋆⃝প্রে্ঁম্ঁ 𝄞⋆⃝ক্ঁরি্ঁ༎🐰ক্ঁরি্ঁ 🙊"," উপস সোনা তুমি এত কিউট কেন🙈💋","𝄞⋆⃝🥵খাৃঁখাৃঁ আৃঁমাৃঁয়ৃঁ 𝄞⋆⃝চুৃঁইৃঁষা 𝄞⋆⃝চুৃঁঁইৃঁষা খাৃঁ❥᭄🤤 ⑅⃝🌺","𝄞⋆⃝🥵⋆⃝বা্ঁবু্ঁতো্ঁমা্ঁর্ঁ𝄞⋆⃝অ্ঁলি্ঁতে্ঁ গ্ঁলি্ঁতে্ঁ লা্ঁভ্ঁ ই্ঁউ্ঁ🥵⋆⃝𝄞⋆⃝","𝄞⋆⃝🥵⋆⃝বা্ঁবু্ঁ এ্ঁই্ঁতো্ঁ 𝄞⋆⃝আ্ঁমি্ঁ দে্ঁখা্ঁ যা্ঁয়্ঁ🥵⋆⃝𝄞⋆⃝","𝄞⋆⃝🥵ওঁগোৃ্ঁ𝄞⋆⃝ কিৃ্ঁ রাৃ্ঁন্না্ৃঁ 𝄞⋆⃝ক্ঁর্ঁছো্ঁ𝄞⋆⃝ আ্ঁজ্ঁকে্ঁ.𝄞⋆⃝😝","𝄞⋆⃝🥵চু্ঁম্মা্ঁ𝄞⋆⃝চু্ঁম্মি্ঁ 𝄞⋆⃝স্কু্ঁল্ঁ 𝄞⋆⃝থে্ঁকে্ঁ 𝄞⋆⃝অ্ঁটো্ঁ𝄞⋆⃝পা্ঁস্ঁ𝄞⋆⃝ ক্ঁর্ঁছি্ঁ𝄞⋆⃝🥵","𝄞⋆⃝🥵জা্ঁন্স্ঁ 𝄞⋆⃝কোৃঁলেৃঁ 𝄞⋆⃝নাৃঁওৃঁ❥᭄ ⑅⃝🌺😻","❥᭄ ⑅⃝🌺উৃঁম্মাৃঁ𝄞⋆⃝দিৃঁলেৃঁ𝄞⋆⃝চৃঁকৃঁলেৃঁটৃঁ দিৃঁমুৃঁ❥᭄🤤 ⑅⃝🌺"];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    
    try {
        if (!query) {
            return api.sendMessage(`${name},\n\n${rand}\n\n`, event.threadID, event.messageID);
        }
        
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://mostakim-api.onrender.com/gpt4?ask=${question}`;
        
        const res = await axios.get(apiUrl);
        
        if (res.data && res.data.generated_text) {
            return api.sendMessage(`${name},\n\n${res.data.generated_text}`, event.threadID, event.messageID);
        } else {
            return api.sendMessage('Failed to get a valid response', event.threadID, event.messageID);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return api.sendMessage('An error occurred while fetching the response', event.threadID, event.messageID);
    }
};
