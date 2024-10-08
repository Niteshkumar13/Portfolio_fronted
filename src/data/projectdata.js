import { useThemeContext } from "../component/themeSwitcher/themeswitcher";
import icon from "./technology";
const Logo = () => {
    const {theme} = useThemeContext()
    return (
        <div>
            <svg version="1.1" viewBox="0 0 2048 2048" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(982)" fill='#16a34a' d="m0 0 1 2 4-2h80l1 2 37 7 26 8 19 7 25 12 25 13 24 14 28 16 24 14 23 13 17 10 28 16 24 14 28 16 52 30 24 14 28 16 104 60 28 16 45 26 24 14 28 16 24 14 28 16 18 11 22 15 13 10 12 11 8 7 6 5 7 8 10 11 9 11 11 15 11 17 8 13 11 23 8 19 10 30 7 33 3 24 2 41v652l-1 45-2 28-7 37-8 26-8 22-7 16-10 19-11 18-11 16-8 11h-2l-2 4-10 11-7 8-12 12-8 7-14 12-14 10-17 11-20 12-45 26-24 14-28 16-26 15-21 12-17 10-28 16-24 14-28 16-24 14-28 16-26 15-24 14-28 16-24 14-49 28-45 26-24 14-25 14-22 13-28 16-34 17-24 9-26 8-34 7-16 3h-74l-1-2-40-8-22-7-23-8-40-20-25-14-17-10-28-16-24-14-52-30-28-16-24-14-52-30-28-16-208-120-28-16-24-14-52-30-18-11-25-17-13-11-12-11-8-7-8-8-7-8-9-10-10-13-18-27-13-24-10-22-12-36-6-27-3-17-2-25-1-19v-694l2-33 3-21 6-29 12-36 7-17 8-16 10-18 8-12 11-16 9-11 9-10 9-11 7-7h2v-2l11-9 12-11 14-10 15-10 19-12 28-16 24-14 21-12 24-14 28-16 104-60 28-16 24-14 52-30 28-16 24-14 28-16 43-25 49-28 78-45 18-10 31-15 38-13 46-10zm24 161-19 3-21 6-18 8-19 10-17 10-52 30-24 14-26 15-28 16-260 150-28 16-24 14-52 30-28 16-24 14-28 16-20 14-10 9-8 7-7 8-10 13-11 18-9 20-5 15-4 22-1 11-1 43v648l1 27 3 22 4 16 8 20 9 17 12 17 12 14 12 11 15 11 21 13 23 13 24 14 28 16 24 14 23 13 24 14 26 15 28 16 24 14 28 16 182 105 28 16 17 10 28 16 24 14 28 16 19 11 18 10 15 7 21 7 21 4 10 1h25l21-3 15-4 17-6 26-13 17-10 21-12 43-25 28-16 24-14 21-12 24-14 28-16 208-120 28-16 24-14 52-30 28-16 24-14 23-13 19-13 13-11 5-4 7-8 10-12 10-16 8-16 7-18 4-17 2-12 1-12v-713l-2-18-4-18-6-18-9-19-9-14-9-12-11-12-12-11-17-12-15-9-52-30-28-16-24-14-28-16-24-14-28-16-208-120-28-16-24-14-28-16-24-14-28-16-52-30-17-10-24-11-19-6-16-3-9-1z" />
                <path transform="translate(589,692)" fill={theme.text} d="m0 0h19l11 2 14 5 12 7 14 11 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 11 9 15 13 13 11 11 9 15 13 13 13 8 13 4 9 3 9 1 6v26l-4 15-8 16-7 9-12 12-11 9-15 13-26 22-11 9-15 13-26 22-11 9-15 13-13 11-11 9-10 9-11 9-14 12-11 9-28 24-11 9-14 12-11 9-9 8-22 18-14 9-12 5-12 3-8 1h-10l-14-2-16-6-12-7-13-12-9-12-7-14-4-15v-23l4-17 8-16 6-8 8-9 8-7 14-12 11-9 15-13 11-9 15-13 11-9 15-13 11-9 15-13 11-9 15-13 11-9 15-13 11-9 15-13 13-11 8-7-5-5-11-10-11-9-14-12-13-11-11-9-10-9-11-9-14-12-11-9-15-13-13-11-11-9-28-24-13-11-11-9-14-12-12-11-9-10-9-16-4-14-1-5v-23l4-16 8-16 11-14h2v-2l12-9 16-8 11-3z" />
                <path transform="translate(1080,1195)" fill={theme.text} d="m0 0h377l15 3 13 5 11 7 10 9 9 10 7 12 6 18 1 7v18l-2 12-5 13-8 14-9 10-11 9-15 8-13 4-19 2h-358l-19-2-16-6-12-7-12-11-7-8-8-14-5-14-2-13v-12l3-16 5-13 6-10 8-10 11-10 14-8 13-5z" />
            </svg>
        </div>
    )
}

const data = [{
    "thumbnail":'images/chat.png',
    "title": "Chat WebApp",
    "description": "This app allows users to create accounts, add Status, send message and media files to each other in real-time, and see who's online. ",
    "live": '',
    "see_live": false,
    "code": 'https://github.com/Niteshkumar13/Chat-Application-frontend',
    "tech": [
       icon.Docker,icon.Mongodb,icon.Express,icon.React,icon.Nodejs,icon.Socketio,icon.Firebase
    ]
},
{
    "thumbnail": 'images/code-editor.png',
    "title": <div className="flex"><Logo/>Code</div>,
    "description": "A browser-based code editor Plateform that allows developers to write edit and execute code directly from their web browser. ",
    "live": 'https://remote-code-frontend.vercel.app/',
    "see_live": true,
    "code": 'https://github.com/Niteshkumar13/Chat-Application-frontend',
    "tech": [
        icon.GithubAction,icon.Docker,icon.TypeScript,icon.Nodejs,icon.React
    ]
},
{
    "thumbnail": 'images/youtube-video.png',
    "title": "Video downloader",
    "description": "This platform allows you to effortlessly download YouTube videos by simply pasting the video link",
    "live": 'https://youtube-video-downloader-tawny.vercel.app/',
    "see_live": true,
    "code": 'https://github.com/Niteshkumar13/Youtube-video-downloader',
    "tech": [icon.React,icon.Vercel]
},
{
    "thumbnail": 'images/quiz.png',
    "title": "Quiz WebApp",
    "description": "A synonym quiz platform where users can improve their vocabulary by taking quizzes focused on synonyms.",
    "live": true,
    "see_live": false,
    "code": 'https://github.com/Niteshkumar13/Synonym-quiz',
    "tech": [
        icon.HTML,icon.CSS,icon.Python,icon.Django,
    ]
},
];
export default data;
