module.exports = [{
  name: "unmute",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Снятие наказания:attachment://mute.png}{thumbnail:$userAvatar[$get[user]]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}{attachment:mute.png:./src/icons/mute.png}]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Снятие наказания:attachment://mute.png}{description:С вас был снят **Тайм-Аут** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason1]}{timestamp}}{attachment:mute.png:./src/icons/mute.png}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason1;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$endif
$timeoutMember[$guildID;$get[user];0s;false;$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Снимаю наказание...]

$onlyPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У меня не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
 
$onlyIf[$isTimeout[$guildID;$get[user]]==true;{newEmbed:{color:#f1090b}{description:Этот пользователь не наказан.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];