

var connectionUserCount = new signalR.HubConnectionBuilder()
    //.configureLogging(signalR.LogLevel.Trace)
    .withUrl("/hubs/usercount", signalR.HttpTransportType.WebSockets).build();

connectionUserCount.on("updateTotalViews", (value) => {
    var newcountspan = document.getElementById("totalViewsCounter");
    newcountspan.innerText = value.toString();
});



connectionUserCount.on("updateTotalUsers", (value) => {
    var newcountspan = document.getElementById("totalUsersCounter");
    newcountspan.innerText = value.toString();
});

function newWindowLoadedOnClient() {
    connectionUserCount.invoke("NewWindowLoaded","Ali").then((value) => console.log(value));
}

function fulfilled() {
    console.log("connection successful");
    newWindowLoadedOnClient();
}
function rejected() {
    console.log("connection unseccessful");
}


connectionUserCount.start().then(fulfilled, rejected);
