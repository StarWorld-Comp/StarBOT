module.exports = [{
  name: "play",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$isAutocomplete==true]
$autoCompleteRespond[$nonEscape[$get[query]]]
$suppressErrors
$if[$isValidLink[$slashOption[query]]==true]
$let[query;$slashOption[query]#SEMI#$slashOption[query]]
$endif
$if[$slashOption[query]==]
$let[query;укажите название трека или url.#SEMI#track-or-url]
$else
$let[query;$search[$slashOption[query];youtube;{title}#SEMI#{title};20;#SEMI#]]
$endif
$else
$interactionEdit[<:music:1264885613497159782> Трек **$slashOption[query]** добавлен в очередь.]
$playTrack[$nonEscape[$slashOption[query]];youtube]
$suppressErrors
$if[$hasPlayer==false]
$joinVC[$voiceID[$authorID];true;false;true;default]
$endif
$if[$playerStatus==idle]
$editMessage[$getGuildVar[music_msg;$guildID;music];{newEmbed:{author:$getGuildVar[author;$guildID;music]:$getGuildVar[thumbnail;$guildID;music]}{title:$getGuildVar[title;$guildID;music]}{url:$getGuildVar[url;$guildID;music]}{thumbnail:$getGuildVar[thumbnail;$guildID;music]}{field:Статус:Прослушано ($digitalFormat[$getGuildVar[duration;$guildID;music]]) — $getGuildVar[requester;$guildID;music]:false}{timestamp}{color:#2e3d9f}};$channelID]
$clearQueue
$stopTrack
$suppressErrors
$endif
$interactionReply[<a:load:1281959260049379348> Загрузка трека...]

$onlyIf[$voiceID[$authorID]!=;{newEmbed:{color:#f1090b}{description:Присоединитесь к любому голосовому каналу.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
$endif`
}];