module.exports = [{
    name: "unreg",
    type: "default",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[shuffle;global]]
$log[success]`
}];