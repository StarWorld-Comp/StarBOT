module.exports = [
    {
        name: "stop",
        type: "interaction",
        prototype: "button",
        code: `$clearQueue
$stopTrack
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** остановлен.}{timestamp}};;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Статус:Остановлено - ($digitalFormat[$getCurrentTrackDuration]):false}{timestamp}{color:#2e3d9f}}]
$title[Остановлено]
$description[<@$authorID> принудительно остановил очередь сервера.]
$color[#2e3d9f]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выпонить, так как трек не найден.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "pause",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `$pauseTrack
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** приостановлен.}{timestamp}};;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:true:1265938711149936680}{button::secondary:resume:false:1265938979891707976}{button::secondary:skip:true:1265938817706102886}
{button::secondary:loop:true:1265939089086091265}}
{actionRow:
{button::secondary:old:true:1265938523027013652}
{button::secondary:stop:true:1265938932424769609}
{button::secondary:-volume:true:1265938464180797481}{button::secondary:+volume:true:1265939201300631573}}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
    },
    {
        name: "skip",
        type: "interaction",
        prototype: "button",
        code: `$skipTrack
$deleteMessage[$interactionData[message.id];$channelID]
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** пропущен.}{timestamp}};;true]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
     },
     {
         name: "resume",
         type: "interaction",
         prototype: "button",
         $if: "old",
         code: `$resumeTrack
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** восстановлен.}{timestamp}};;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
     },
     {
         name: "-volume",
         type: "interaction",
         prototype: "button",
         $if: "old",
         code: `
$interactionReply[Успешно;;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$volume[$sub[$volume[get];10]]
$onlyIf[$volume[get]>=0;{newEmbed:{color:#f1090b}{description:Громкость уже установлена на минимум.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
       },
       {
           name: "+volume",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionReply[Успешно;;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$volume[$sum[$volume[get];10]]
$onlyIf[$volume[get]<=99;{newEmbed:{color:#f1090b}{description:Громкость уже установлена на максимум.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         },
         {
           name: "loop",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionReply[Вы успешно установили цикличность.;;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=song]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[platformType]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$if[$loopStatus==none]
$loopMode[queue]
$elseif[$loopStatus==queue]
$loopMode[song]
$endelseif
$elseif[$loopStatus==song]
$loopMode[none]
$endelseif
$endif
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как игрок не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
          },
          {
           name: "old",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** перемотан на 15 секунд.}};;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$seek[15000]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         },
         {
           name: "previous",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionReply[Успешно;;true]
$editMessage[$interactionData[message.id];{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[artistURL]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Айди_#COLON# $songInfo[id]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:{button::secondary:what:true:🔀}{button::secondary:previous:false:1265938711149936680}{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}
{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}}]
$playPreviousTrack
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
         },
         {
          name: "bass",
          type: "interaction",
          prototype: "selectMenu",
          $if: "old",
          code: `
$interactionReply[{newEmbed:{description:Басс установлен на **$advancedReplaceText[$interactionData[values[0]];low-bass;низкий;medium-bass;средний;hard-bass;высокий;reset-bass;по умолчанию]** уровень для трека **$songInfo[title]**.}};;true]
$if[$interactionData[values[0]]==low-bass]
$addFilter[{"bassBoost": "0.5"}]
$elseif[$interactionData[values[0]]==medium-bass]
$addFilter[{"bassBoost": "1"}]
$endelseif
$elseif[$interactionData[values[0]]==hard-bass]
$addFilter[{"bassBoost": "2"}]
$endelseif
$elseif[$interactionData[values[0]]==reset-bass]
$resetFilter
$endelseif
$endif`
        },
        {
          name: "addfilter",
          type: "interaction",
          prototype: "slash",
          $if: "old",
          code: `
$interactionReply[{newEmbed:{description:Фильтр $slashOption[filter] установлен для трека **$songInfo[title]**.}};;true]
$addFilter[{"$slashOption[filter]": "$slashOption[value]"}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
        },
        {
          name: "seek",
          type: "interaction",
          prototype: "slash",
          $if: "old",
          code: `
$interactionReply[{newEmbed:{description:Трек **$songInfo[title]** перемотан на $slashOption[position] миллисекунд.}};;true]
$seek[$slashOption[position]]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Не удалось выполнить, так как трек не найден..}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
        }
];