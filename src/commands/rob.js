module.exports = [{
    name: "rob",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[{newEmbed:{author:Ограбление}{thumbnail:$userAvatar[$slashOption[user]]}{description:**$username[$authorID]**,
$if[$get[rob]==1]
поскольку вы ничего не украли и ничего не потеряли во время ограбления, вы не несёте никакой ответственности..
$setUserVar[fail_thiefs;$sum[$getUserVar[fail_thiefs;$authorID];1];$authorID;$guildID]
$elseif[$get[rob]==2]
окружающие с напряжённым вниманием на вас, и вы поняли, что лучше не воровать.
$setUserVar[success_thiefs;$sum[$getUserVar[success_thiefs;$authorID];1];$authorID;$guildID]
$endelseif
$elseif[$get[rob]==3]
во время ограбления вы не смогли украсть ничего, но потеряли  
$endelseif
$elseif[$get[rob]==4]
так как вы решили не оплачивать штраф, вас отправляют в тюрьму.
$setUserVar[jail_thiefs;$sum[$getUserVar[jail_thiefs;$authorID];1];$authorID;$guildID]
$setUserVar[jail_status;true;$authorID;$guildID]
$endelseif
$elseif[$get[rob]==5]
незаметно украл у **$username[$slashOption[user]]** .
$endelseif
$endif}{footer:$guildName:$guildIcon}{timestamp}}]
}}]
$let[rob;$random[1;5]]

$onlyIf[$getUserVar[balance;$slashOption[user]]>0;{newEmbed:{color:#f1090b}{description:У этого участника нечего красть.}{timestamp}}{ephemeral}{interaction}]

$cooldown[4h;{newEmbed:{color:#f1090b}{description:Вы уже совершили кражу. Попробуйте снова <t#COLON#$truncate[$sum[$math[$datestamp/1000];$math[$getCooldownTime[4h;user;rob;$authorID]/1000]]]#COLON#R>.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]`
}];