var dataByTopic = {}
/*
dataByTopic = {
    "topic-name": [
        ["creator-name", "video-name", "video-link"],
    ],
    "topic-name": [
        ["creator-name", "video-name", "video-link"],
        ["creator-name", "video-name", "video-link"],
    ],
}
*/

function init() {
    populateDataByTopic();
    populateHTML();
}

function populateHTML() {
    var data = dataByTopic;
    // var data = dataByCreator;
    var listDiv = document.getElementById("list");
    listDiv.innerHTML = "";
    for (var topicName in data) {
        var topicLink = topics[topicName];
        listDiv.innerHTML += `<h3><a href=${topicLink}>${topicName}</a></h3><ul>`
        for (const videoTuple of data[topicName]) {
            var [creatorName, videoName, videoLink] = videoTuple;
            var creatorLink = creators[creatorName];
            listDiv.innerHTML += `<ls><a href="${videoLink}">${videoName}</a> by <a href="${creatorLink}">${creatorName}</a></ls><br>`
            // listDiv.innerHTML += `<ls><a href="${creatorLink}">${creatorName}</a><strong>:</strong> <a href="${videoLink}">${videoName}</a></ls><br>`
        }
        listDiv.innerHTML += "</ul>"
    }
}

function populateDataByTopic() {
    for (var creatorName in dataByCreator) {
        for (const videoTuple of dataByCreator[creatorName]) {
            var [topicName, videoName, videoLink] = videoTuple;
            dataByTopic[topicName] = (dataByTopic[topicName] || []).concat([[creatorName, videoName, videoLink]]);
        }
    }
}