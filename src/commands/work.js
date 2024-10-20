module.exports = [{
  name: "work",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Работа:attachment://work.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]** получил назначение на должность **$get[work]** и заработал **$get[earn]** <#COLON#cheap#COLON#1275714873677975553>}{field:Следующая работа будет доступна#COLON#:<t#COLON#$truncate[$sum[$math[$datestamp/1000];7200]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:work.png:./src/icons/work.png}]

$setUserVar[balance;$sum[$getUserVar[cash;$authorID;$guildID;eco];$getUserVar[bank;$authorID;$guildID;eco]];$authorID;$guildID;eco]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID;eco];$get[earn]];$authorID;$guildID;eco]

$cooldown[2h;{newEmbed:{color:#f1090b}{description:Вы уже работали. попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[user;work;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[work;$randomText[менеджера;повара;полицейского;депутата;сварщика;таксиста;военного;пожарного;лесоруба;лётчика;врача;архитектора;агронома;физика;химика;космонавта]]
$let[earn;$round[$random[1;150]]]`
}];