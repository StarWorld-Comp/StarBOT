const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { channel } = require("aoi.js/src/events/slashOption");
const { AoiCanvas } = require("@aoijs/aoi.canvas");
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
  cache: {
        users: 2000,
        messages: 5000,
    },
  disableAoiDB: false,
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "5f160b24ada0471c9283c55285ea3a27",
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
   youtubegl: "US",
   youtubeClient: "TV_EMBEDDED"
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
    url: "https://youtube.com/",
    status: "idle",
    time: 20
});
client.variables({
  level: 1,
  xp: 0,
  logs: "1242150721369931847",
  tickets_open: 0,
  tickets: 0,
  ticket_close_status: "false",
  ticket_user: "none",
  cash: 0,
  bank: 0,
  user: "",
  document: "none",
  fio: "none",
  bio: "none",
  vk: "none",
  years: "none",
  version: "5.0.0",
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
  bonusinvites: "0",
  page: ""
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

$elseif[$checkContains[$message;шлюха;гей;пидорас;идиот;проститутка;ебал;трахал;насиловал;пидор;хуесос;подсос;очкошник;гандон;сука;гондурас;гондон;еблан;ахуел;блядина;долбаеб;уёб;Пиздец;пиздец;Шлюха;хуй;Хуй]==true]
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
$endif
$onlyIf[$hasPerms[$guildID;$authorID;administrator;managemessages;moderatemembers]!=true]`
});

client.command({
    name: "$alwaysExecute",
    $if: "old",
    code: `
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

const { InviteManager } = require("@akarui/aoi.invite");
const i = new InviteManager(client,{
    sk: "a-32-characters-long-string-here",
},['inviteJoin','inviteLeave', 'inviteError']);

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
loader.load(i.cmds, "./inviteEvents/", true);