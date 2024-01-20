
const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));
const data = [{
    "thumbnail":imageList[0],
    "title":"Chat webapp",
    "description":"Comm. between two or more different client",
    "live":'https://natural-images.vercel.app/',
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/natural-images',
    "tech":[
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
        'https://cdn.iconscout.com/icon/free/png-256/free-express-8-1175029.png',
        'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png',
        'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png'

]
},{
    "thumbnail":imageList[2],
    "title":"Synonyms Quiz",
    "description":"Simple Quiz webapp for test yourself",
    "live":true,
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/Synonym-quiz',
    "tech":['https://cdn-icons-png.flaticon.com/512/732/732212.png','https://cdn-icons-png.flaticon.com/512/732/732190.png','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png','https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png']
},{
    "thumbnail":imageList[3],
    "title":"Video downloader",
    "description":"Just paste youtube link and download video",
    "live":'https://youtube-video-downloader-tawny.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/Youtube-video-downloader',
    "tech":['https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png','https://www.svgrepo.com/show/327408/logo-vercel.svg']
},
{
    "thumbnail":imageList[1],
    "title":"Natural Images",
    "description":"Collection of awesome  natural images",
    "live":'https://natural-images.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/natural-images',
    "tech":['https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png','https://www.svgrepo.com/show/327408/logo-vercel.svg']

},
];
export default data;
