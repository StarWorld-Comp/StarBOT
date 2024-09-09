module.exports = [
    {
      name: "temprole",
      type: "interaction",
      prototype: "slash",
      code: `$interactionReply[{newEmbed:{title:Роль успешно выдана}{thumbnail:$get[avatar]}{field:Роль:<@&$slashOption[role]> (ID: $slashOption[role]):false}{field:Время действия:$FormatTime[$slashOption[duration]]:false}{color:#2b2d31}{footer:$username[$get[user]]:$get[avatar]}{timestamp}}]
$setTimeout[roleTake;$slashOption[duration];{"roleID": "$slashOption[role]", "userID": "$get[user]", "channelID": "$channelID", "guildID": "$guildID"}]
$giveRole[$guildID;$get[user];$slashOption[role];Временная роль.]

$onlyIf[$checkContains[$slashOption[duration];m;h;d;mo;s;y;w]==true;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете выдать временную роль самому себе.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyPerms[manageroles;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[manageroles;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Вы неверно указали формат времени.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]


$let[avatar;$userAvatar[$get[user]]]
$let[user;$slashOption[user]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "roleTake",
        type: "timeout",
        code: `
$removeRole[$timeoutData[guildID];$timeoutData[userID];$timeoutData[roleID];Время временной роли вышло.]
$onlyIf[$hasRoles[$timeoutData[guildID];$timeoutData[userID];$timeoutData[roleID]]==true]
$onlyIf[$userExists[$timeoutData[userID]]==true]
$suppressErrors`
    }
];