module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
`$createApplicationCommand[global;skipto;Перейти к указанному треку в очереди.;true;false;slash;[
  {
    "type": 4,
    "name": "index",
    "description": "Номер трека в очереди",
    "required": true
  }
]]
$log[Слэш-команда зарегистрирована]`
}];