const Discord = require('discord.js');
const client = new Discord.Client();
const token = "IOTMxMjM3MDMzNjY0NDU0NzE2.YeBgEg.B9KoMh7m2LCn_yU00mrDdp7bnnM";

client.once('ready', () => {
    console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.login(token);