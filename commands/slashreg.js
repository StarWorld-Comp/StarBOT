module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
    `
$createApplicationCommand[global;temprole;Назначить временную роль.;true;false;slash;[

  {

    "type": 6,

    "name": "user",

    "description": "Пользователь",

    "required": true

  },

  {

    "type": 8,

    "name": "role",

    "description": "Роль",

    "required": true

  },

  {

    "type": 3,

    "name": "duration",

    "description": "Время",

    "required": true

  }

]]
$log[Слэш-команда зарегистрирована]`
}];