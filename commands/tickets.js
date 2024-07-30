module.exports = [{
    name: "tickets",
    type: "default",
    channel: "1173980785380954272",
    code: `$image[https://i.imgur.com/AZlgvgi.png]
$thumbnail[$guildIcon]
$description[# Тикеты\n\n
Откройте свой тикет чтобы обратится в нашу службу поддержки [StarWorld](https://starworld.soon)]
$addField[<:debug:1225756439117565973> Примечания;* Не создавайте тикеты просто так (\`мут 2 часа\`).\n* Указывайте причину максимально понятно и точно.\n* Не нужно пинговать администрацию (\`мут 30 минут\`).\n* Соблюдайте правила проекта в обращении.]
$addField[<:infoguide:1225756382381473793> Инструкция:;>>> Чтобы открыть тикет нажмите на кнопку _**+ Создать**_, далее в открывшимся окне укажите причину открытия, после чего нажмите _**Отправить**_. После этого создастся уникальный канал для помощи именно вам.]

$addButton[1;Создать;success;ticket.create;no;<:create:1225758379503517727>]
$color[#2b2d31]
$footer[$guildName;$guildIcon]`
}];