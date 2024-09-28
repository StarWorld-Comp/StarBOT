module.exports = [{
  name: "onUserUpdate",
  type: "userUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldUser[username]!=$newUser[username]]
$sendMessage[{newEmbed:{description:Имя пользователя **$username** (<@$authorID>) было изменено}{field:Новое имя:$newUser[username]:true}{field:Старое имя:$oldUser[username]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$newUser[banner]!=$oldUser[banner]]
$sendMessage[{newEmbed:{description:Баннер пользователя **$username** (<@$authorID>) был изменен}
$if[$newUser[banner]!=]
{field:Новый баннер:$newUser[banner]:true}{image:$newUser[banner]}
$endif
$if[$oldUser[banner]!=]
{field:Старый баннер:$oldUser[banner]:true}
$endif
{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$newUser[globalName]!=$oldUser[globalName]]
$sendMessage[{newEmbed:{description:Ник пользователя **$username** (<@$authorID>) был изменен}{field:Новый ник:$newUser[globalName]:true}{field:Старый ник:$oldUser[globalName]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$newUser[avatar]!=$oldUser[avatar]]
$sendMessage[{newEmbed:{description:Аватар пользователя **$username** (<@$authorID>) был изменен}
$if[$newUser[avatar]!=]
{field:Новый аватар:[Клик](https://cdn.discordapp.com/avatars/$authorID/$newUser[avatar].webp?size=4096):true}{image:https://cdn.discordapp.com/avatars/$authorID/$newUser[avatar].webp?size=4096}
$endif
$if[$oldUser[avatar]!=]
{field:Старый аватар:[Клик](https://cdn.discordapp.com/avatars/$authorID/$oldUser[avatar].webp?size=4096):true}
$endif{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$oldUser[accentColor]!=$newUser[accentColor]]
$sendMessage[{newEmbed:{description:Цвет баннера пользователя **$username** (<@$authorID>) был изменен}{field:Новый цвет:$newUser[accentColor]:true}{field:Старый цвет:$oldUser[accentColor]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif`
}];