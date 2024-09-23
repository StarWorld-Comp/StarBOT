module.exports = [
    {
        name: "stop",
        type: "interaction",
        prototype: "button",
        code: `
$clearQueue
$stopTrack
$leaveVC
$setMessageVar[status_mus;stop;$getGuildVar[music_msg]]
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Статус:Остановлено ($replaceText[$digitalFormat[$songInfo[duration]];00:;;1]) — $songInfo[requester.user.username]:false}{timestamp}{color:#2e3d9f}}{newEmbed:{title:Остановлено}{description:<@$authorID> принудительно остановил очередь сервера.}{color:#2e3d9f}}]

$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
    },
    {
        name: "pause",
        type: "interaction",
        prototype: "button",
        $if: "old",
        code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{thumbnail:$songInfo[thumbnail]}{url:$songInfo[url]}{field:Продолжительность:<\:play\:1265938979891707976> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<\:volumeadd\:1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<\:loop\:1265939089086091265> Очередь];song;<\:loop1\:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_\: $numberSeparator[$songInfo[views]]\n_Платформа_\: $songInfo[formattedPlatforms]\n_Позиция в очереди_\: $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Включите трек чтобы выбрать.:1:1:true:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить эффект:false}}}{actionRow:
{button::secondary:shuffle:true:1273953395799228488}
{button::secondary:previous:true:1265938711149936680}{button::primary:resume:false:1265938979891707976}
{button::secondary:skip:true:1265938817706102886}
$if[$loopStatus==none]
{button::secondary:loop:true:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:true:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:true:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:true:1265938523027013652}
{button::secondary:stop:true:1265938932424769609}
{button::secondary:-volume:true:1265938464180797481}{button::secondary:+volume:true:1265939201300631573}
{button::secondary:queue:true:1273156315212025877}}]
$pauseTrack
$onlyIf[$playerStatus==playing;{newEmbed:{color:#f1090b}{description:Этот трек уже приостановлен.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
    },
    {
        name: "skip",
        type: "interaction",
        prototype: "button",
        code: `
$interactionDelete
$wait[1s]
$skipTrack
$onlyIf[$or[$hasPlayer==true;$playerStatus==playing;$playerStatus==pause]==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
     },
     {
         name: "resume",
         type: "interaction",
         prototype: "button",
         $if: "old",
         code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{thumbnail:$songInfo[thumbnail]}{url:$songInfo[url]}{field:Продолжительность:<\:pause\:1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<\:volumeadd\:1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<\:loop\:1265939089086091265> Очередь];song;<\:loop1\:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_\: $numberSeparator[$songInfo[views]]\n_Платформа_\: $songInfo[formattedPlatforms]\n_Позиция в очереди_\: $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$resumeTrack
$onlyIf[$playerStatus==paused;{newEmbed:{color:#f1090b}{description:Этот трек уже воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
     },
     {
         name: "-volume",
         type: "interaction",
         prototype: "button",
         $if: "old",
         code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$volume[$sub[$volume[get];10]]
$onlyIf[$volume[get]>=0;{newEmbed:{color:#f1090b}{description:Громкость уже установлена на минимум.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$and[$playerStatus==playing;$hasPlayer==true]==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
       },
       {
           name: "+volume",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$volume[$sum[$volume[get];10]]
$onlyIf[$volume[get]<100;{newEmbed:{color:#f1090b}{description:Громкость уже установлена на максимум.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$and[$playerStatus==playing;$hasPlayer==true]==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
         },
         {
           name: "loop",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=queue]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1273953475918692402}
$elseif[$loopStatus==song]
{button::primary:loop:false:1265939089086091265}
$endelseif
$elseif[$loopStatus==queue]
{button::secondary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$if[$loopStatus==none]
$loopMode[song]
$elseif[$loopStatus==song]
$loopMode[queue]
$endelseif
$else
$loopMode[none]
$endif
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
          },
          {
           name: "seek",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$seek[15000]
$onlyIf[$and[$playerStatus==playing;$hasPlayer==true]==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
         },
         {
           name: "previous",
           type: "interaction",
           prototype: "button",
           $if: "old",
           code: `
$interactionUpdate[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:false:1265938711149936680}
$else
{button::secondary:previous:true:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}{button::secondary:skip:false:1265938817706102886}
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}}]
$playPreviousTrack
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
         },
         {
          name: "bass",
          type: "interaction",
          prototype: "selectMenu",
          $if: "old",
          code: `
$interactionReply[{newEmbed:{author:Успешно}{description:Уровень басса успешно установлен и будет применён к текущему треку через несколько секунд.}{field:Уровень воздействия:$advancedReplaceText[$interactionData[values[0]];low-bass;Низкий;medium-bass;Средний;hard-bass;Высокий;reset-bass;По умолчанию]}{color:#2e3d9f}{timestamp}};;true]
$if[$interactionData[values[0]]==low-bass]
$addFilter[{"bassBoost": "0.8"}]
$elseif[$interactionData[values[0]]==medium-bass]
$addFilter[{"bassBoost": "1.9"}]
$endelseif
$elseif[$interactionData[values[0]]==hard-bass]
$addFilter[{"bassBoost": "3"}]
$endelseif
$elseif[$interactionData[values[0]]==reset-bass]
$removeFilter[{"BASS_BOOST"}]
$endelseif
$endif`
        },
        {
          name: "filters",
          type: "interaction",
          prototype: "slash",
          $if: "old",
          code: `
$if[$interactionData[options._subcommand]==add]
$interactionReply[{newEmbed:{author:Успешно}{description:Фильтр **$slashOption[filter]** успешно добавлен, он будет применён к треку **$songInfo[title]** через несколько секунд.}{field:Уровень воздействия:$slashOption[value]}{color:#2e3d9f}{timestamp}};;true]
$addFilter[{"$slashOption[filter]": "$slashOption[value]"}]

$elseif[$interactionData[options._subcommand]==set]
$interactionReply[{newEmbed:{author:Успешно}{description:Фильтр **$slashOption[filter]** успешно установлен, он будет применён к треку **$songInfo[title]** через несколько секунд.}{field:Уровень воздействия:$slashOption[value]}{color:#2e3d9f}{timestamp}};;true]
$setFilter[{"$slashOption[filter]": "$slashOption[value]"}]
$endelseif

$elseif[$interactionData[options._subcommand]==remove]
$interactionReply[{newEmbed:{author:Успешно}{description:Фильтр **$slashOption[filter]** успешно удалён, изменения будут применены к треку **$songInfo[title]** через несколько секунд.}{color:#2e3d9f}{timestamp}};;true]
$removeFilter[{"$slashOption[filter]"}]
$endelseif

$elseif[$interactionData[options._subcommand]==get]
$interactionReply[{newEmbed:{author:Успешно}{description:Внизу будут указаны все фильтры примененные к текущему треку **$songInfo[title]**}{field:Фильтры:$getFilters}{color:#2e3d9f}{timestamp}};;true]
$endelseif

$elseif[$interactionData[options._subcommand]==reset]
$interactionReply[{newEmbed:{author:Успешно}{description:Всё фильтры успешно сброшены, изменения будут применены к треку **$songInfo[title]** через несколько секунд.}{color:#2e3d9f}{timestamp}};;true]
$resetFilter
$endelseif
$endif

$onlyIf[$and[$playerStatus==playing;$hasPlayer==true]==true;{newEmbed:{color:#f1090b}{description:На данный момент нечего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "seek",
          type: "interaction",
          prototype: "slash",
          $if: "old",
          code: `
$interactionReply[<:success:1275672606862741556>;;true]
$seek[$slashOption[position]]
$onlyIf[$and[$playerStatus==playing;$hasPlayer==true]==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "autoplay",
          type: "interaction",
          prototype: "slash",
          code: `
$interactionReply[{newEmbed:{author:Успешно}{description:Автоматическое добавление треков в очередь успешно установлено.}{color:#2e3d9f}{timestamp}};;true]
$autoPlay[youtube]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:Чтобы добавить треки, сначало создайте очередь.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$voiceID!=;{newEmbed:{color:#f1090b}{description:Присоединитесь к любому голосовому каналу.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "shuffle",
          type: "interaction",
          prototype: "button",
          code: `
$interactionReply[{newEmbed:{author:Успешно}{description:Текущая очередь успешно перемешана, изменения будут применены к очереди через несколько секунд.}{color:#2e3d9f}{timestamp}};;true]
$shuffleQueue
$onlyIf[$queueLength>=2;{newEmbed:{color:#f1090b}{description:Текущая очередь слишком короткая.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "stop",
          type: "interaction",
          prototype: "slash",
          code: `
$interactionReply[<:success:1275672606862741556>;;true]
$clearQueue
$stopTrack
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "queue",
          type: "interaction",
          prototype: "button",
          $if: "old",
          code: `
$setMessageVar[page;1;$get[id]]
$let[id;$interactionReply[{newEmbed:{title:Очередь сервера $guildName}{thumbnail:$guildIcon}{description:$removeContains[$queue[1;10;\[ **#{position}** \] \`\[ {digitalFormat} \]\` [{title}]({url});\n];\[ #0 \]]}{color:#2e3d9f}{timestamp}}{actionRow:{button::secondary:back_page_embed:true:1274377982659530792}
$if[$or[$ceil[$math[($ceil[$queueLength]-1)/10]]==$getMessageVar[page];$queueLength<=10]==true]
{button::secondary:next_page_embed:true:1274377826216444058}
$else
{button::secondary:next_page_embed:false:1274377826216444058}
$endif};;true;true]]

$onlyIf[$queueLength>=1;{newEmbed:{color:#f1090b}{description:Очередь пуста.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "music-settings",
          type: "interaction",
          prototype: "slash",
          code: `
$interactionReply[{actionRow:{selectMenu:select-platform:Выберите платформу для музыки:1:1:false:{stringInput:Spotify:spotify::false}{stringInput:SoundCloud:soundcloud::false}{stringInput:YouTube:youtube::false}}}{
actionRow:{selectMenu:youtube-type:Выберите тип YouTube:1:1:false:{stringInput:Web:WEB::true}{stringInput:Android:ANDROID::true}{stringInput:YTMUSIC:YTMUSIC::true}
{stringInput:YTMUSIC Andoid:YTMUSIC_ANDROID::true}{stringInput:YT Studio:YTSTUDIO Android::true}{stringInput:TV:TV_EMBEDDED::false}}}]`
        },
        {
            name: "update_song",
            type: "awaited",
            $if: "old",
            code: `
$if[$and[$hasPlayer==true;$playerStatus==playing]==true]
$if[$and[$songInfo[title]==$awaitData[title];$getGuildVar[music_msg]==$awaitData[msgID];$messageExists[$awaitData[msgID];$awaitData[channelID]]==true]==true]
$editMessage[$awaitData[msgID];{newEmbed:{author:$songInfo[artist]:$songInfo[artistAvatar]}{title:$songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=1]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
$if[$loopStatus==none]
{button::secondary:loop:false:1265939089086091265}
$elseif[$loopStatus==song]
{button::secondary:loop:false:1273953475918692402}
$endelseif
$elseif[$loopStatus==queue]
{button::primary:loop:false:1265939089086091265}
$endelseif
$endif}
{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}};$awaitData[channelID]]
$endif
$endif
$suppressErrors
$wait[15s]

$onlyIf[$and[$hasPlayer==true;$playerStatus==playing]==true]
$onlyIf[$getGuildVar[music_msg]==$awaitData[msgID]]
$onlyIf[$messageExists[$awaitData[msgID];$awaitData[channelID]]==true]
$suppressErrors`
        },
        {
          name: "queue",
          type: "interaction",
          prototype: "slash",
          $if: "old",
          code: `
$setMessageVar[page;1;$get[id]]
$let[id;$interactionReply[{newEmbed:{author:Очередь сервера $guildName:$guildIcon}{description:$replaceText[$queue[1;10;{position}. {title} • \`\[{digitalFormat}\]\`;\n];0.;1.]}{field:Сейчас играет:$songInfo[title] • \`\[$digitalFormat[$songInfo[duration]]\]\`}{field:Продолжительность музыкальной очереди:
$if[$queueLength==1]
$digitalFormat[$songInfo[duration]]
$else
$digitalFormat[$math[$queue[1;$queueLength;{duration};+]-$songInfo[duration]]]
$endif}{field:Всего музыкальных произведений:$queueLength:true}{field:Громкость плеера:$volume[get]%:true}{footer:Страница#COLON# $getMessageVar[page]/$ceil[$math[($ceil[$queueLength]-1)/10]]}{color:#2b2d31}{timestamp}}{actionRow:{button::secondary:back_page_slash:true:1274377982659530792}
$if[$queueLength<=10]
{button::secondary:next_page_slash:true:1274377826216444058}
$else
{button::secondary:next_page_slash:false:1274377826216444058}
$endif
{button::secondary:delete:false:1276107115425169461}};;false;true]]

$onlyIf[$queueLength>=2;{newEmbed:{color:#f1090b}{description:Очередь пуста.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$onlyIf[$hasPlayer==true;{newEmbed:{color:#f1090b}{description:В настоящее время ничего не воспроизводится.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
        },
        {
          name: "next_page_embed",
          type: "interaction",
          prototype: "button",
          $if: "old",
          code: `
$interactionUpdate[{newEmbed:{title:Очередь сервера $guildName}{thumbnail:$guildIcon}{description:$queue[$getMessageVar[page];10;\[ **#{position}** \] \`\[ {digitalFormat} \]\` [{title}]({url});\n]}{color:#2e3d9f}{timestamp}}{actionRow:
$if[1==$getMessageVar[page]]
{button::secondary:back_page_embed:false:1274377982659530792}
$else
{button::secondary:back_page_embed:true:1274377982659530792}
$endif
$if[$getMessageVar[page]0<=$queueLength]
{button::secondary:next_page_embed:true:1274377826216444058}
$else
{button::secondary:next_page_embed:false:1274377826216444058}
$endif}]
$setMessageVar[page;$sum[$getMessageVar[page];1];$interactionData[message.id]]
$suppressErrors`
        },
        {
          name: "back_page_embed",
          type: "interaction",
          prototype: "button",
          $if: "old",
          code: `
$interactionUpdate[{newEmbed:{title:Очередь сервера $guildName}{thumbnail:$guildIcon}{description:$queue[$getMessageVar[page];10;\[ **#{position}** \] \`\[ {digitalFormat} \]\` [{title}]({url});\n]}{color:#2e3d9f}{timestamp}}{actionRow:
$if[1==$getMessageVar[page]]
{button::secondary:back_page_embed:false:1274377982659530792}
$else
{button::secondary:back_page_embed:true:1274377982659530792}
$endif
$if[$getMessageVar[page]0<=$queueLength]
{button::secondary:next_page_embed:true:1274377826216444058}
$else
{button::secondary:next_page_embed:false:1274377826216444058}
$endif}]
$setMessageVar[page;$sub[$getMessageVar[page];1];$interactionData[message.id]]
$suppressErrors`
        },
        {
          name: "next_page_slash",
          type: "interaction",
          prototype: "button",
          $if: "old",
          code: `
$interactionUpdate[{newEmbed:{author:Очередь сервера $guildName:$guildIcon}{description:$replaceText[$queue[$getMessageVar[page];10;{position}. {title} • \`\[{digitalFormat}\]\`;\n];0.;1.]}{field:Сейчас играет:$songInfo[title] • \`\[$digitalFormat[$songInfo[duration]]\]\`}{field:Продолжительность музыкальной очереди:
$if[$queueLength==1]
$digitalFormat[$songInfo[duration]]
$else
$queue[1;$queueLength;{duration};#SEMI#]
$endif}{field:Всего музыкальных произведений:$queueLength:true}{field:Громкость плеера:$volume[get]%:true}{footer:Страница#COLON# $getMessageVar[page]/$ceil[$math[($ceil[$queueLength]-1)/10]]}{color:#2e3d9f}{timestamp}}{actionRow:
$if[$getMessageVar[page]<=1]
{button::secondary:back_page_slash:true:1274377982659530792}
$else
{button::secondary:back_page_slash:false:1274377982659530792}
$endif
$if[$queueLength<=$getMessageVar[page]0]
{button::secondary:next_page_slash:true:1274377826216444058}
$else
{button::secondary:next_page_slash:false:1274377826216444058}
$endif
{button::secondary:delete:false:1276107115425169461}};;true]
$setMessageVar[page;$sum[$getMessageVar[page];1];$interactionData[message.id]]
$suppressErrors`
        },
        {
          name: "back_page_slash",
          type: "interaction",
          prototype: "button",
          code: `
$interactionUpdate[{newEmbed:{author:Очередь сервера $guildName:$guildIcon}{description:$replaceText[$queue[$getMessageVar[page];10;{position}. {title} • \`\[{digitalFormat}\]\`;\n];0.;1.]}{field:Сейчас играет:$songInfo[title] • \`\[$digitalFormat[$songInfo[duration]]\]\`}{field:Продолжительность музыкальной очереди:
$if[$queueLength==1]
$digitalFormat[$songInfo[duration]]
$else
$queue[1;$queueLength;{duration};#SEMI#]
$endif}{field:Всего музыкальных произведений:$queueLength:true}{field:Громкость плеера:$volume[get]%:true}{footer:Страница#COLON# $getMessageVar[page]/$ceil[$math[($ceil[$queueLength]-1)/10]]}{color:#2e3d9f}{timestamp}}{actionRow:
$if[$getMessageVar[page]<=1]
{button::secondary:back_page_slash:true:1274377982659530792}
$else
{button::secondary:back_page_slash:false:1274377982659530792}
$endif
$if[$queueLength<=$getMessageVar[page]0]
{button::secondary:next_page_slash:true:1274377826216444058}
$else
{button::secondary:next_page_slash:false:1274377826216444058}
$endif
{button::secondary:delete:false:1276107115425169461}};;true]
$setMessageVar[page;$sub[$getMessageVar[page];1];$interactionData[message.id]]
$suppressErrors`
        },
        {
          name: "delete",
          type: "interaction",
          prototype: "button",
          code: `
$deleteCommand
$suppressErrors`
        }
            
];