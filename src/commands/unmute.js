module.exports = [{
  name: "unmute",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Снятие наказания:$get[author.icon]}{thumbnail:$get[avatar]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}]
$timeoutMember[$guildID;$get[user];0s;false;$slashOption[reason]]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Снятие наказания:$get[author.icon]}{description:С вас был снят **Тайм-Аут** модератором **$username[$authorID]** (<@$authorID>)\n\n**Причина**\n$get[reason]}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$endif
$wait[1s]
$interactionReply[Снимаю наказание...]

$onlyPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав для снятия наказания этому пользователю.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
 
$onlyIf[$isTimeout[$guildID;$get[user]]==true;{newEmbed:{color:#f1090b}{description:Этот пользователь не наказан.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570077229132/1237709915464667167/985655815295868939.png?ex=663ca2af&is=663b512f&hm=03929c07dcc6f2d8ba87909ab78ea9a6fc36b54245c4773e05fb6253b5785ebd&]
$let[avatar;$userAvatar[$get[user]]]
$let[user;$slashOption[user]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];