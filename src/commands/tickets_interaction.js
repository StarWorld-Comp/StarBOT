module.exports = [
    {
        name: "ticket.create",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Создать тикет;ticket.reason;
  {actionRow:
    {textInput:Причина открытия тикета:2:reason:true:У меня возникли проблемы с аккаунтом на сервере...:10:1000}
  }]
$onlyIf[$getUserVar[tickets_open;$authorID;$guildID;ticket]<=2;{newEmbed:{color:#f1090b}{description:Вы превысили лимит одновременно созданых тикетов.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
    },
    {
        name: "ticket.reason",
        type: "interaction",
        prototype: "modal",
        $if: "old",
        code: `
$interactionEdit[{newEmbed:{description:Вы успешно создали тикет (<#$get[ticket1]>)}{color:#2b2d31}}]

$if[$isUserDmEnabled[$authorID]==true]
$sendDM[{newEmbed:{author:Тикет}{description:Вы создали новый тикет **$channelName[$get[ticket1]]** (<#$get[ticket1]>).}{field:Причина:$textInputValue[reason]}{timestamp}{color:Green}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$authorID;false]
$endif

$editChannel[$get[ticket1];{
"topic": "$authorID", "reason": "Создан новый тикет", "type": "0", "rateLimitPerUser": "5"}]
$channelSendMessage[$get[ticket1];{newEmbed:{description:## Новый тикет\n**Только что был создан новый тикет.**}{field:Автор:$username[$authorID] (<@$authorID>)}{field:Дата создания:<t\:$truncate[$math[$datestamp/1000]]\:F> (<t\:$truncate[$math[$datestamp/1000]]\:R>)}{field:Причина создания:\`\`\`$textInputValue[reason]\`\`\`}{timestamp}{thumbnail:$authorAvatar}{color:#2b2d31}}{newEmbed:{description:## Панель управления}{field:🚫 - Закрыть тикет:-# Закроет текущий билет удаля при этом всех участников кроме администрации, а также переместит этот канал в категорию Модерации.}{field:🚹 - Добавить участника:-# Добавит указанного участника в текущий билет, а также даст ему права писать и видеть сообщения.}{field:📛 - Удалить тикет:-# Удалит текущий билет безвозвратно.}{field:✋️ - Удалить участника:-# Удалит указанного участника из текущего билета.}{thumbnail:attachment://setting.png}{color:#2b2d31}}{attachment:setting.png:./src/icons/setting.png}{actionRow:{button:🚫:secondary:ticket.close}{button:🚹:secondary:ticket.adduser}
{button:📛:secondary:ticket.delete}
{button:✋️:secondary:ticket.remuser}};false]

$setChannelVar[ticket_user;$authorID;$get[ticket1];ticket]
$setGuildVar[tickets;$sum[$getGuildVar[tickets;$guildID;ticket];1];$guildID;ticket]

$modifyChannelPerms[$get[ticket1];$authorID;+viewchannel;+sendmessages]
$modifyChannelPerms[$get[ticket1];$guildID;-viewchannel;-sendmessages]

$let[ticket1;$createChannel[$guildID;тикет-$get[t];text;true;$channelCategoryID]]
$interactionReply[<a:load:1281959260049379348> Создаю тикет...;;true]
$let[t;$replaceText[$replaceText[$checkCondition[$getGuildVar[tickets;$guildID;ticket]<10];true;000$getGuildVar[tickets;$guildID;ticket]];false;$replaceText[$replaceText[$checkCondition[$and[$getGuildVar[tickets;$guildID;ticket]<100;$getGuildVar[tickets;$guildID;ticket]>=10]==true];true;00$getGuildVar[tickets;$guildID;ticket]];false;$replaceText[$replaceText[$checkCondition[$getGuildVar[tickets;$guildID;ticket]>999];true;$getGuildVar[tickets;$guildID;ticket]];false;0$getGuildVar[tickets;$guildID;ticket]]]]]`
    },
    {
        name: "ticket.close",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Закрыть тикет;ticket.close_confirm;
  {actionRow:
    {textInput:Укажите причину закрытия тикета:2:reason:true:Проблема решена!:10:1500}
  }]
$onlyIf[$getChannelVar[ticket_close_status;$channelID;ticket]!=true;{newEmbed:{color:#f1090b}{description:Этот тикет уже закрыт.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
     },
     {
         name: "ticket.delete",
         type: "interaction",
         prototype: "button",
         code: `$deleteChannel[$channelID]
$onlyIf[$getChannelVar[ticket_close_status;$channelID;ticket]==true;{newEmbed:{color:#f1090b}{description:Сначала закройте тикет.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
     },
     {
         name: "ticket.adduser",
         type: "interaction",
         prototype: "button",
         code: `
$interactionModal[Добавить участника;ticket.adduser_confirm;
  {actionRow:
    {textInput:Укажите айди/имя пользователя:1:user:true::1:30}
  }]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
       },
       {
           name: "ticket.remuser",
           type: "interaction",
           prototype: "button",
           code: `
$interactionModal[Удалить участника;ticket.remuser_confirm;
  {actionRow:
    {textInput:Укажите айди/имя пользователя:1:user:true::1:30}
  }]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
         },
         {
           name: "ticket.close_confirm",
           type: "interaction",
           prototype: "modal",
           $if: "old",
           code: `
$interactionEdit[{newEmbed:{description:Этот тикет был закрыт модератором **$username[$authorID]** (<@$authorID>).}{timestamp}{color:#2b2d31}}]
$editChannel[$channelID;{"topic": "Закрытый тикет участника $username[$getChannelVar[ticket_user;$channelID;ticket]], модератором $username[$authorID] по причине $textInputValue[reason]", "parent": "1243947526986403850", "reason": "Тикет закрыт", "type": "0"}]
$setChannelVar[ticket_close_status;true;$channelID;ticket]
$setUserVar[tickets_open;$sub[$getUserVar[tickets_open;$authorID;$guildID;ticket];1];$getChannelVar[ticket_user;$channelID;ticket];$guildID;ticket]
$if[$isUserDmEnabled[$getChannelVar[ticket_user;$channelID;ticket]]==true]
$sendDM[{newEmbed:{author:Тикет}{description:Ваш тикет был **закрыт** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$textInputValue[reason]}{timestamp}{color:Red}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$getChannelVar[ticket_user;$channelID;ticket];false]
$endif
$interactionReply[<a:load:1281959260049379348> Закрываю тикет...]`
          },
          {
           name: "ticket.remuser_confirm",
           type: "interaction",
           prototype: "modal",
           code: `
$interactionEdit[{newEmbed:{description:Участник <@$get[user]> был успешно удалён из тикет.}{timestamp}{color:#2b2d31}}]
$modifyChannelPerms[$channelID;$get[user];-sendmessages;-viewchannel]
$interactionReply[<a:load:1281959260049379348> Удаляю участника...]
$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Участник не найден.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$let[user;$findMember[$textInputValue[user];true;$guildID]]`
         },
         {
           name: "ticket.adduser_confirm",
           type: "interaction",
           prototype: "modal",
           code: `
$interactionEdit[{newEmbed:{description:Участник <@$get[user]> был успешно добавлен в тикет.}{timestamp}{color:#2b2d31}}]
$modifyChannelPerms[$channelID;$get[user];+sendmessages;+viewchannel]
$interactionReply[<a:load:1281959260049379348> Добавляю участника...]
$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Участник не найден.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$let[user;$findMember[$textInputValue[user];true;$guildID]]`
         }
];