module.exports = [{
    name: "addinvites",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{description:✅️ Вы успешно добавили **$slashOption[amount]** бонусных приглашений на <@$get[user]>.}{timestamp}{color:#2b2d31}{footer:Запросил $username[$authorID]:$authorAvatar}}]
$setUserVar[bonusinvites;$sum[$getUserVar[bonusinvites;$get[user];$guildID];$slashOption[amount]];$get[user];$guildID]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[user;$slashOption[user];true]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];