module.exports = [{
    name: "avatar",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[{newEmbed:{title:$username[$get[user]] (Id: $get[user])}{url:https://discord.com/users/$get[user]}{image:$userAvatar[$get[user]]}{timestamp}{color:#2b2d31}}]
$let[user;$findUser[$slashOption[user];true]]`
}];