module.exports = [{
  name: "purge",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$interactionEdit[<:success:1275672606862741556> Успешно архивировано \`$get[count] сообщение\`.;;true]
$wait[1s]
$interactionReply[<a:load:1281959260049379348> Архивация сообщений...;;true]
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

$onlyPerms[managemessages;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[managemessages;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1244633573370105896/data-cleaning_6.png?ex=6655d2d8&is=66548158&hm=42ca75867b1bf733de675a666a8ac23baeb07b27a17d47b61ecff7ea07d36729&]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];