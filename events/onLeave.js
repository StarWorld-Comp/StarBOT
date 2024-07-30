module.exports = [{
  name: "onLeave",
  type: "leave",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$isBot[$authorID]==false]
$description[Участник **$username[$authorID]** (<@$authorID>) покинул сервер]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$thumbnail[$authorAvatar]
$color[#ead967]
$addTimestamp
$else
$thumbnail[$authorAvatar]
$description[Бот **$username[$authorID]** (<@$authorID>) удалён с сервера]
$footer[Id бота#COLON# $authorID;$authorAvatar]
$color[#ead967]
$addTimestamp
$endif`
}];