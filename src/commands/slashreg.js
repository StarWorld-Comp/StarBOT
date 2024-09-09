module.exports = [{
    name: "slashreg",
    type: "default",
    channel: "",
    code:
    `
$createApplicationCommand[global;profile;Посмотреть профиль.;true;false;slash;[
  {
    "type": 6,
    "name": "user",
    "description": "Пользователь"
  }
]]
$log[Слэш-команда зарегистрирована]`
}];