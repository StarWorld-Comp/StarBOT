module.exports = [{
  name: "weekly",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Еженедельный бонус:attachment://bonus.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]**, вы забрали свои **7 000** <#COLON#cheap#COLON#1275714873677975553>.}{field:Следующий бонус можно забрать#COLON#:<t#COLON#$truncate[$sum[$math[$datestamp/1000];604800]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:bonus.png:./src/icons/bonus.png}]

$setUserVar[balance;$sum[$getUserVar[cash;$authorID;$guildID;eco];$getUserVar[bank;$authorID;$guildID;eco]];$authorID;$guildID;eco]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID;eco];7000];$authorID;$guildID;eco]

$cooldown[7d;{newEmbed:{color:#f1090b}{description:Вы уже забирали еженедельный бонус. попробуйте <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[user;weekly;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];