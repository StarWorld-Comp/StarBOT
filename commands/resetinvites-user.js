module.exports = [{
    name: "resetinvites-user",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{description:✅️ **$sum[$advancedReplaceText[$checkCondition[$inviterInfo[$get[user];$guildID;counts.total]==];true;0;false;$inviterInfo[$get[user];$guildID;counts.total]];$getUserVar[bonusinvites;$get[user];$guildID]]** входов от <@$get[user]> было успешно удалено.}{timestamp}{footer:Запросил $username[$authorID]:$authorAvatar}{color:#2b2d31}}]
$setUserVar[bonusinvites;0;$get[user];$guildID]
$resetInvites[$guildID;$get[user]]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[user;$slashOption[user];true]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];