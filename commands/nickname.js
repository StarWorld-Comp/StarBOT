module.exports = [{
    name: "nickname",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$if[$interactionData[options._subcommand]==set]
$interactionReply[<:success:1275672606862741556> Псевдоним участника **$username[$findUser[$slashOption[user];true]]** успешно изменен.]
$setUserNickname[$findUser[$slashOption[user];true];$slashOption[nick];Изменение псевдонима.]
$onlyIf[$findUser[$slashOption[user];true]!=$authorID;{newEmbed:{color:#f1090b}{description:Вы не можете изменить свой собственный псевдоним.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyIf[$userDisplayName[$findUser[$slashOption[user];true]]!=$userNickname[$guildID;$findUser[$slashOption[user];true];false];{newEmbed:{color:#f1090b}{description:У указанного участника не установлен псевдоним на этом сервере.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$elseif[$interactionData[options._subcommand]==reset]
$interactionReply[<:success:1275672606862741556> Псевдоним участника **$username[$findUser[$slashOption[user];true]]** успешно изменен.]
$setUserNickname[$findUser[$slashOption[user];true];$userDisplayName[$findUser[$slashOption[user];true]];Сброс псевдонима.]
$onlyIf[$findUser[$slashOption[user];true]!=$authorID;{newEmbed:{color:#f1090b}{description:Вы не можете изменить свой собственный псевдоним.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyIf[$userNickname[$guildID;$findUser[$slashOption[user];true];false]!=;{newEmbed:{color:#f1090b}{description:У указанного участника не установлен псевдоним на этом сервере.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$endelseif
$elseif[$interactionData[options._subcommand]==history]
$interactionReply[{newEmbed:{title:История псевдонимов $username[$findUser[$slashOption[user];true]]}{thumbnail:$userAvatar[$findUser[$slashOption[user];true]]}{description:1. \`Эта функция в разработке...\` (???)\n-# ???}{timestamp}}]
$endelseif
$endif

$onlyPerms[changenickname;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[changenickname;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
`
}];