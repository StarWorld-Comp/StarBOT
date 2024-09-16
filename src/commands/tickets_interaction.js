module.exports = [
    {
        name: "ticket.create",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Создать тикет;ticket.reason;
  {actionRow:
    {textInput:Причина открытия тикета:2:reason:true:У меня возникли проблемы с аккаунтом на сервере...:10:1000}
  }]
$onlyIf[$getUserVar[tickets_open;$authorID]<=2;{newEmbed:{color:#f1090b}{description:Вы превысили лимит одновременно созданых тикетов.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "ticket.reason",
        type: "interaction",
        prototype: "modal",
        code: `
$interactionEdit[{newEmbed:{description:Вы успешно создали тикет (<#$get[ticket1]>).}{timestamp}}]

$if[$isUserDmEnabled[$authorID]==true]
$sendDM[{newEmbed:{author:Тикет}{description:Вы создали новый тикет **$channelName[$get[ticket1]]** (<#$get[ticket1]>).}{field:Причина:$textInputValue[reason]}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$authorID;false]
$endif

$editChannel[$get[ticket1];{
"topic": "$authorID", "reason": "Создан новый тикет", "type": "0", "rateLimitPerUser": "5"}]
$channelSendMessage[$get[ticket1];{newEmbed:{description:## Новый тикет\n**Только что был создан новый тикет.**}{field:Автор:$username[$authorID] (<@$authorID>)}{field:Дата создания:<t\:$truncate[$math[$datestamp/1000]]\:F> (<t\:$truncate[$math[$datestamp/1000]]\:R>)}{field:Причина создания:\`\`\`$textInputValue[reason]\`\`\`}{timestamp}{thumbnail:$authorAvatar}}{newEmbed:{description:## Панель управления}{field:🚫 - Закрыть тикет:-# Закроет текущий билет удаля при этом всех участников кроме администрации, а также переместит этот канал в категорию Модерации.}{field:🚹 - Добавить участника:-# Добавит указанного участника в текущий билет, а также даст ему права писать и видеть сообщения.}{field:📛 - Удалить тикет:-# Удалит текущий билет безвозвратно.}{field:✋️ - Удалить участника:-# Удалит указанного участника из текущего билета.}{thumbnail:https://cdn.discordapp.com/attachments/1162658570077229130/1283426628373971004/icons8--96.png?ex=66e2f3b1&is=66e1a231&hm=f3a88666ac50e6498b7af815b37c5ef654d8450713b537a0a9409dfa0d70a842&}}{actionRow:{button:🚫:secondary:ticket.close}{button:🚹:secondary:ticket.adduser}
{button:📛:secondary:ticket.delete}
{button:✋️:secondary:ticket.remuser}};false]
$setChannelVar[ticket_user;$authorID;$get[ticket1]]
$setGuildVar[tickets;$sum[$getGuildVar[tickets];1]]

$modifyChannelPerms[$get[ticket1];$authorID;+viewchannel;+sendmessages]
$modifyChannelPerms[$get[ticket1];$guildID;-viewchannel;-sendmessages]

$let[ticket1;$createChannel[$guildID;тикет-$get[t];text;true;$channelCategoryID]]
$interactionReply[<a:load:1281959260049379348> Создаю тикет...;;true]
$let[t;$replaceText[$replaceText[$checkCondition[$getGuildVar[tickets]<10];true;000$getGuildVar[tickets]];false;$replaceText[$replaceText[$checkCondition[$and[$getGuildVar[tickets]<100;$getGuildVar[tickets]>=10]==true];true;00$getGuildVar[tickets]];false;$replaceText[$replaceText[$checkCondition[$getGuildVar[tickets]>999];true;$getGuildVar[tickets]];false;0$getGuildVar[tickets]]]]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "ticket.close",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Закрыть тикет;ticket.close_confirm;
  {actionRow:
    {textInput:Укажите причину закрытия тикета:2:reason:true:Проблема решена!:10:1500}
  }]
$onlyIf[$getChannelVar[ticket_close_status;$channelID]!=true;{newEmbed:{color:#f1090b}{description:Этот тикет уже закрыт.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
     },
     {
         name: "ticket.delete",
         type: "interaction",
         prototype: "button",
         code: `$deleteChannel[$channelID]
$onlyIf[$getChannelVar[ticket_close_status;$channelID]==true;{newEmbed:{color:#f1090b}{description:Сначала закройте тикет.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
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
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
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
$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         },
         {
           name: "ticket.close_confirm",
           type: "interaction",
           prototype: "modal",
           $if: "old",
           code: `
$interactionEdit[{newEmbed:{description:Этот тикет был закрыт модератором **$username[$authorID]** (<@$authorID>).}{timestamp}}]
$editChannel[$channelID;{"topic": "Закрытый тикет участника $username[$getChannelVar[ticket_user]], модератором $username[$authorID] по причине $textInputValue[reason]", "parent": "1243947526986403850", "reason": "Тикет закрыт", "type": "0"}]
$setChannelVar[ticket_close_status;true;$channelID]
$setUserVar[tickets_open;$sub[$getUserVar[tickets_open];1];$getChannelVar[ticket_user;$channelID]]
$if[$isUserDmEnabled[$getChannelVar[ticket_user;$channelID]]==true]
$sendDM[{newEmbed:{author:Тикет}{description:Ваш тикет был **закрыт** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$textInputValue[reason]}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$getChannelVar[ticket_user;$channelID];false]
$endif
$interactionReply[<a:load:1281959260049379348> Закрываю тикет...]

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
          },
          {
           name: "ticket.remuser_confirm",
           type: "interaction",
           prototype: "modal",
           code: `
$interactionEdit[{newEmbed:{description:Участник <@$get[user]> был успешно удалён из тикет.}{timestamp}}]
$modifyChannelPerms[$channelID;$get[user];-sendmessages;-viewchannel]
$interactionReply[<a:load:1281959260049379348> Удаляю участника...]
$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Участник не найден.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[user;$findMember[$textInputValue[user];true;$guildID]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         },
         {
           name: "ticket.adduser_confirm",
           type: "interaction",
           prototype: "modal",
           code: `
$interactionEdit[{newEmbed:{description:Участник <@$get[user]> был успешно добавлен в тикет.}{timestamp}}]
$modifyChannelPerms[$channelID;$get[user];+sendmessages;+viewchannel]
$interactionReply[<a:load:1281959260049379348> Добавляю участника...]
$onlyIf[$get[user]!=$authorID;{newEmbed:{color:#f1090b}{description:Участник не найден.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[user;$findMember[$textInputValue[user];true;$guildID]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         }
];