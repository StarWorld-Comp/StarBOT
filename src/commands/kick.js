module.exports = [{
  name: "kick",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Кик:$get[author.icon]}{thumbnail:$get[avatar]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Кикнутый участник:$username[$get[user]] (<@$get[user]>):false}{color:$get[platform]}{timestamp}}]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Кик:$get[author.icon1]}{description:Вы были **кикнуты** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason1]}{color:#2b2d31}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason1;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$let[author.icon1;https://cdn.discordapp.com/attachments/1162658570609901644/1237773132664668302/999637297706315826.png?ex=663cdd8f&is=663b8c0f&hm=d82c870049ee629c01aa3ed629002e0a0e8777138dc4b77a5530b23a24395ebb&]
$endif
$kick[$guildID;$get[user];$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Выгоняю участника...]

$onlyPerms[kickmembers;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[kickmembers;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
 
$onlyIf[$isBanned[$guildID;$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Этот пользователь уже заблокирован.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете кикнуть себя.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901644/1237773132664668302/999637297706315826.png?ex=663cdd8f&is=663b8c0f&hm=d82c870049ee629c01aa3ed629002e0a0e8777138dc4b77a5530b23a24395ebb&]
$let[avatar;$userAvatar[$get[user]]]
$let[user;$slashOption[user]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];