const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, Manager, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { channel } = require("aoi.js/src/events/slashOption");
const { AoiCanvas } = require("aoi.canvas");
const { pathToFfmpeg } = require('ffmpeg-static');


const client = new AoiClient({
  token: "",
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences", "GuildMessageTyping", "GuildMembers", "GuildWebhooks", "GuildVoiceStates", "GuildBans", "GuildEmojisAndStickers", "GuildInvites", "GuildMessageReactions", "GuildIntegrations", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "GuildScheduledEvents"],
  events: ["onMessage", "onInteractionCreate", "onPresenceUpdate", "onTypingStart", "onUserUpdate", "onMembersChunk", "onMemberAvailable", "onMemberUpdate", "onLeave", "onJoin", "onWebhooksUpdate", "onVoiceStateUpdate", "onBanRemove", "onBanAdd", "onStickerUpdate", "onStickerDelete", "onStickerCreate", "onEmojiUpdate", "onEmojiDelete", "onEmojiCreate", "onThreadMembersUpdate", "onThreadMemberUpdate", "onThreadListSync", "onThreadDelete", "onThreadUpdate", "onThreadCreate", "onStageInstanceDelete", "onStageInstanceUpdate", "onStageInstanceCreate", "onChannelPinsUpdate", "onChannelDelete", "onChannelUpdate", "onChannelCreate", "onRoleDelete", "onRoleUpdate", "onRoleCreate", "onGuildUnavailable", "onGuildUpdate", "onGuildLeave", "onGuildJoin", "onInviteDelete", "onInviteCreate", "onReactionRemoveAll", "onReactionRemove", "onReactionAdd", "onMessageDeleteBulk", "onMessageUpdate", "onMessageDelete", "onFunctionError", "onApplicationCommandPermissionsUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate"],
  disableFunctions: ["$clientToken", "$clientPrefixes"],
  mobilePlatform: false,
  respondToBots: false,
  guildOnly: false,
  disableAoiDB: false,
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "55160b21ada0471c9283c552850a3a27",
  },
    suppressAllErrors: false,
    errorMessage: "Fotal Error!",
    aoiAutoUpdate: false,
    aoiWarning: true,
    aoiLogs: true,
});

const canvas = new AoiCanvas(client);

const voice = new AoiVoice(client, {
   devOptions: {
     debug: false,
  },
  requestOptions: {
    offsetTimeout: 1500,
    soundcloudLikeTrackLimit: -1,
    youtubePlaylistLimit: -1,
    spotifyPlaylistLimit: -1
  },
  searchOptions: {
   youtubeAuth: true,
   soundcloudClientId: "",
   spotifyAuth: {
       clientId: "befdbab3cd754c4eb6b30ecd94d7d461",
       clientSecret: "5f160b24ada0471c9283c55285ea3a27"
   },
   youtubegl: "KZ",
   youtubeClient: "TV_EMBEDDED",
   youtubeToken: true
   }
});
client.status({
    name: "mc.yutihvh.com",
    type: "PLAYING",
    status: "idle",
    time: 20
});
client.status({
    name: "Любит тебя 💗",
    type: "CUSTOM",
    status: "idle",
    time: 25
});
client.status({
    name: "на сервере",
    type: "STREAMING",
    url: "https://twitch.tv/shidokageno_/home",
    time: 20
});
client.variables({
  level: "1",
  xp: "0",
  logs: "1242150721369931847",
  tickets_open: "0",
  tickets: "0",
  ticket_close_status: "false",
  ticket_user: "none",
  cash: "0",
  bank: "0",
  user: "",
  document: "none",
  fio: "none",
  bio: "none",
  vk: "none",
  years: "none",
  version: "5.0.2",
  warns: "0",
  application_helper: "on",
  application_yt: "off",
  application_tiktok: "off",
  music_msg: "0",
  music_thumbnail : "0",
  music_title: "0",
  music_author: "0",
  music_duration: "0",
  requester: "",
  url: "",
  music_authoricon: "",
  status: "",
  page: "",
  nextLevelXP: "200",
  thiefs: "0",
  success_thiefs: "0",
  fail_thiefs: "0",
  jail_thiefs: "0",
  jail_status: "false",
  balance: "0",
  messages: "0",
  voice: "0",
  xpMulti: "1.5"
});
client.command({
    name: "$alwaysExecute",
    $if: "old",
    code: `
$if[$checkContains[$message;https://discord.gg/;https://dsc.gg/;discord.gg/;dsc.gg/]==true]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Приглашения:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;15h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand

$elseif[$checkContains[$message;шлюха;Шлюха;Гей;гей;пидорас;Пидорас;идиот;Идиот;проститутка;Проститутка;ебал;Ебал;трахал;Трахал;насиловал;Насиловал;пидор;Пидор;хуесос;Хуесос;подсос;очкошник;гандон;сука;гондурас;гондон;еблан;ахуел;блядина;долбаеб;уёб;Пиздец;пиздец;хуй;Хуй]==true]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Плохие слова:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;24h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand
$endelseif

$elseif[$checkContains[$message;https://t.me/;t.me/;t.me]==true]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил предупреждение}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Автомодерация#COLON# Ссылки:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$if[$getUserVar[warns;$authorID]==3]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;2h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#3\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==7]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;5h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#7\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$if[$getUserVar[warns;$authorID]==12]
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Участник **$username** (<@$authorID>) получил наказание}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{field:Предупреждение:**#$getUserVar[warns;$authorID]**:true}{field:Случай:**#$getGuildVar[warns]**:true}{field:Причина:Тайм-Аут#COLON# Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`):false}{footer:Id участника#COLON# $authorID:$authorAvatar}{timestamp}{color:ffcb59}}]
$timeoutMember[$guildID;$authorID;24h;false;Тайм-Аут: Автоматическое действие за придупреждение \`#12\` (случай \`#$getGuildVar[warns;$guildID]\`)]
$endif
$setGuildVar[warns;$sum[$getGuildVar[warns;$guildID];1];$guildID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$deleteCommand
$endelseif
$endif
$onlyIf[$hasPerms[$guildID;$authorID;administrator;managemessages;moderatemembers]!=true]`
});

client.command({
    name: "$alwaysExecute",
    $if: "old",
    code: `
$setUserVar[messages;$sum[$getUserVar[messages;$authorID;$guildID];1];$authorID;$guildID]
$if[$messageType[$messageID;$channelID]==8]
$description[Участник **$username[$authorID]** (<@$authorID>) дал нашему проекту буст, Спасибо тебе!\nВсего бустов#COLON# **$guildBoostCount[$guildID]**]
$addTimestamp
$endif
$if[$messageType[$messageID;$channelID]==9]
$description[Уровень буста сервера был поднят до **1**]
$addTimestamp
$endif
$if[$messageType[$messageID;$channelID]==10]
$description[Уровень буста сервера был поднят до **2**]
$addTimestamp
$endif
$if[$messageType[$messageID;$channelID]==11]
$description[Уровень буста сервера был полнят до **3**]
$addTimestamp
$endif`
});

client.command({
    name: "$alwaysExecute",
    $if: "old",
    code: `
$if[$getUserVar[xp]>=$getUserVar[nextLevelXP]]
<@$authorID> Поздравляю! Вы повысили уровень до **$getUserVar[level]**!
$setUserVar[nextLevelXP;$round[$multi[$getUserVar[nextLevelXP];$getVar[xpMulti]]]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[xp;$sub[$getUserVar[xp];$getUserVar[nextLevelXP]]]
$endif

$if[$isBoosting[$authorID;$guildID]==true]
$setUserVar[xp;$sum[$getUserVar[xp];$random[4;14]]]
$else
$setUserVar[xp;$sum[$getUserVar[xp];$random[1;8]]]
$endif
`
});
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),
voice.bindExecutor(client.functionManager.interpreter);
    
const loader = new LoadCommands(client);
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.AudioError);
voice.addEvent(PlayerEvents.TrackPause);
voice.addEvent(PlayerEvents.TrackResume);
voice.addEvent(PlayerEvents.QueueStart);
voice.addEvent(PlayerEvents.TrackAdd);
loader.load(client.cmd, "./commands/", true);
loader.load(client.cmd, "./events/", true);
loader.load(voice.cmds, "./musicEvents/", true);

client.functionManager.createFunction({
  name: "$FormatTime",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [duration] = data.inside.splits;
    const units = {
        's': 'секунду',
        'm': 'минута',
        'h': 'час',
        'd': 'день',
        'w': 'неделя',
        'mo': 'месяц',
        'y': 'год'
    };
    const pluralUnits = {
        's': 'секунд',
        'm': 'минуты',
        'h': 'часа',
        'd': 'дня',
        'w': 'недели',
        'mo': 'месяца',
        'y': 'года'
    };
    const match = duration.match(/^(\d+)([a-z]+)$/);
      if (!match) {
        return d.aoiError.fnError(d, "custom", {}, "Вы указали неправильный формат времени.");
      }
      const [_, number, unit] = match;
      const num = parseInt(number, 10);
      const unitName = num === 1
        ? units[unit]
        : (num > 1 && num < 5
          ? pluralUnits[unit]
          : pluralUnits[unit] + 'ов');
      const a = `${num} ${unitName}`;
    data.result = a
    return {
      code: d.util.setCode(data)
    };
  }
});