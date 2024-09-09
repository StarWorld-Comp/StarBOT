module.exports = [
   {
    name: "profile",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{thumbnail:$userAvatar[$get[user]]}{title:Профиль участника $username[$get[user]]}{description:<\:name\:1282309848414945360> Имя#COLON# $getUserVar[name;$get[user]]\n<\:age\:1282309884397748285> Возраст#COLON# $getUserVar[age;$get[user]]\n<\:gender\:1282309920544526396> Пол#COLON# $getUserVar[gender;$get[user]]\n<\:active\:1282309807151517736> Активность#COLON# за всё время было отправлено $getUserVar[messages;$get[user]] сообщения}{field:<\:bio\:1282310547173408820> Биография:$getUserVar[bio;$get[user]]:false}{footer:$guildName:$guildIcon}{timestamp}}
$if[$findUser[$slashOption[user]]==$authorID]
{actionRow:{button:Изменить данные:secondary:edit-profile:false}{button:Врем. роли:secondary:temprole-list:false}}
$endif]
$let[user;$findUser[$slashOption[user];true]]`
   },
   {
      name: "edit-profile",
      type: "interaction",
      prototype: "button",
      code: `
$interactionModal[Изменение профиля;edit-profile1;{actionRow:{textInput:Имя:1:name:true::3:13:$getUserVar[name;$authorID]}}{actionRow:{textInput:Возраст:1:age:true::1:2}}{actionRow:{textInput:Пол:1:gender:true::1:25:$getUserVar[gender;$authorID]}}{actionRow:{textInput:Биография:1:bio:true::0:400:$getUserVar[bio;$authorID]}}]`
   },
   {
      name: "temprole-list",
      type: "interaction",
      prototype: "button",
      code: `
$interactionReply[В разработке...;;true]`
    },
    {
      name: "edit-profile1",
      type: "interaction",
      prototype: "modal",
      $if: "old",
      code: `
$editMessage[$messageID;{newEmbed:{thumbnail:$userAvatar[$authorID]}{title:Профиль участника $username[$authorID]}{description:Имя#COLON# $getUserVar[name;$authorID]\nВозраст#COLON# $FormatTime[$getUserVar[age;$authorID]y]\nПол#COLON# $getUserVar[gender;$authorID]\nАктивность#COLON# за всё время было отправлено $getUserVar[messages;$authorID] сообщения}{field:Биография:$getUserVar[bio;$authorID]:false}{footer:$guildName:$guildIcon}{timestamp}}
{actionRow:{button:Изменить данные:secondary:edit-profile:false}{button:Врем. роли:secondary:temprole-list}}
$setUserVar[bio;$textInputValue[bio];$authorID]
$setUserVar[age;$textInputValue[age];$authorID]
$setUserVar[gender;$textInputValue[gender];$authorID]
$setUserVar[name;$textInputValue[name];$authorID]
$interactionReply[Данные были обновлены.;;true]`
    }
];