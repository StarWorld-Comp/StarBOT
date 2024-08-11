const progressbar = require('string-progressbar');
module.exports = [{
    name: "mutes",
    type: "interaction",
    prototype: "slash",
    code: `$djsEval[
var total = $songInfo[duration];

var current = $getCurrentTrackDuration;

progressbar.filledBar(total, current, [options]);
]
`}];