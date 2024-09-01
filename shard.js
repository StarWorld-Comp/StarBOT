const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: "MTI1ODY0Njk3NDg3MDA2MTE4Nw.GRqG1I.L0JoMiblWBV0zLhViIz4z25BlNODpWaA3pSco8",
    totalShards: 2
});

sharder.on("shardCreate", (shard) => console.log(`Запущен шард ${shard.id}`));
sharder.startProcess();