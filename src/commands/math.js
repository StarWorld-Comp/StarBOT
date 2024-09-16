module.exports = [{
    name: "math",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionEdit[{newEmbed:{description:Результат вычисления выражения \`$slashOption[expression]\`:\n\`\`\`$get[math]\`\`\`}{timestamp}{color:#2b2d31}}]
$let[math;$math[$get[expression]]]
$interactionReply[<a:load:1281959260049379348> Вычисляю выражение...]

$onlyIf[$checkContains[$get[expression];/;-;+;(;);,;^;*]==true;{newEmbed:{color:#f1090b}{description:Похоже вы ввели некорректное математическое выражение.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$suppressErrors[{newEmbed:{color:#f1090b}{description:Похоже вы ввели некорректное математическое выражение.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$let[expression;$replaceText[$replaceText[$replaceText[$replaceText[$slashOption[expression];×;*];÷;/];:;/];,;.]]`
}];