module.exports = [{
  name: "onUserUpdate",
  type: "userUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldUser[name]!=$newUser[name]]
$description[Имя пользователя участника **$username** (<@$authorID>) было изменено]
$addField[Новый никнейм;$newUser[name]ㅤ;true]
$addField[Старый никнейм;$oldUser[name]ㅤ;true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$elseif[$newUser[banner]!=$oldUser[banner]]
$description[Баннер участника **$username** (<@$authorID>) был изменен]
$addField[Новый баннер;$newUser[bannerURL];false]
$image[$newUser[bannerURL]]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$endelseif
$elseif[$oldUser[accentColor]!=$newUser[accentColor]]
$description[Цвет баннера **$username** (<@$authorID>) был изменен]
$addField[Новый цвет;**$newUser[accentColor]**;true]
$addField[Старый цвет;**$oldUser[accentColor]**;true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$endelseif
$endif`
}];