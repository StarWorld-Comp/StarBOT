module.exports = [
   {
    name: "profile",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{thumbnail:$userAvatar[$get[user]]}{title:Профиль участника $username[$get[user]]}{description:Имя#COLON# $getUserVar[name;$get[user]]\nВозраст#COLON# $getUserVar[old;$get[user]]\nПол#COLON# $getUserVar[gender;$get[user]]\nАктивность#COLON# за всё время было отправлено $getUserVar[messages;$get[user]] сообщения}{field:Биография:$getUserVar[bio;$get[user]]:false}{footer:$guildName:$guildIcon}{timestamp}}
$if[$get[user]==$authorID]
{actionRow:{button:Изменить данные:secondary:edit-profile:false}{button:Врем. роли:secondary:temprole-list}}
$endif]`
   },
   {
      name: "edit-profile",
      type: "interaction",
      prototype: "modal",
      code: `
$interactionModal[Изменение профиля;edit-profile1;{actionRow:{textInput:Имя:1:name:true}}{actionRow:{textInput:Возраст:1:old:true}}{actionRow:{textInput:Пол:1:gender:true}}{actionRow:{textInput:Биография:1:bio:true}}]`
   }
];