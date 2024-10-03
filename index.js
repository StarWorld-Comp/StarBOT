const { AoiClient, LoadCommands, CustomEvent } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { AoiCanvas } = require("aoi.canvas");
const { Database } = require("aoi.sqlite");
const config = require("./config.json");
const functions = require("./src/custom/functions.js");

const client = new AoiClient({
  token: config.token,
  prefix: config.prefix,
  intents: config.intents,
  events: config.events,
  disableFunctions: config.disableFunc,
  mobilePlatform: false,
  respondToBots: false,
  guildOnly: false,
  disableAoiDB: true,
  suppressAllErrors: false,
  errorMessage: "Fotal Error!",
  aoiAutoUpdate: false,
  aoiWarning: true,
  aoiLogs: true,
});

client.on("error", (err) => {

  console.error("Something Broke!", err);

});

new Database(client, {
  location: "./database/database.db",
  tables: ["main", "applications", "eco", "ticket", "music"],
  logging: true,
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
   spotifyAuth: {
       clientId: "befdbab3cd754c4eb6b30ecd94d7d461",
       clientSecret: "5f160b24ada0471c9283c55285ea3a27"
   },
   youtubegl: "US",
   youtubeClient: "YTMUSIC",
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
  version: "5.0.6",
  warns: "0",
  nextLevelXP: "200",
  messages: "0",
  voice: "0",
  xpMulti: "1.5",
  name: "",
  age: "",
  gender: "",
  nickname_history: "",
  temproles: "",
  hash: "1c9aea5",
}, "main");

client.variables({
  tickets_open: "0",
  tickets: "0",
  ticket_close_status: "false",
  ticket_user: "none"
}, "ticket");

client.variables({
  cash: "0",
  bank: "0",
  balance: "0",
  thiefs: "0",
  success_thiefs: "0",
  fail_thiefs: "0",
  jail_thiefs: "0",
  jail_status: "false"
}, "eco");

client.variables({
  user: "",
  document: "none",
  fio: "",
  bio: "",
  vk: "none",
  years: "none",
  app_helper: "on",
  app_yt: "off",
  app_tiktok: "off",
  app_technical: "off",
  app_streamer: "off"
}, "applications");

client.variables({
  mustitle: "",
  music_msg: "0",
  thumbnail: "",
  author: "",
  duration: "",
  requester: "",
  url: "",
  status: "",
  status_mus: "none",
  platform: "youtube",
  page: "",
}, "music");

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
loader.load(client.cmd, "./src/commands/", true);
loader.load(client.cmd, "./src/events/", true);
loader.load(voice.cmds, "./src/custom/events/music/", true);

functions.forEach((func) => client.functionManager.createFunction(func));