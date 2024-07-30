module.exports = [
    {
        name: "ticket.create",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Создать тикет;ticket.reason;
  {actionRow:
    {textInput:Причина открытия тикета:2:reason:true:У меня возникли проблемы с аккаунтом на сервере...:10:1500}
  }]
$onlyIf[$getUserVar[tickets_open;$authorID]<=2;{newEmbed:{color:#f1090b}{description:Вы превысили лимит одновременно созданых тикетов.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "ticket.reason",
        type: "interaction",
        prototype: "modal",
        code: `
$interactionReply[{newEmbed:{description:Вы успешно создали тикет (<#$get[ticket1]>).}{timestamp}};;true;false]
$channelSendMessage[$get[ticket1];{newEmbed:{description:## Панель управления\n\n🚫 - Закрыть тикет.\n🚹 - Добавить участника.\n📛 - Удалить тикет.\n✋️ - Удалить участника.}}{actionRow:{button:🚫:secondary:ticket.close}{button:🚹:secondary:ticket.adduser}
{button:📛:secondary:ticket.delete}
{button:✋️:secondary:ticket.remuser}};false]
$setChannelVar[ticket_user;$authorID;$get[ticket1]]
$setGuildVar[tickets;$sum[$getGuildVar[tickets];1]]
$setUserVar[tickets_open;$sub[$getUserVar[tickets_open];1];$authorID]
$editChannel[$get[ticket1];$default;$default;$default;$authorID;false;$default;$default;$default;$default;$default;5s;$default;$default;Создан новый тикет]
$setChannelTopic[$channelID;$authorID]
$modifyChannelPerms[$get[ticket1];$authorID;+viewchannel;+sendmessages]
$modifyChannelPerms[$get[ticket1];$guildID;-viewchannel;-sendmessages]
$let[ticket1;$newTicket[тикет-$get[t];{newEmbed:{description:## Новый тикет\n**Только что был создан новый тикет.**\n\n__Автор__\n$username[$authorID] (<@$authorID>)\n__Дата создания__\n<t:$truncate[$math[$datestamp/1000]]:F> (<t:$truncate[$math[$datestamp/1000]]:R>)\n__Причина создания__\n\`\`\`$textInputValue[reason]\`\`\`}{timestamp}{thumbnail:$authorAvatar}};$channelCategoryID;true;{newEmbed:{color:#f1090b}{description:Не удалось создать тикет.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]]
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
    {textInput:Укажите айди/имя пользователя:1:user:true:10203939920202039 или _example4_:1:30}
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
    {textInput:Укажите айди/имя пользователя:1:user:true:10292721912983289 или _example5_:1:30}
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
$editChannel[$channelID;$default;$default;$default;Закрытый тикет участника $username[$getChannelVar[ticket_user]], модератором $username[$authorID] по причине $textInputValue[reason];false;$default;$default;1243947526986403850;$default;true;$default;$default;$default;Тикет закрыт]
$channelOverwrites
$setChannelTopic[$channelID;Закрытый тикет участника $username[$getChannelVar[ticket_user]], модератором $username[$authorID] по причине $textInputValue[reason]]
$interactionReply[{newEmbed:{description:Этот тикет был закрыт модератором **$username[$authorID]** (<@$authorID>).}{timestamp}}]
$setChannelVar[ticket_close_status;true;$channelID]
$setUserVar[tickets_open;$sub[$getUserVar[tickets_open];1];$getChannelVar[ticket_user;$channelID]]
$if[$isUserDmEnabled[$getChannelVar[ticket_user;$channelID]]==true]
$sendDM[{newEmbed:{author:Тикет:$get[author.icon]}{description:Ваш тикет был **закрыт** модератором **$username[$authorID]** (<@$authorID>)\n\n**Причина**\n$textInputValue[reason]}{timestamp}}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$getChannelVar[ticket_user;$channelID];false]
$else
$endif

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
          }
];