module.exports = [{
    name: "applications",
    type: "default",
    channel: "1242159149907968020",
    code: `
$title[⠀                 ⊱⋅ ─────────────Заявки───────────── ⋅⊰]
$description[ㅤㅤСдесь вы можете подать свою заявку на должность на нашем проекте.]
$addField[ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤПримечания;* Перед тем как подавать заявку обязательно прочтите условия/правила подачи нажав на кнопку **<<Условия>>**.\n* Перед подачай рекомендуем подготовить документ подтверждающий ваш возраст.]

$addField[ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤИнструкция;>>> Чтобы получить анкету заявки, нажмите на кнопку ниже соответствующей должности.]
$addButton[1;Хелпер;secondary;helper_app;no]
$addButton[1;Ютубер;secondary;yt_app;no]
$addButton[1;Тиктокер;secondary;tiktok_app;no]
$addButton[1;Условия;danger;rules_app;no]
$color[#2b2d31]
$footer[$guildName;$guildIcon]`
}];