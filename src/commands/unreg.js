module.exports = [{
    name: "unreg",
    type: "default",
    channel: "",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[giveaway;global]]
$log[success]`
}];