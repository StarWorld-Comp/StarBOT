module.exports = [{
    name: "unreg",
    type: "ready",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[purge;global]]
$log[success]`
}];