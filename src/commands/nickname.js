module.exports = [{
    name: "nickname",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$if[$interactionData[options._subcommand]==set]
$interactionReply[<:success:1275672606862741556> Псевдоним участника **$username[$get[user]]** успешно изменен.]
$setUserVar[nickname_history;$slashOption[nick]-$authorID-$datestamp#COLON#;$get[user];$guildID]
$setUserNickname[$get[user];$slashOption[nick];Изменение псевдонима.]

$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Вы не можете изменить свой собственный псевдоним.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$let[user;$findMember[$slashOption[user];true]]

$elseif[$interactionData[options._subcommand]==reset]
$interactionReply[<:success:1275672606862741556> Псевдоним участника **$username[$get[user]]** успешно изменен.]
$setUserNickname[$get[user];$userDisplayName[$get[user]];Сброс псевдонима.]

$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Вы не можете изменить свой собственный псевдоним.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$userNickname[$guildID;$get[user];false]!=;{newEmbed:{color:#f1090b}{description:У указанного участника не установлен псевдоним на этом сервере.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$let[user;$findMember[$slashOption[user];true]]
$endelseif

$elseif[$interactionData[options._subcommand]==history]
$interactionReply[{newEmbed:{title:История псевдонимов $username[$get[user]]}{thumbnail:$userAvatar[$get[user]]}{description:1. \`Эта функция в разработке...\` (???)\n-# ???}{timestamp}}]
$joinSplitText[sep?]
$textSplit[$getUserVar[nickname_history;$get[user]];:]
$let[user;$findMember[$slashOption[user];true]]
$endelseif
$endif

$onlyPerms[changenickname;{newEmbed:{color:#f1090b}{description:У вас недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[changenickname;{newEmbed:{color:#f1090b}{description:У меня недостаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];