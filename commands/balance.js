module.exports = [{
  name: "balance",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Баланс участника $username[$get[user]]:$get[author.icon]}{thumbnail:$userAvatar[$get[user]]}{description:<:money:1264891994694750270> **Наличные:** $numberSeparator[$getUserVar[cash;$get[user]]]\n🏛 **В банке:** $numberSeparator[$getUserVar[bank;$get[user]]]\n🗂 **Общий баланс:** $numberSeparator[$sum[$getUserVar[cash;$get[user]];$getUserVar[bank;$get[user]]]]\n <:next_earn:1264891618268549192> **Доступные награды**\n* Подработка (\`/work\`)\n* Ежедневный бонус (\`/daily\`)\n* Еженедельный бонус (\`/weekly\`)\n* Ежемесячный бонус (\`/monthly\`)}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$let[user;$findUser[$slashOption[user];true]]
$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901644/1245011736730538045/896158535082205255.png?ex=669f0cc9&is=669dbb49&hm=33a1e28ba65985729439a745fb5a5f60f82fde90cdbd776d48080d792c137c5d&]`
}];