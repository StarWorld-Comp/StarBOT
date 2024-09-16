module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
    `
$createApplicationCommand[global;giveaway;Создать розыгрыш.;true;guild;guild;slash;[
  {
    "type": 3,
    "name": "prize",
    "description": "Награда",
    "required": true
  },
  {
    "type": 3,
    "name": "duration",
    "description": "duration",
    "required": true
  }
]]
$log[Слэш-команда зарегистрирована]`
}];