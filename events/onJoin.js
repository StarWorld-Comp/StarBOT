module.exports = [{
  name: "onJoin",
  type: "join",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$isBot[$authorID]==false]
$thumbnail[$authorAvatar]
$description[Участник **$username[$authorID]** (<@$authorID>) присоединился к серверу]
$addField[Дата регистрации;<t#COLON#$truncate[$math[($authorID/4194304+1420070400000)/1000]]:D> (<t#COLON#$round[$math[($authorID/4194304+1420070400000)/1000]]#COLON#R>);false]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#7de848]
$addTimestamp
$else
$description[Бот **$username[$authorID]** (<@$authorID>) добавлен на сервер]
$thumbnail[$authorAvatar]
$addTimestamp
$color[#7de848]
$footer[Id бота#COLON# $authorID;$authorAvatar]
$endif`
}];