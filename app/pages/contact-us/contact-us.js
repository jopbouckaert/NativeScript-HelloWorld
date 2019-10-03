const dialogModule = require("ui/dialogs");
const observable = require("data/observable");

let message = observable.fromObject({
    message: "",
    subject: ""
});

exports.onSubmit = function() {
    console.log("Submitting message" + JSON.stringify(message));
    dialogModule.alert("Submitted message successfully");
};

exports.onLoaded = function(args) {
    let page = args.object; // Get page that was loaded
    page.bindingContext = message; // Data binding between message and GUI
};
