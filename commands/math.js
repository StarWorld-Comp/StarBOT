module.exports = [{
    name: "math",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionEdit[{newEmbed:{description:Результат вычисления выражения \`$slashOption[expression]\`:\n\`\`\`$get[math]\`\`\`}{timestamp}}]
$let[math;$math[$slashOption[expression]]]
$wait[1s]
$interactionReply[Вычисляю выражение...]
$suppressErrors[{newEmbed:{color:#f1090b}{description:Похоже вы ввели некорректное математическое выражение.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];