const observable = require("data/observable");

let user = observable.fromObject({
    id: "jopbouckaert",
    name: "unknown",
    nickname: "unspecified",
    repositories: "unknown",
    followers: "unknown"
});

exports.onLoaded = function(args) {
    let page = args.object;
    page.bindingContext = user;
};
