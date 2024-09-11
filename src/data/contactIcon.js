import { SiLinkedin,SiGithub,SiInstagram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
// import { BsTwitterX } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const contactIcon = {
    "linkedin":{
        "icon":SiLinkedin,
        "primaryColor":""
    },
    "github":{
        "icon":SiGithub,
        "primaryColor":""
    },
    "email":{
        "icon":HiOutlineMail,
        "primaryColor":""
    },
    "instagram":{
        "icon":SiInstagram,
        "primaryColor":""
    },
    "twitter":{
        "icon":FaXTwitter,
        "primaryColor":""
    }
    
}

const icons = [
    {link:'https://www.linkedin.com/in/nitesh-kumar-b230ba1a6/',icon:contactIcon.linkedin},
    {link:'mailto:niteshk48044@gmail.com',icon:contactIcon.email},
    {link:'https://github.com/Niteshkumar13',icon:contactIcon.github},
    {link:'https://www.instagram.com/nites.h359/',icon:contactIcon.twitter},
    {link:'https://www.instagram.com/nites.h359/',icon:contactIcon.instagram}
];
export {icons};