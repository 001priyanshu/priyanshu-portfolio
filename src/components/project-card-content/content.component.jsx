import portfolio from "../../assets/portfolio.png";
import instagramClone from '../../assets/instagramclone.png'
import lessonify from "../../assets/lessonify-pic.png"
import splitWise from "../../assets/split-wise.png"


const contentCard = [
  {
    id: 1,
    title: "Instagram-Clone",
    body: "This app is comparable to Instagram in that it allows many users to sign up and log in.Users have the ability to add photos, comment on posts, like and dislike those of other users, and even delete their own post",
    image: instagramClone,
    tech: `Technology Used - REACT JS  NODE JS EXPRESS JS MONGODB`,
    linkgithub: "https://github.com/001priyanshu/InstagramClone",
    linkdemo: "https://insta-clone-786.herokuapp.com/signin",
  },
  {
    id: 2,
    title: "Lessonify",
    body: "students to identify the specific learning disabilities and providing complete report analysis.",
    Tech : ": ReactJs, NodeJS, Express, MongoDB, Bootstrap",
    image: lessonify,
    tech: `Technology Used - REACT JS  MongoDB Bootstrap NODE JS`,
    linkgithub: "https://github.com/001priyanshu/lessonify",
    linkdemo: "https://lessonifyy.vercel.app/",
  },
  {
    id: 3,
    title: "Split-wise",
    body: "A split-wise web app is a tool designed to simplify the process of splitting expenses among a group of people. The app allows users to easily input expenses and allocate them among participants, keeping track of who owes whom. It can also help settle debts and send reminders for outstanding payments, making group expenses easier to manage and reconcile.",
    image: splitWise,
    tech: `Technology used - REACTJS EXPRESS JS NODE JS MONGODB`,
    linkgithub: "https://github.com/001priyanshu/split-wise-server",
    linkdemo: "",
  },
  {
    id: 4,
    title: "Portfolio",
    body: "My personal portfolio website built with React with smooth scroll with modern look to showcase my projects and accomplishments.",
    image: portfolio,
    tech: `REACT  STYLED-COMPONENTS  AOS ANIMATIONS`,
    linkgithub: "https://github.com/001priyanshu/priyanshu-portfolio",
    linkdemo: "",
  },
];

export default contentCard;
