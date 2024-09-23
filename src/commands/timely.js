module.exports = [{
  name: "timely",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Регулярный бонус:attachment://bonus.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]**, вы забрали свои **500** <#COLON#cheap#COLON#1275714873677975553>.}{field:Следующий бонус можно забрать#COLON#:<t#COLON#$truncate[$sum[$math[$datestamp/1000];43200]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:bonus.png:./src/icons/bonus.png}]

$setUserVar[balance;$sum[$getUserVar[cash;$authorID];$getUserVar[bank;$authorID]];$authorID;$guildID]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID;main];500];$authorID;$guildID;main]

$cooldown[12h;{newEmbed:{color:#f1090b}{description:Вы уже забирали регулярный бонус. попробуйте
<t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[12h;user;timely;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];