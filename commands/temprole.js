module.exports = [{
  name: "temprole",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{title:Роль успешно выдана}{thumbnail:$get[avatar]}{field:Роль:<@&$slashOption[role]> (ID: $slashOption[role]):false}{field:Время действия:$slashOption[duration]:false}{color:$get[platform]}{footer:$username[$get[user]]:$get[avatar]}{timestamp}}]

$onlyPerms[manageroles;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[manageroles;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901644/1237773132664668302/999637297706315826.png?ex=663cdd8f&is=663b8c0f&hm=d82c870049ee629c01aa3ed629002e0a0e8777138dc4b77a5530b23a24395ebb&]
$let[avatar;$userAvatar[$get[user]]]
$let[user;$slashOption[user]]
$let[platform;$if[$or[$userPlatform[$authorID;$guildID]==web;$userPlatform[$authorID;$guildID]==desktop]==true]
#2b2d31
$elseif[$or[$userPlatform[$authorID;$guildID]==mobile;$userPlatform[$authorID;$guildID]==none]==true]
#26272f
$endelseif
$else
#2b2d31
$endif]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];