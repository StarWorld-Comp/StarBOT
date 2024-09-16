module.exports = [{
    name: "about",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[{newEmbed:{author:StarBOT:$userAvatar[$clientID]}{thumbnail:$userAvatar[$clientID]}{description:StarBOT - это бот разработанный специально для проекта StarWorld.}{field:Информация о сборке:Версия\: $getVar[version]\nДата сборки\: <t\:$truncate[$divide[$datestamp;1000]]\:d>\nХэш\: \`f1b66bd\`:false}{field:<\:stats\:1264890167961980938> Статистика:Последняя перезагрузка <t\:$truncate[$math[$datestamp/1000-$uptime[ms]/1000]]\:R>\nЦПУ\: $cpu%\nОЗУ\: $round[$ram]MB\nПинг: $ping мс:true}{field:<\:developer\:1264887677635788840> Разработчик:1. **$username[$clientOwnerIDs]** (<@$clientOwnerIds>):true}{timestamp}{color:#2b2d31}}{actionRow:{button:Поддержка:link:https://dsc.gg/starworld:false}}]`
}];