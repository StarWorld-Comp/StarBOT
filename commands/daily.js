module.exports = [{
  name: "daily",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Ежедневный бонус:$get[author.icon]}{thumbnail:$authorAvatar}{description:**$username[$authorID]**, вы забрали свои **1 000** <#COLON#cheap#COLON#1275714873677975553>.}{field:Следующий бонус можно забрать#COLON#:<t#COLON#$truncate[$sum[$math[$datestamp/1000];46800]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[balance;$sum[$getUserVar[cash;$authorID];$getUserVar[bank;$authorID]];$authorID;$guildID;main]

$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID;main];1000];$authorID;$guildID;main]


$cooldown[13h;{newEmbed:{color:#f1090b}{description:Вы уже забирали ежедневный бонус. попробуйте
<t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[13h;user;daily;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901644/1245010806899212379/1254293.png?ex=6657322b&is=6655e0ab&hm=8ce4ff69417b59c5deaf5a494c04205383f0c7e78e30a7aa139f1fda3ae3552c&]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
`
}];