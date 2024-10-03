module.exports = [
   {
    name: "profile",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{thumbnail:$userAvatar[$get[user]]}{title:Профиль участника $username[$get[user]]}{description:<\:name\:1282309848414945360> Имя#COLON# $getUserVar[name;$get[user];$guildID;main]\n<\:age\:1282309884397748285> Возраст#COLON# $getUserVar[age;$get[user];$guildID;main]\n<\:gender\:1282309920544526396> Пол#COLON# $getUserVar[gender;$get[user];$guildID;main]\n<\:active\:1282309807151517736> Активность#COLON# за всё время было отправлено $getUserVar[messages;$get[user];$guildID;main] сообщения}{field:<\:bio\:1282310547173408820> Биография:$getUserVar[bio;$get[user];$guildID;main]:false}{footer:$guildName:$guildIcon}{timestamp}}
$if[$findMember[$slashOption[user];true]==$authorID]
{actionRow:{button:Изменить данные:secondary:edit-profile:false}{button:Врем. роли:secondary:temprole-list:false}}
$endif]


$createCanvas[rank;934;282]
$let[user;$findMember[$slashOption[user];true]]`
   },
   {
      name: "edit-profile",
      type: "interaction",
      prototype: "button",
      code: `
$interactionModal[Изменение профиля;edit-profile1;{actionRow:{textInput:Имя:1:name:true::3:13:$getUserVar[name;$authorID;$guildID;main]}}{actionRow:{textInput:Возраст:1:age:true::1:2}}{actionRow:{textInput:Пол:1:gender:true::1:25:$getUserVar[gender;$authorID;$guildID;main]}}{actionRow:{textInput:Биография:1:bio:true::0:400:$getUserVar[bio;$authorID;$guildID;main]}}]

$onlyIf[$interactionData[author.id]==$authorID;{newEmbed:{color:#f1090b}{description:Текущее взаимодействие было вызвано другим участником.}{author:Ошибка взаимодействия:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
   },
   {
      name: "temprole-list",
      type: "interaction",
      prototype: "button",
      code: `
$interactionReply[В разработке...;;true]

$onlyIf[$interactionData[author.id]==$authorID;{newEmbed:{color:#f1090b}{description:Текущее взаимодействие было вызвано другим участником.}{author:Ошибка взаимодействия:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
    },
    {
      name: "edit-profile1",
      type: "interaction",
      prototype: "modal",
      $if: "old",
      code: `
$editMessage[$messageID;{newEmbed:{thumbnail:$userAvatar[$authorID]}{title:Профиль участника $username[$authorID]}{description:Имя#COLON# $getUserVar[name;$authorID;$guildID;main]\nВозраст#COLON# $FormatTime[$getUserVar[age;$authorID;$guildID;main]y]\nПол#COLON# $getUserVar[gender;$authorID;$guildID;main]\nАктивность#COLON# за всё время было отправлено $getUserVar[messages;$authorID;$guildID;main] сообщения}{field:Биография:$getUserVar[bio;$authorID;$guildID;main]:false}{footer:$guildName:$guildIcon}{timestamp}}
{actionRow:{button:Изменить данные:secondary:edit-profile:false}{button:Врем. роли:secondary:temprole-list}};$channelID]
$setUserVar[bio;$textInputValue[bio];$authorID]
$setUserVar[age;$textInputValue[age];$authorID]
$setUserVar[gender;$textInputValue[gender];$authorID]
$setUserVar[name;$textInputValue[name];$authorID]
$interactionReply[Данные были обновлены.;;true]`
    }
];