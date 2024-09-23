module.exports = [{
    name: "slashreg",
    type: "ready",
    channel: "",
    code:
    `
$createApplicationCommand[global;stop;Принудительно остановить воспроизведение треков.;true;guild;guild;slash]
$log[Слэш-команда зарегистрирована]`
}];