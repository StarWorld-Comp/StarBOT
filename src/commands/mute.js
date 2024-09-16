module.exports = [{
  name: "mute",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Тайм-Аут:attachment://mute.png}{thumbnail:$userAvatar[$get[user]]}{field:Модератор:$username (<@$authorID>):true}{field:Длительность:$FormatTime[$slashOption[time]] (<t#COLON#$truncate[$math[$get[time]/1000]]#COLON#f>):true}{field:Причина:$get[reason]:false}{field:Наказанный участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}{attachment:mute.png:./src/icons/mute.png}]

$if[$isUserDmEnabled[$slashOption[user]]==true]
$sendDM[{newEmbed:{author:Тайм-Аут:attachment://mute.png}{description:Вам был выдан **Тайм-Аут** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason1]}{timestamp}}{attachment:mute.png:./src/icons/mute.png}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason1;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$endif
$let[time;$timeoutMember[$guildID;$get[user];$slashOption[time];true;$slashOption[reason]]]
$interactionReply[<a:load:1281959260049379348> Наказываю участника...]

$onlyPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$hasPerms[$guildID;$get[user];administrator]!=true;{newEmbed:{color:#f1090b}{description:У этого пользователя есть права администратора.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[moderatemembers;{newEmbed:{color:#f1090b}{description:У бота недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
 
$onlyIf[$isTimeout[$guildID;$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Этот пользователь уже наказан.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете выдать себе наказание.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$isBot[$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Вы не можете наказывать ботов.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Вы неверно указали формат времени.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];