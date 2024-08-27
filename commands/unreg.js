module.exports = [{
    name: "unreg",
    type: "ready",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[addfilter;global]]
$log[success]`
}];