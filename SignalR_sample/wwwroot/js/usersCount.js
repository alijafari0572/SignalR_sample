

var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/usercount").build();

connectionUserCount.on("updateTotalViews", (value) => {
    var newcountspan = document.getElementById("totalViewsCounter");
    newcountspan.innerText = value.toString();
});

function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

function fulfilled() {
    console.log("connection successful");
    newWindowLoadedOnClient();
}
function rejected() {
    console.log("connection unseccessful");
}


connectionUserCount.start().then(fulfilled, rejected);
