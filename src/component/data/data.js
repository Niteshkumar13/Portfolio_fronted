const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));
const data = [{
    "thumbnail":imageList[0],
    "title":"Chat webapp",
    "description":"This app allows users to create accounts, add Status, send message and media files to each other in real-time, and see who's online. ",
    "live":'',
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/Chat-Application-frontend',
    "tech":[
        './mongodb.webp',
        './express.png',
        './react.png',
        './nodejs.webp',
        './Socket-io.png',
        './docker.png',
        './firebase.webp'

]
},{
    "thumbnail":imageList[2],
    "title":"Synonyms Quiz",
    "description":"Simple Quiz webapp for test yourself",
    "live":true,
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/Synonym-quiz',
    "tech":[
        './html.png',
        './css.png',
        './python.png',
        './django.webp'
    ]
},{
    "thumbnail":imageList[3],
    "title":"Video downloader",
    "description":"Just paste youtube link and download video",
    "live":'https://youtube-video-downloader-tawny.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/Youtube-video-downloader',
    "tech":['./react.png','./vercel.svg']
},
{
    "thumbnail":imageList[1],
    "title":"Natural Images",
    "description":"Collection of awesome  natural images",
    "live":'https://natural-images.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/natural-images',
    "tech":['./react.png','./vercel.svg']

},
];
export default data;
