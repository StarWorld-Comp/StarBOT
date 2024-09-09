module.exports = [{
  name: "unban",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Разблокировка:$get[author.icon]}{thumbnail:$get[avatar]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Разблокированный участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}]

$if[$isUserDmEnabled[$get[user]]==true]
$sendDM[{newEmbed:{author:Разблокировка:$get[author.icon]}{description:Вы были **разблокированы** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason]}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$let[author.icon;https://cdn.discordapp.com/attachments/1162658570077229132/1237712867005038602/999637299488882740.png?ex=663ca56f&is=663b53ef&hm=2677d01915c9ed10931c539e38385b2532c9e82e0302c1ed62a7123671243e42&]
$endif
$unban[$guildID;$get[user];$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Снимаю наказание...]

$onlyPerms[banmembers;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав для разблокировки.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[banmembers;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
 
$onlyIf[$isBanned[$guildID;$get[user]]==true;{newEmbed:{color:#f1090b}{description:Этот пользователь не заблокирован.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570077229132/1237712867005038602/999637299488882740.png?ex=663ca56f&is=663b53ef&hm=2677d01915c9ed10931c539e38385b2532c9e82e0302c1ed62a7123671243e42&]
$let[avatar;$userAvatar[$get[user]]]
$let[user;$slashOption[user]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];