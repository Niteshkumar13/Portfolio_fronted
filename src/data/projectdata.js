import icon from "./technology";
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));
const data = [{
    "thumbnail": imageList[0],
    "title": "Chat webapp",
    "description": "This app allows users to create accounts, add Status, send message and media files to each other in real-time, and see who's online. ",
    "live": '',
    "see_live": false,
    "code": 'https://github.com/Niteshkumar13/Chat-Application-frontend',
    "tech": [
       icon.Docker,icon.Mongodb,icon.Express,icon.React,icon.Nodejs,icon.Socketio,icon.Firebase
    ]
},
{
    "thumbnail": imageList[4],
    "title": "Chat webapp",
    "description": "This app allows users to create accounts, add Status, send message and media files to each other in real-time, and see who's online. ",
    "live": '',
    "see_live": false,
    "code": 'https://github.com/Niteshkumar13/Chat-Application-frontend',
    "tech": [
        icon.GithubAction,icon.Docker,icon.TypeScript,icon.Nodejs,icon.React
    ]
},
{
    "thumbnail": imageList[2],
    "title": "Synonyms Quiz",
    "description": "Simple Quiz webapp for test yourself",
    "live": true,
    "see_live": false,
    "code": 'https://github.com/Niteshkumar13/Synonym-quiz',
    "tech": [
        icon.HTML,icon.CSS,icon.Python,icon.Django,
    ]
}, {
    "thumbnail": imageList[3],
    "title": "Video downloader",
    "description": "Just paste youtube link and download video",
    "live": 'https://youtube-video-downloader-tawny.vercel.app/',
    "see_live": true,
    "code": 'https://github.com/Niteshkumar13/Youtube-video-downloader',
    "tech": [icon.React,icon.Vercel]
},
];
export default data;
