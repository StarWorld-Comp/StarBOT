const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: "",
    totalShards: 2
});

sharder.on("shardCreate", (shard) => console.log(`Запущен шард ${shard.id}`));

sharder.startProcess();