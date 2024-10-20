module.exports = [{
  name: "monthly",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Ежемесячный бонус:attachment://bonus.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]**, вы забрали свои **12 000** <#COLON#cheap#COLON#1275714873677975553>.}{field:Следующий бонус можно забрать#COLON#:<t#COLON#$truncate[$sum[$math[$datestamp/1000];1036800]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:bonus.png:./src/icons/bonus.png}]

$setUserVar[balance;$sum[$getUserVar[cash;$authorID;$guildID;eco];$getUserVar[bank;$authorID;$guildID;eco]];$authorID;$guildID;eco]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID;eco];12000];$authorID;$guildID;eco]

$cooldown[12d;{newEmbed:{color:#f1090b}{description:Вы уже забирали ежемесячный бонус. попробуйте
<t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[user;monthly;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];