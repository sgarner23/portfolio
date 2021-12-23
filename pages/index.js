import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Stephen Garner",
          description: "A passionate Full Stack Web Developer",
          image:
            "https://media-exp1.licdn.com/dms/image/C5603AQGE0P-2tigOAA/profile-displayphoto-shrink_800_800/0/1574134801326?e=1645056000&v=beta&t=GG5iHEIFapGBrTtuwh7e4g8yqaBMPXTZ-uwuoPJPESQ",
          url: "https://www.stephen-garner.com",
          keywords: [
            "Stephen",
            "Stephen Garner",
            "@sgarner23",
            "Portfolio",
            "Stephen Garner Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "django",
            "flask",
            "django rest framework",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
            "flutter",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      {/* <Proficiency /> */}
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
