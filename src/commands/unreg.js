module.exports = [{
    name: "unreg",
    type: "default",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[addfilter;global]]
$log[success]`
}];