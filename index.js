const { AoiClient, LoadCommands, CustomEvent } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { AoiCanvas } = require("aoi.canvas");
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
  tickets_open: "0",
  tickets: "0",
  ticket_close_status: "false",
  ticket_user: "none",
  cash: "0",
  bank: "0",
  user: "",
  document: "none",
  fio: "",
  bio: "",
  vk: "none",
  years: "none",
  version: "5.0.5-DEV",
  warns: "0",
  app_helper: "on",
  mustitle: "none",
  app_yt: "off",
  app_tiktok: "off",
  app_technical: "off",
  app_streamer: "off",
  music_msg: "0",
  thumbnail: "none",
  author: "",
  duration: "",
  requester: "",
  url: "",
  status: "",
  status_mus: "none",
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
  xpMulti: "1.5",
  name: "",
  age: "",
  gender: "",
  nickname_history: "",
  temproles: "",
  hash: "1c9aea5",
  platform: "youtube"
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
loader.load(client.cmd, "./src/commands/", true);
loader.load(client.cmd, "./src/events/", true);
loader.load(voice.cmds, "./src/musicEvents/", true);

<<<<<<< Updated upstream
client.functionManager.createFunction({
  name: "$FormatTime",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [duration] = data.inside.splits;
    const units = {
        's': 'секунда',
        'm': 'минута',
        'h': 'час',
        'd': 'день',
        'w': 'неделя',
        'mo': 'месяц',
        'y': 'год'
    };
    const pluralUnits = {
      's': (num) => num % 10 === 1 && num % 100 !== 11 ? 'секунда' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'секунды' : 'секунд',
      'm': (num) => num % 10 === 1 && num % 100 !== 11 ? 'минута' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'минуты' : 'минут',
      'h': (num) => num % 10 === 1 && num % 100 !== 11 ? 'час' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'часа' : 'часов',
      'd': (num) => num % 10 === 1 && num % 100 !== 11 ? 'день' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'дня' : 'дней',
      'w': (num) => num % 10 === 1 && num % 100 !== 11 ? 'неделя' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'недели' : 'недель',
      'mo': (num) => num % 10 === 1 && num % 100 !== 11 ? 'месяц' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'месяца' : 'месяцев',
      'y': (num) => num % 10 === 1 && num % 100 !== 11 ? 'год' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'года' : 'лет'
    };
    const match = duration.match(/^(\d+)([a-z]+)$/);
      if (!match) {
        return d.aoiError.fnError(d, "custom", {}, "Вы указали неправильный формат времени.");
      }
    const [_, number, unit] = match;
    const num = parseInt(number, 10);
    const unitName = pluralUnits[unit](num);
    const a = `${num} ${unitName}`;
    data.result = a
    return {
      code: d.util.setCode(data)
    };
  }
});
=======
functions.forEach((func) => client.functionManager.createFunction(func));
>>>>>>> Stashed changes
