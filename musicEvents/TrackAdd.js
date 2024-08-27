module.exports = [{
    name: "TrackAdd",
    channel: "$channelID",
    $if: "old",
    type: "trackAdd",
    code: `
$if[$playerStatus==idling]
$title[Воспроизведение трека прервано]
$description[Соединение было прервано из-за того, что я был отключён от голосового канала или произошла ошибка во время воспроизведения трека.]
$color[#2e3d9f]
$leaveVC
$clearQueue
$stopTrack
$endif`
}];