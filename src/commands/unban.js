module.exports = [{
  name: "unban",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Разблокировка:attachment://ban.png}{thumbnail:$userAvatar[$get[user]]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Разблокированный участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}{attachment:ban.png:./src/icons/ban.png}]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Разблокировка:attachment://ban.png}{description:Вы были **разблокированы** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason]}{timestamp}}{attachment:ban.png:./src/icons/ban.png}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$endif
$unban[$guildID;$get[user];$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Снимаю наказание...]

$onlyPerms[banmembers;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[banmembers;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
 
$onlyIf[$isBanned[$guildID;$get[user]]==true;{newEmbed:{color:#f1090b}{description:Этот пользователь не заблокирован.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];