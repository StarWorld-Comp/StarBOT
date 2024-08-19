const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: "",
    totalShards: 10
});

sharder.on("shardCreate", (shard) => console.log(`Запущен шард ${shard.id}`));

sharder.startProcess();