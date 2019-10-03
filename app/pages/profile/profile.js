const observable = require("data/observable");
const axios = require("axios");

let user = observable.fromObject({
    id: "jopbouckaert",
    name: "unknown",
    nickname: "unspecified",
    repositories: "unknown",
    followers: "unknown",
    avatar: ""
});

exports.onLoaded = function (args) {
    let page = args.object;
    page.bindingContext = user;

    axios.get("https://api.github.com/users/" + user.id)
        .then(function (response) {
            user.name = response.data.name;
            user.nickname = response.data.login;
            user.repositories = response.data.public_repos;
            user.followers = response.data.followers;
            user.avatar = response.data.avatar_url;
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

// Make a request for a user with a given ID
