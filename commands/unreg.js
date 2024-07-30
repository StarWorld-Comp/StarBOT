module.exports = [{
    name: "unreg",
    type: "default",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[poll;global]]
$log[success]`
}];