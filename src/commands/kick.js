module.exports = [{
  name: "kick",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Кик:attachment://kick.png}{thumbnail:$userAvatar[$get[user]]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Кикнутый участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}{attachment:kick.png:./src/icons/kick.png}]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Кик:attachment://kick.png}{description:Вы были **кикнуты** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason1]}{color:#2b2d31}{timestamp}}{attachment:kick.png:./src/icons/kick.png}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason1;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$endif
$kick[$guildID;$get[user];$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Выгоняю участника...]

$onlyPerms[kickmembers;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[kickmembers;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
 
$onlyIf[$isBanned[$guildID;$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Этот пользователь уже заблокирован.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете кикнуть себя.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];