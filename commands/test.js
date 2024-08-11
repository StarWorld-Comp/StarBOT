module.exports = [{
    name: "test",
    type: "default",
    $if: "old",
    code: `$repeatMessage[$get[shadeI];$get[shade]]$repeatMessage[$sub[$get[MAX];$get[shadeI]];$get[unshade]] $let[shadeI;$multi[$divide[$get[percent];100];$get[MAX]]]
  
  $let[percent;0]
  $let[MAX;20]
  $let[shade;█]
  $let[unshade;▒]`
}];