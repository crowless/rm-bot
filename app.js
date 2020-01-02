const discord = require("discord.js");
const rbx = require("noblox.js");
const got = require('got');
const set = require('./settings.json');
const gr = '1106775';
const bot = new discord.Client();
const token = set.token;

rbx.cookieLogin(set.cookie);

bot.on("ready", () => {
    console.log("ready");
})

bot.on("message", (msg) => {
    if(!msg.guild) return;
    if(!msg.content.startsWith('!')) return;
    if(msg.member.roles.some(role => role.name === 'Supervisors') == false){
        if(msg.member.roles.some(role => role.name === 'Council Members') == false){
            if(msg.member.roles.some(role => role.name === 'Developer') == false){
                if(msg.member.roles.some(role => role.name === 'Chairman') == false){
                    if(msg.member.roles.some(role => role.name === 'The Myth King') == false){
                        return;
                    }
                }
            }
        }
    }
    if(msg.content.startsWith('!promote')) {
        let contents = msg.content.split(' ');
        const cmd = contents[0];
        const name = contents[1];
        var rank = contents[2];
        if(rank == undefined){
            msg.channel.send('Specify the rank, :x:');
            return;
        }
        got(`http://api.roblox.com/users/get-by-username?username=${name}`,{ json: true }).then(response => {
            if(response.body.success == false) {
                msg.channel.send('User not found, :x:');
                return;
            }
            console.log(`${rank} is rank`);
            if(rank.toLowerCase() == 'c1'){
                console.log(rank.toLowerCase());
                rbx.setRank(gr, response.body.Id,10).then(() => {
                    msg.channel.send(`Promoted user **${name}** to Clearance 1, :white_check_mark:`);
                }).catch(err => {
                    console.log(err);
                    msg.channel.send('User is not in the group, :x:');
                })
            } else if(rank.toLowerCase() == 'c2') {
                rbx.setRank(gr, response.body.Id,20).then(() => {
                    msg.channel.send(`Promoted user **${name}** to Clearance 2, :white_check_mark:`);
                }).catch(err => {
                    console.log(err);
                    msg.channel.send('User is not in the group, :x:');
                })
            } else if(rank.toLowerCase() == 'c3') {
                rbx.setRank(gr, response.body.Id,30).then(() => {
                    msg.channel.send(`Promoted user **${name}** to Clearance 3, :white_check_mark:`);
                }).catch(err => {
                    console.log(err);
                    msg.channel.send('User is not in the group, :x:');
                })
            } else if(rank.toLowerCase() == 'c4') {
                rbx.setRank(gr, response.body.Id,35).then(() => {
                    msg.channel.send(`Promoted user **${name}** to Clearance 4, :white_check_mark:`);
                }).catch(err => {
                    console.log(err);
                    msg.channel.send('User is not in the group, :x:');
                })
            } else if(rank.toLowerCase() == 'c5') {
                rbx.setRank(gr, response.body.Id,38).then(() => {
                    msg.channel.send(`Promoted user **${name}** to Clearance 5, :white_check_mark:`);
                }).catch(err => {
                    console.log(err);
                    msg.channel.send('User is not in the group, :x:');
                })
            } else {
                msg.channel.send('Invalid rank, :x:');
            }
        })
    }
})


bot.login(token);