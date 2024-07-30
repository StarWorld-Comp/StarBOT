module.exports = [{
  name: "work",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Работа:$get[author.icon]}{thumbnail:$authorAvatar}{description:**$username[$authorID]** получил назначение на должность **$get[work]** и заработал **$get[earn]** ютиков.}{field:Следующая работа будет доступна:<t#COLON#$truncate[$sum[$math[$datestamp/1000];900]]#COLON#R>:false}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID;$guildID];$get[earn]];$authorID;$guildID]

$cooldown[15m;{newEmbed:{color:#f1090b}{description:Вы уже работали, попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[15m;user;work;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1245282076866117665/3281289.png?ex=66582ecf&is=6656dd4f&hm=ca1b2c81dde51f9fa34be26b090309ee8f7df50943be5ffeab783eb82735fc02&]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[work;$randomText[менеджера;повара;полицейского;депутата;сварщика;таксиста;военного;пожарного;лесоруба;лётчика;врача;архитектора;агронома;физика;химика;космонавта]]
$let[earn;$round[$random[1;150]]]
`
}];