module.exports = [
   {
    name: "leaderboard",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionEdit[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:**$username[$authorID]**, Ваша позиция в топе: **$getLeaderboardInfo[balance;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;balance;desc;**#{top}. {username}**\nВсего#COLON# {value} <#COLON#cheap#COLON#1275714873677975553>;10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::false:📈}{stringInput:Сорт. по балансу:balance::true:💰}{stringInput:Сорт. по голосовой активности:voice::false:🎤}{stringInput:Сорт. по отправленым сообщениям:messages::false:📨}{stringInput:Сорт. по ограблениям:thiefs::false:🕵}}}{actionRow:{button::secondary:backbalance:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagebalance:true}{button::secondary:nextbalance:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]
$wait[2s]
$interactionReply[Получение информации...]`
   },
   {
    name: "leaderboards",
    type: "interaction",
    prototype: "selectMenu",
    $if: "old",
    code: `
$if[$interactionData[values[0]]==level]
$interactionUpdate[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:$username[$authorID], Ваша позиция в топе: **$getLeaderboardInfo[level;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;level;desc;**#{top}. {username}**\nУровень: {value};10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::true:📈}{stringInput:Сорт. по балансу:balance::false:💰}{stringInput:Сорт. по голосовой активности:voice::false:🎤}{stringInput:Сорт. по отправленым сообщениям:messages::false:📨}{stringInput:Сорт. по ограблениям:thiefs::false:🕵}}}{actionRow:{button::secondary:backlevel:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagelevel:true}{button::secondary:nextlevel:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]

$elseif[$interactionData[values[0]]==balance]
$interactionUpdate[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:$username[$authorID], Ваша позиция в топе: **$getLeaderboardInfo[balance;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;balance;desc;**#{top}. {username}**\nВсего: {value} <#COLON#cheap#COLON#1275714873677975553>;10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::false:📈}{stringInput:Сорт. по балансу:balance::true:💰}{stringInput:Сорт. по голосовой активности:voice::false:🎤}{stringInput:Сорт. по отправленым сообщениям:messages::false:📨}{stringInput:Сорт. по ограблениям:thiefs::false:🕵}}}{actionRow:{button::secondary:backbalance:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagebalance:true}{button::secondary:nextbalance:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]
$endelseif

$elseif[$interactionData[values[0]]==voice]
$interactionUpdate[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:$username[$authorID], Ваша позиция в топе: **$getLeaderboardInfo[voice;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;voice;desc;**#{top}. {username}**\nГолосовая активность: {value}\nПоследнее обновление: (<t:$divide[$datestamp;1000]>);10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::false:📈}{stringInput:Сорт. по балансу:balance::false:💰}{stringInput:Сорт. по голосовой активности:voice::true:🎤}{stringInput:Сорт. по отправленым сообщениям:messages::false:📨}{stringInput:Сорт. по ограблениям:thiefs::false:🕵}}}{actionRow:{button::secondary:backvoice:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagevoice:true}{button::secondary:nextvoice:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]
$endelseif

$elseif[$interactionData[values[0]]==messages]
$interactionUpdate[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:$username[$authorID], Ваша позиция в топе: **$getLeaderboardInfo[messages;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;messages;desc;**#{top}. {username}**\nСообщений: {value};10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::false:📈}{stringInput:Сорт. по балансу:balance::false:💰}{stringInput:Сорт. по голосовой активности:voice::false:🎤}{stringInput:Сорт. по отправленым сообщениям:message::true:📨}{stringInput:Сорт. по ограблениям:thiefs::false:🕵}}}{actionRow:{button::secondary:backmessages:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagemessages:true}{button::secondary:nextmessages:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]
$endelseif

$elseif[$interactionData[values[0]]==thiefs]
$interactionUpdate[{newEmbed:{title:Список лидеров}{thumbnail:$userAvatar[$clientID]}{description:$username[$authorID], Ваша позиция в топе: **$getLeaderboardInfo[thiefs;$authorID;user;top;main]**\n\n$userLeaderBoard[$guildID;thiefs;desc;**#{top}. {username}**\nОграблений: {value}\nУспешных: $getUserVar[success_thiefs;{id}]\nПровальных: $getUserVar[fail_thiefs;{id}];10;1;main]}{footer:Страница 1 из ???}{timestamp}}{actionRow:{selectMenu:leaderboards:Сортировать по...:1:1:false:{stringInput:Сорт. по уровню:level::false:📈}{stringInput:Сорт. по балансу:balance::false:💰}{stringInput:Сорт. по голосовой активности:voice::false:🎤}{stringInput:Сорт. по отправленым сообщениям:messages::false:📨}{stringInput:Сорт. по ограблениям:thiefs::true:🕵}}}{actionRow:{button::secondary:backthiefs:true:1274377982659530792}{button:Перейти к странице:secondary:selectpagethiefs:true}{button::secondary:nextthiefs:true:1274377826216444058}{button::secondary:del:false:1276107115425169461}}]
$endelseif
$endif`
  },
  {
    name: "errormsg1",
    type: "awaited",
    code: `
$interactionReply[{newEmbed:{author:Ошибка взаимодействия:get[error.icon]}{description:Время этого взаимодействия истекло. При необходимости вызовите связанную с ним команду еще раз.}{timestamp}{color:#f1090b}};;true]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
  },
  {
    name: "del",
    type: "interaction",
    prototype: "button",
    code: `
$deleteMessage[$interactionData[message.id];$channelID]`
  }
];