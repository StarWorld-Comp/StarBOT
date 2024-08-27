module.exports = [{
    name: "about",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[{newEmbed:{author:StarBOT:$userAvatar[$clientID]}{thumbnail:$userAvatar[$clientID]}{description:StarBOT - это бот разработанный специально для проекта StarWorld.}{field:Информация о сборке:Версия#COLON# $getVar[version]\nДата сборки#COLON# <t#COLON#$truncate[$divide[$datestamp;1000]]#COLON#d>:false}{field:<#COLON#stats#COLON#1264890167961980938> Статистика:Последняя перезагрузка <t#COLON#$truncate[$math[$datestamp/1000-$uptime[ms]/1000]]#COLON#R>\nЦПУ#COLON# $cpu[os]% / 50%\nОЗУ#COLON# $round[$ram] MB / 250 MB\nПинг: $ping мс:true}{field:<#COLON#developer#COLON#1264887677635788840> Разработчик:1. **$username[$clientOwnerIDs]** (<@$clientOwnerIds>):true}{timestamp}{color:#2b2d31}}{actionRow:{button:Поддержка:link:https://dsc.gg/starworld:false}}]`
}];