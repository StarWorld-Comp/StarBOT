module.exports = [
  {
   name: "$alwaysExecute",
   $if: "old",
   code: `
$if[$getUserVar[xp]>=$getUserVar[nextLevelXP]]
<@$authorID> Поздравляю! Вы повысили уровень до **$getUserVar[level]**!
$setUserVar[nextLevelXP;$round[$multi[$getUserVar[nextLevelXP];$getVar[xpMulti]]]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[xp;$sub[$getUserVar[xp];$getUserVar[nextLevelXP]]]
$endif
$if[$isBoosting[$authorID;$guildID]==true]
$setUserVar[xp;$sum[$getUserVar[xp];$random[4;14]]]
$else
$setUserVar[xp;$sum[$getUserVar[xp];$random[1;8]]]
$endif`
  },
  {
    name: "$alwaysExecute",
    $if: "old",
    code: `
$if[$messageType[$messageID;$channelID]==8]
$description[Участник **$username[$authorID]** (<@$authorID>) дал нашему проекту буст, Спасибо тебе!\nВсего бустов#COLON# **$guildBoostCount[$guildID]**]
$addTimestamp
$elseif[$messageType[$messageID;$channelID]==9]
$description[Уровень буста сервера был поднят до **1**]
$addTimestamp
$endelseif
$elseif[$messageType[$messageID;$channelID]==10]
$description[Уровень буста сервера был поднят до **2**]
$addTimestamp
$endelseif
$elseif[$messageType[$messageID;$channelID]==11]
$description[Уровень буста сервера был полнят до **3**]
$addTimestamp
$endelseif
$else
$setUserVar[messages;$sum[$getUserVar[messages;$authorID;$guildID];1];$authorID;$guildID]
$endif`
   },
   {
     name: "$alwaysExecute",
     $if: "old",
     code: `
$if[$checkContains[$message;https://discord.gg/;https://dsc.gg/;discord.gg/;dsc.gg/]==true]

$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Приглашения:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]

$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;15h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand
$endif
$onlyIf[$hasPerms[$guildID;$authorID;administrator;managemessages;moderatemembers]!=true]`
    },
    {
     name: "$alwaysExecute",
     $if: "old",
     code: `
$if[$checkContains[$message;шлюха;Шлюха;Гей;гей;пидорас;Пидорас;идиот;Идиот;проститутка;Проститутка;ебал;Ебал;трахал;Трахал;насиловал;Насиловал;пидор;Пидор;хуесос;Хуесос;подсос;очкошник;гандон;сука;гондурас;гондон;еблан;ахуел;блядина;долбаеб;уёб;Пиздец;пиздец;хуй;Хуй]==true]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Плохие слова:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]

$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;24h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand
$endif
$onlyIf[$hasPerms[$guildID;$authorID;administrator;managemessages;moderatemembers]!=true]`
    },
    {
     name: "$alwaysExecute",
     $if: "old",
     code: `
$if[$checkContains[$message;https://t.me/;t.me/;t.me]==true]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Ссылки:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]

$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;24h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif

$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand
$endif
$onlyIf[$hasPerms[$guildID;$authorID;administrator;managemessages;moderatemembers]!=true]`
    }
];