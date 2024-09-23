module.exports = [{
  name: "purge",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$interactionEdit[<:success:1275672606862741556> Успешно архивировано \`$get[count] сообщение\`.;;true]
$if[$interactionData[options._subcommand]==all]
$let[count;$clear[$channelID;$slashOption[count];true;false;false]]
$elseif[$interactionData[options._subcommand]==user]
$let[count;$clear[$channelID;$slashOption[count];true;false;false;;$slashOption[user]]]
$endelseif
$elseif[$interactionData[options._subcommand]==pins]
$let[count;$clear[$channelID;$slashOption[count];true;false;true]]
$endelseif
$elseif[$interactionData[options._subcommand]==bots]
$let[count;$clear[$channelID;$slashOption[count];true;true;false]]
$endelseif
$endif
$interactionReply[<a:load:1281959260049379348> Архивация сообщений...;;true]

$onlyPerms[managemessages;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[managemessages;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];