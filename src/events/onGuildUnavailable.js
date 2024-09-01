module.exports = [{
  name: "onGuildUnavailable",
  type: "guildUnavailable",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[Текущая гильдия стала недоступна]
$addField[Возможные причины;* Сбой сервера\n* Закрытие гильдии;false]
$footer[Id гильдии#COLON# $guildID;$guildIcon]
$addTimestamp`
}];