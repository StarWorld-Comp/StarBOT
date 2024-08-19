module.exports = [{
    name: "invites",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{thumbnail:$userAvatar[$get[user]]}{description:Количество приглашений <@$get[user]> было сгенерировано за _$pingмс_\n\n✅️ **$advancedReplaceText[$checkCondition[$inviterInfo[$get[user];$guildID;counts.real]==];true;0;false;$inviterInfo[$get[user];$guildID;counts.real]]** Входов\n❌️ **$advancedReplaceText[$checkCondition[$inviterInfo[$get[user];$guildID;counts.leave]==];true;0;false;$inviterInfo[$get[user];$guildID;counts.leave]]** Выходов\n💩 **$advancedReplaceText[$checkCondition[$inviterInfo[$get[user];$guildID;counts.fake]==];true;0;false;$inviterInfo[$get[user];$guildID;counts.fake]]** Фейков\n✨️ **$getUserVar[bonusinvites;$get[user];$guildID]** бонусов\n\nУ этого участника есть **$sum[$advancedReplaceText[$checkCondition[$inviterInfo[$get[user];$guildID;counts.total]==];true;0;false;$inviterInfo[$get[user];$guildID;counts.total]];$getUserVar[bonusinvites;$get[user];$guildID]]** приглашений ! 👏}{timestamp}{color:#2b2d31}{footer:Запросил $username[$authorID]:$authorAvatar}}]
$let[user;$findUser[$slashOption[user];true]]`
}];