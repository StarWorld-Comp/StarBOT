module.exports = [{
  name: "onJoin",
  type: "join",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$isBot[$authorID]==false]
$channelSendMessage[1209932675792773201;<@$authorID> присоединяется к серверу **$guildName**!{newEmbed:{author:$username[$authorID]:$authorAvatar}{title:Добро пожаловать на сервер $guildName!}{description:Мы рады видеть вас на сервере!\nМожете ознакомится с правилами - Eсли вам нужна помощь с ботом/сервером - задайте вопрос в специальном канале - <#1173980785380954272>.\n**Вопросы в чате могут игнорироваться!**}{footer:Всего участников - $sum[$membersCount[$guildID;all;true];1]:$authorAvatar}{color:#9700ef}};false]
$thumbnail[$authorAvatar]
$description[Участник **$username[$authorID]** (<@$authorID>) присоединился к серверу]
$addField[Дата регистрации;<t#COLON#$truncate[$math[($authorID/4194304+1420070400000)/1000]]:D> (<t#COLON#$round[$math[($authorID/4194304+1420070400000)/1000]]#COLON#R>);false]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#7de848]
$addTimestamp
$else
$description[Бот **$username[$authorID]** (<@$authorID>) добавлен на сервер]
$addTimestamp
$color[#ffac51]
$footer[Id бота#COLON# $authorID;$authorAvatar]
$endif`
}];