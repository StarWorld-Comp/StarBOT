module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
`$createApplicationCommand[global;math;Вычисляет математическое выражение.;true;false;slash;[
  {
    "type": 3,
    "name": "expression",
    "description": "Выражение",
    "required": true
  }
]]
$log[Слэш-команда зарегистрирована]`
}];