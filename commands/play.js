module.exports = [{
  name: "play",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$hasPlayer==false]
$playTrack[$slashOption[query];soundcloud]
$deafenUser[$clientID;true]
$joinVC[$voiceID[$authorID];yes;no;yes;default;no]
$else
$playTrack[$slashOption[query];soundcloud]
$endif
$interactionFollowUp[<:music:1264802104925749379> Трек **$slashOption[query]** - **$username[$authorID]** добавлен в очередь.]
$interactionDefer[true]

$onlyIf[$voiceID[$authorID]!=;{newEmbed:{color:#f1090b}{description:Присоединитесь к любому голосовому каналу.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
}];