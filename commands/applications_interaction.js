module.exports = [
    {
        name: "rules_app",
        type: "interaction",
        prototype: "button",
        code: `
$interactionReply[{newEmbed:{author:Rules & Conditions}{title:Правила и Условия}{description:1. Подавая заявку вы автоматически соглашаетесь с этими правилами и условиями.\n\n2. Ваша заявка может рассматриваться от нескольких часов до нескольких недель.\n\n3. Если вы после подачи заявки пишите в чаты проекта либо администрации проекта чтобы вас приняли/быстрее рассмотрели заявку то ваша заявка будет автоматически отклонена без возможности на повторное рассмотрение.\n\n4. На момент подачи заявки ваш возраст должен быть 14+ лет, в некоторых случаях может быть исключение (13+).\n\n5. В заявки вы должны будете предоставить документ подтверждающий ваш возраст (паспорт / свидетельство о рождении / водительские права / иные документы).\n\n6. На момент подачи заявки вы должны быть игроком проекта не менее 2 недель.\n\n7. У вас должны быть наушники и микрофон для общения с администрацией.\n\n8. Вы должны хорошо знать правила проекта.\n\n9. Необходимо хорошо знать русский язык и быть грамотным.\n\n10. На момент подачи заявки у вас не должно быть не каких нарушений за последний месяц.\n\n11. Ваш игровой ник, а также ник в соц.сетях не должен содержать не цензурные слова / выражения и т.п.\n\n12. За нарушение условий / правил написаных выше вы можете понести соответсвующие наказание (Лешение права подавать заявку на определённую должность на некоторое время либо навсегда, либо на все должности на некоторое время либо навсегда, блокировка аккаунта и т.п.\n\n13. Заявку можно подавать только раз в месяц.\n\n14. Если вашу заявку отклонили то повторно её можно подать только через месяц.\n\n15. Перед подачей заявки включите личные сообщения от участников сервера в настройках.}{timetstamp}{footer:Подавая заявку мы горантируем что данные которые вы указали будут в безопасности и доступны только для проверяющих заявки.:$guildIcon}};;true]`
    },
    {
        name: "helper_app",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `
$interactionModal[Заявка на Хелпера;helper_appmodal;
  {actionRow:
    {textInput:ФИО:1:fio:true:Столбников Иван Петрович:1:100}
  }
  {actionRow:
    {textInput:Возраст:1:years:true:15:1:2}
  }
  {actionRow:
    {textInput:ВКонтакте:1:vk_url:true:https#COLON#//vk.com/arseniy:10:150}
  }
  {actionRow:
    {textInput:Паспорт либо другой документ:2:document:true:Сдесь укажите ссылку на фото вашего паспорта либо другого документа подтверждающего ваш возраст.:5:700}
  }
  {actionRow:
    {textInput:О вас:2:bio:true:Я тру Сигма, люблю играть на этом замечательном проекте.:20:1000}
  }]

$onlyIf[$isUserDmEnabled[$authorID]==true;{newEmbed:{color:#f1090b}{description:Перед подачей заявки включите личные сообщения от участников сервера в настройках.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$getGuildVar[application_helper]==on;{newEmbed:{color:#f1090b}{description:Подача заявок на эту должность временно недоступно, либо заявка закрыта.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$getCooldownTime[28d;user;helper_appmodal;$authorID]==0;{newEmbed:{color:#f1090b}{description:Вы уже подавали заявку на эту должность в этом месяце, попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[28d;user;helper_appmodal;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Не удалось обработать запрос, возможно в системе заявок проходят технические работы, либо произошла критическая ошибка.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "yt_app",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[Заявка на Ютубера;yt_appmodal;
  {actionRow:
    {textInput:ФИО:1:fio:true:Столбников Иван Петрович:1:100}
  }
  {actionRow:
    {textInput:Возраст:1:years:true:15:1:2}
  }
  {actionRow:
    {textInput:Ютуб канал:1:yt_url:true:https#COLON#//youtube.com/example:10:150}
  }
  {actionRow:
    {textInput:Паспорт либо другой документ:2:document:true:Сдесь укажите ссылку на фото вашего паспорта либо другого документа подтверждающего ваш возраст.:5:700}
  }
  {actionRow:
    {textInput:О вас:2:bio:true:Я тру Сигма, люблю играть на этом замечательном проекте.:20:1000}
  }]
$if[$hasPerms[$guildID;$authorID;administrator]!=true]
$cooldown[28d;{newEmbed:{color:#f1090b}{description:Вы уже подавали заявку на эту должность в этом месяце, попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[28d;user;yt_appmodal;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$endif
$onlyIf[$isUserDmEnabled[$authorID]==true;{newEmbed:{color:#f1090b}{description:Перед подачей заявки включите личные сообщения от участников сервера в настройках.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyIf[$getGuildVar[application_yt]==on;{newEmbed:{color:#f1090b}{description:Подача заявок на эту должность временно недоступно, либо заявка закрыта.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$suppressErrors[{newEmbed:{color:#f1090b}{description:Не удалось обработать запрос, возможно в системе заявок проходят технические работы, либо произошла критическая ошибка.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
     },
     {
         name: "tiktok_app",
         type: "interaction",
         prototype: "button",
         code: `$interactionModal[Заявка на Тиктокера;tiktok_appmodal;
  {actionRow:
    {textInput:ФИО:1:fio:true:Столбников Иван Петрович:1:100}
  }
  {actionRow:
    {textInput:Возраст:1:years:true:15:1:2}
  }
  {actionRow:
    {textInput:Тикток канал:1:yt_url:true:https#COLON#//youtube.com/example:10:150}
  }
  {actionRow:
    {textInput:Паспорт либо другой документ:2:document:true:Сдесь укажите ссылку на фото вашего паспорта либо другого документа подтверждающего ваш возраст.:5:700}
  }
  {actionRow:
    {textInput:О вас:2:bio:true:Я тру Сигма, люблю играть на этом замечательном проекте.:20:1000}
  }]

$if[$hasPerms[$guildID;$authorID;administrator]!=true]
$cooldown[28d;{newEmbed:{color:#f1090b}{description:Вы уже подавали заявку на эту должность в этом месяце, попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[28d;user;tiktok_appmodal;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$endif

$onlyIf[$isUserDmEnabled[$authorID]==true;{newEmbed:{color:#f1090b}{description:Перед подачей заявки включите личные сообщения от участников сервера в настройках.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]+

$onlyIf[$getGuildVar[application_tiktok;$guildID;main]==on;{newEmbed:{color:#f1090b}{description:Подача заявок на эту должность временно недоступно, либо заявка закрыта.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Не удалось обработать запрос, возможно в системе заявок проходят технические работы, либо произошла критическая ошибка.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
     },
     {
        name: "helper_appmodal",
        type: "interaction",
        prototype: "modal",
        $if: "old",
        code: `
$interactionReply[{newEmbed:{description:Ваша анкета была успешно отправлена на рассмотрение.\nПо окончанию проверки я сообщу вам результаты в личных сообщениях.\n\n-# Если вы по ошибке отправили неверные данные то вы можете обратится в нашу службу технической поддержки через тикет}{timestamp}{footer:ID вашей заявки#COLON# $get[msg.id]}};;true]
$setMessageVar[user;$authorID;$get[msg.id];main]
$setMessageVar[document;$textInputValue[document];$get[msg.id];main]
$setMessageVar[years;$textInputValue[years];$get[msg.id];main]
$setMessageVar[fio;$textInputValue[fio];$get[msg.id];main]
$setMessageVar[bio;$textInputValue[bio];$get[msg.id];main]
$setMessageVar[vk;$textInputValue[vk_url];$get[msg.id];main]
$let[msg.id;$channelSendMessage[1265292151374221436;{newEmbed:{author:$username[$authorID]:$authorAvatar}{title:Новая заявка на Хелпера}{description:Только что участник **$username[$authorID]** (<@$authorID>) подал заявку.}{field:Статус заявки:\`\`\`На рассмотрении\`\`\`}{field:Данные участника:ФИО#COLON# _$textInputValue[fio]_\nВозраст#COLON# _$textInputValue[years]_\nVK#COLON# _$textInputValue[vk_url]_\nО себе#COLON# $textInputValue[bio]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$textInputValue[document]}{footer:ID заявки#COLON# $messageID}{thumbnail:$authorAvatar}}{actionRow:{button:Принять:success:helper-accept}{button:Отклонить:danger:helper-reject}};true]]

$onlyIf[$checkContains[$textInputValue[document];.png;.jpg;.jpeg;.jpe;.gif;.svg;.webp;.jfif;.tiff;.tif]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш документ, убедитесь что ссылка указанная вами является рабочей и ведёт на фото документа.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isValidImageLink[$textInputValue[document]]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш документ, убедитесь что ссылка указанная вами является рабочей и ведёт на фото документа.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isValidLink[$textInputValue[document]]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш документ, убедитесь что ссылка указанная вами является рабочей и ведёт на фото документа.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$checkContains[$textInputValue[vk_url];vk.com/]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить вашу страницу ВКонтакте, убедитесь что ссылка указанная вами является рабочей и ведёт на вашу страницу.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isValidLink[$textInputValue[vk_url]]==true;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, некорректная ссылка на страницу Вконтакте.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$textInputValue[years]>=13;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, похоже вы не соответствуете минимальным требованиям подачи заявки.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isNumber[$textInputValue[years]]==true;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, убедитесь что в поле **Возраст** вы указали корректные данные.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$getTextSplitLength==3;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, убедитесь что в поле **ФИО** вы указали корректные данные.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$textSplit[$textInputValue[fio]; ]

$if[$hasPerms[$guildID;$authorID;administrator]!=true]
$cooldown[28d;{newEmbed:{color:#f1090b}{description:Вы уже подавали заявку на эту должность в этом месяце, попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[28d;user;helper_appmodal;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$endif

$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "helper-accept",
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{description:Заявка участника **$username[$getMessageVar[user;$interactionData[message.id];main]]** (<@$getMessageVar[user;$interactionData[message.id];main]>) принята администратором **$username[$authorID]** (<@$authorID>)}{footer:StarWorld Safety:$guildIcon}{timestamp}}]
$editMessage[$interactionData[message.id];{newEmbed:{author:$username[$getMessageVar[user;$interactionData[message.id];main]]:$userAvatar[$getMessageVar[user;$interactionData[message.id];main]]}{title:Новая заявка на Хелпера}{description:Только что участник **$username[$getMessageVar[user;$interactionData[message.id];main]]** (<@$getMessageVar[user;$interactionData[message.id];main]>) подал заявку.}{field:Статус заявки:\`\`\`Принята\`\`\`}{field:Данные участника:ФИО#COLON# _$getMessageVar[fio;$interactionData[message.id]]_\nВозраст#COLON# _$getMessageVar[years;$interactionData[message.id]]_\nVK#COLON# _$getMessageVar[vk;$interactionData[message.id]]_\nО себе#COLON# $getMessageVar[bio;$interactionData[message.id]]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$getMessageVar[document;$interactionData[message.id]]}{footer:ID заявки#COLON# $messageID}{thumbnail:$userAvatar[$getMessageVar[user;$interactionData[message.id];main]]}}{actionRow:{button:Принять:success:helper-accept:true}{button:Отклонить:danger:helper-reject:true}};$channelID]`
    },
    {
        name: "helper-reject",
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{description:Заявка участника **$username[$getMessageVar[user;$interactionData[message.id];main]]** (<@$getMessageVar[user;$interactionData[message.id];main]>) отклонена администратором **$username[$authorID]** (<@$authorID>)}{footer:StarWorld Safety:$guildIcon}{timestamp}}]
$editMessage[$interactionData[message.id];{newEmbed:{author:$username[$getMessageVar[user;$interactionData[message.id];main]]:$userAvatar[$getMessageVar[user;$interactionData[message.id];main]]}{title:Новая заявка на Хелпера}{description:Только что участник **$username[$getMessageVar[user;$interactionData[message.id];main]]** (<@$getMessageVar[user;$interactionData[message.id];main]>) подал заявку.}{field:Статус заявки:\`\`\`Отклонена\`\`\`}{field:Данные участника:ФИО#COLON# _$getMessageVar[fio;$interactionData[message.id]]_\nВозраст#COLON# _$getMessageVar[years;$interactionData[message.id]]_\nVK#COLON# _$getMessageVar[vk;$interactionData[message.id]]_\nО себе#COLON# $getMessageVar[bio;$interactionData[message.id]]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$getMessageVar[document;$interactionData[message.id]]}{footer:ID заявки#COLON# $messageID}{thumbnail:$userAvatar[$getMessageVar[user;$interactionData[message.id];main]]}}{actionRow:{button:Принять:success:helper-accept:true}{button:Отклонить:danger:helper-reject:true}};$channelID]`
    },
         {
        name: "yt_appmodal",
        type: "interaction",
        prototype: "modal",
        code: `
$interactionReply[{newEmbed:{description:Ваша анкета была успешно отправлена на рассмотрение.\nПо окончанию проверки я сообщу вам результаты в личных сообщениях.\n\n-# Если вы по ошибке отправили неверные данные то вы можете обратится в нашу службу технической поддержки через тикет}{timestamp}{footer:ID вашей заявки#COLON# $get[msg.id]}};;true]
$setMessageVar[user;$authorID;$get[msg.id]]
$setMessageVar[document;$textInputValue[document];$get[msg.id]]
$setMessageVar[years;$textInputValue[years];$get[msg.id]]
$setMessageVar[fio;$textInputValue[fio];$get[msg.id]]
$setMessageVar[bio;$textInputValue[bio];$get[msg.id]]
$setMessageVar[yt;$textInputValue[yt_url];$get[msg.id]]
$let[msg.id;$channelSendMessage[1265292151374221436;{newEmbed:{author:$username[$authorID]:$authorAvatar}{title:Новая заявка на Ютубера}{description:Только что участник **$username[$authorID]** (<@$authorID>) подал заявку.}{field:Статус заявки:\`\`\`На рассмотрении\`\`\`}{field:Данные участника:ФИО#COLON# _$textInputValue[fio]_\nВозраст#COLON# _$textInputValue[years]_\nЮтуб канал#COLON# _$textInputValue[yt_url]_\nО себе#COLON# $textInputValue[bio]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$textInputValue[document]}{footer:ID заявки#COLON# $messageID}{thumbnail:$authorAvatar}}{actionRow:{button:Принять:success:yt-accept}{button:Отклонить:danger:yt-reject}};true]]

$onlyIf[$checkContains[$textInputValue[document];.png;.jpg;.jpeg;.jpe;.gif;.svg;.webp;.jfif;.tiff;.tif]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш документ, убедитесь что ссылка указанная вами является рабочей и ведёт на фото документа.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isValidImageLink[$textInputValue[document]]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш документ, убедитесь что ссылка указанная вами является рабочей и ведёт на фото документа.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$checkContains[$textInputValue[yt_url];youtube.com/]==true;{newEmbed:{color:#f1090b}{description:Не удалось проверить ваш Ютуб канал, убедитесь что ссылка указанная вами является рабочей и ведёт на ваш канал.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isValidLink[$textInputValue[yt_url]]==true;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, некорректная ссылка на Ютуб канал.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$textInputValue[years]>=13;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, похоже вы не соответствуете минимальным требованиям подачи заявки.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$isNumber[$textInputValue[years]]==true;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, убедитесь что в поле **Возраст** вы указали корректные данные.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$getTextSplitLength==3;{newEmbed:{color:#f1090b}{description:Не удалось отправить заявку, убедитесь что в поле **ФИО** вы указали корректные данные.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$textSplit[$textInputValue[fio]; ]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "yt-accept",
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{description:Заявка участника **$username[$getMessageVar[user;$interactionData[message.id]]]** (<@$getMessageVar[user;$interactionData[message.id]]>) принята администратором **$username[$authorID]** (<@$authorID>)}{footer:StarWorld Safety:$guildIcon}{timestamp}}]
$editMessage[$interactionData[message.id];{newEmbed:{author:$username[$getMessageVar[user;$interactionData[message.id]]]:$userAvatar[$getMessageVar[user;$interactionData[message.id]]]}{title:Новая заявка на Хелпера}{description:Только что участник **$username[$getMessageVar[user;$interactionData[message.id]]]** (<@$getMessageVar[user;$interactionData[message.id]]>) подал заявку.}{field:Статус заявки:\`\`\`Принята\`\`\`}{field:Данные участника:ФИО#COLON# _$getMessageVar[fio;$interactionData[message.id]]_\nВозраст#COLON# _$getMessageVar[years;$interactionData[message.id]]_\nVK#COLON# _$getMessageVar[vk;$interactionData[message.id]]_\nО себе#COLON# $getMessageVar[bio;$interactionData[message.id]]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$getMessageVar[document;$interactionData[message.id]]}{footer:ID заявки#COLON# $messageID}{thumbnail:$userAvatar[$getMessageVar[user;$interactionData[message.id]]]}}{actionRow:{button:Принять:success:helper-accept:true}{button:Отклонить:danger:helper-reject:true}};$channelID]`
    },
    {
        name: "yt-reject",
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[{newEmbed:{description:Заявка участника **$username[$getMessageVar[user;$interactionData[message.id]]]** (<@$getMessageVar[user;$interactionData[message.id]]>) отклонена администратором **$username[$authorID]** (<@$authorID>)}{footer:StarWorld Safety:$guildIcon}{timestamp}}]
$editMessage[$interactionData[message.id];{newEmbed:{author:$username[$getMessageVar[user;$interactionData[message.id]]]:$userAvatar[$getMessageVar[user;$interactionData[message.id]]]}{title:Новая заявка на Хелпера}{description:Только что участник **$username[$getMessageVar[user;$interactionData[message.id]]]** (<@$getMessageVar[user;$interactionData[message.id]]>) подал заявку.}{field:Статус заявки:\`\`\`Отклонена\`\`\`}{field:Данные участника:ФИО#COLON# _$getMessageVar[fio;$interactionData[message.id]]_\nВозраст#COLON# _$getMessageVar[years;$interactionData[message.id]]_\nVK#COLON# _$getMessageVar[vk;$interactionData[message.id]]_\nО себе#COLON# $getMessageVar[bio;$interactionData[message.id]]}{field:Документ подтверждающий возраст:Ниже прикреплено фото документа которое участник указал в анкете.}{image:$getMessageVar[document;$interactionData[message.id]]}{footer:ID заявки#COLON# $messageID}{thumbnail:$userAvatar[$getMessageVar[user;$interactionData[message.id]]]}}{actionRow:{button:Принять:success:helper-accept:true}{button:Отклонить:danger:helper-reject:true}};$channelID]`
    },
];