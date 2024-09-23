module.exports = [
    {
      name: "temprole",
      type: "interaction",
      prototype: "slash",
      code: `$interactionReply[{newEmbed:{title:Роль успешно выдана}{thumbnail:$userAvatar[$get[user]]}{field:Роль:<@&$slashOption[role]> (ID: $slashOption[role]):false}{field:Время действия:$FormatTime[$slashOption[duration]]:false}{color:#2b2d31}{footer:$username[$get[user]]:$userAvatar[$get[user]]}{timestamp}}]
$setUserVar[temproles;$getUserVar[temproles;$authorID]$slashOption[role]:;$authorID]
$setTimeout[temprole_expire;$slashOption[duration];{"roleID": "$slashOption[role]", "userID": "$get[user]", "channelID": "$channelID", "guildID": "$guildID"}]
$giveRole[$guildID;$get[user];$slashOption[role];Временная роль.]

$onlyIf[$checkContains[$slashOption[duration];m;h;d;mo;s;y;w]==true;{newEmbed:{color:#f1090b}{description:Вы неверно указали формат времени.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете выдать временную роль самому себе.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyPerms[manageroles;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[manageroles;{newEmbed:{color:#f1090b}{description:У меня не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Вы неверно указали формат времени.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]`
    },
    {
        name: "temprole_expire",
        type: "timeout",
        code: `
$removeRole[$timeoutData[guildID];$timeoutData[userID];$timeoutData[roleID];Время временной роли вышло.]
$onlyIf[$hasRoles[$timeoutData[guildID];$timeoutData[userID];$timeoutData[roleID]]==true]
$onlyIf[$userExists[$timeoutData[userID]]==true]
$suppressErrors`
    }
];