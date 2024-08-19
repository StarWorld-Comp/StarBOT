module.exports = [{
    name: "removeinvites",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{description:✅️ Вы успешно убрали **$slashOption[amount]** бонусных приглашений у <@$get[user]>.}{timestamp}{footer:Запросил $username[$authorID]:$authorAvatar}{color:#2b2d31}}]
$setUserVar[bonusinvites;$sub[$getUserVar[bonusinvites;$get[user];$guildID];$slashOption[amount]];$get[user];$guildID]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[user;$slashOption[user];true]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];