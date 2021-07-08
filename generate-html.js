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
    var topicNamesSorted = Object.keys(data).sort();

    // var data = dataByCreator;
    listHTML = "";
    console.log(data);
    for (const topicName of topicNamesSorted) {
        var topicLink = topics[topicName];
        console.log(topicName);
        listHTML += `<h3><a href=${topicLink}>${topicName}</a></h3><ul>`
        for (const videoTuple of data[topicName]) {
            var [creatorName, videoName, videoLink] = videoTuple;
            var creatorLink = creators[creatorName];
            listHTML += `<li><a href="${videoLink}">${videoName}</a> by <a href="${creatorLink}">${creatorName}</a></li>`
            // listDiv.innerHTML += `<ls><a href="${creatorLink}">${creatorName}</a><strong>:</strong> <a href="${videoLink}">${videoName}</a></ls><br>`
        }
        listHTML += "</ul>"
    }
    // The final <h3><h3> is just for the border-top styling for h3s so there's one at the bottom 
    document.getElementById("list").innerHTML = listHTML+"<h3></h3>";
}

function populateDataByTopic() {
    for (var creatorName in dataByCreator) {
        for (const videoTuple of dataByCreator[creatorName]) {
            var [topicName, videoName, videoLink] = videoTuple;
            dataByTopic[topicName] = (dataByTopic[topicName] || []).concat([[creatorName, videoName, videoLink]]);
        }
    }
}