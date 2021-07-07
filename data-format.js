// NOT FOR: Brainfuck nor APL/J videos for now, unfortunately
// There are lots of videos on those, so I'll find a way to work them in later


// GENERAL
// There are 3 kinds of info for a video: "creator", "topic", "video"
// Each one has a name associated & and a link if you click on the name.

// NOTE
// If this is the first time a topic or creator is used in "data",
// then please add an entry into the topics/creators json with a relevant link
// If you don't know what link to use, refer to DETAILS or put "NA"

// DETAILS
// --- creator ---
//   * creator-name: The username of whoever made the video. Not whoever gave/did the talk.
//   * creator-link: The link to their video-channel/website/other-internet-profile/"NA", in order of pref
// --- topic ---
//   * topic-name: The topic of the video. 
//   * topic-link: For a language topic, a link to its github/esolangs-wiki-page/interpreter, in order of pref
//                 For a non-language topic, add any relevant page
// --- video ---
//   * video-name: The video's name in title-case
//   * video-link: A link to watch the video, pref youtube if available

topics = {
    "topic-name": "topic-link",
    "topic-name": "topic-link",
}

creators = {
    "creator-name": "creator-link",
    "creator-name": "creator-link",
}

dataByCreator = {
        "creator-name": [
        ["topic-name", "video-name", "video-link"],
    ],
    "creator-name": [
        ["topic-name", "video-name", "video-link"],
        ["topic-name", "video-name", "video-link"],
    ],
}