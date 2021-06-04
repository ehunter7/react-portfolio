import React from "react";
import gentle_drinker_login_screenshot from "../Assets/Images/gentle_drinker_login_screenshot.png";
import GentleDrinker_img from "../Assets/Images/gentle_drinker_main_screenshot.png";
import CtyFaktz_img from "../Assets/Images/CtyFaktz_screenshot.png";
import Burger_screenshot from "../Assets/Images/Burger_screenshot.png";
import ProjectCard from "./ProjectCard";
import Bubbles_login from "../Assets/Images/bubbles-login.png";
import Bubbles_admin from "../Assets/Images/Bubbles-admin.png";
import Bubbles_manage from "../Assets/Images/Bubbles-manage-accounts.png";
import Bubbles_pay from "../Assets/Images/Bubbles-pay.png";
import Bubbles_calendar from "../Assets/Images/Bubbles-calendar.png";

const ProjectGallery = () => {
  const myProjects = [
    {
      title: "Employee Managment System",
      image: [
        Bubbles_login,
        Bubbles_admin,
        Bubbles_manage,
        Bubbles_pay,
        Bubbles_calendar,
      ],
      deployedLink: "",
      gitHubLink: "",
      description:
        "Bubbles is an Employee managment system that allows for better communition between employees, and management. It houses a multitude of different tools that can be used by the empoyee and managment staff. The application also contains payroll calculations.",
    },
    {
      title: "Gentle Drinker",
      image: [gentle_drinker_login_screenshot, GentleDrinker_img],
      deployedLink: "https://gentledrinkers.herokuapp.com/",
      gitHubLink: "https://github.com/ehunter7/beerapp",
      description:
        "Imagine walking into a liquor store and not knowing what type of beer to drink for the night. Now a User can choose what kind of beer they would like to drink depending on the specific categories they choose. From thousands of different beers and the ability to input beers that the user comes across, Gentle Drinker will let any user find new beers to try based on ABV and flavor or even see a featured beer of the day or generate a random choice of beer to try next time they feel adventuring off the normal choices!",
    },
    {
      title: "CtyFaktz",
      image: [CtyFaktz_img],
      deployedLink: "https://charlestbell.github.io/ctyFaktz/",
      gitHubLink: "https://github.com/ehunter7/ctyFaktz",
      description:
        "Ever wondered if a city is right for you? Look no further than ctyFaktz; city research made fun!",
    },
    {
      title: "Google Book Search",
      image: [Burger_screenshot],
      deployedLink: "",
      gitHubLink: "",
      description:
        "A site that allows users to search for books using Google's book search API. Users can search and save a book of their liking.",
    },
    {
      title: "Das Burgers",
      image: [Burger_screenshot],
      deployedLink: "",
      gitHubLink: "https://github.com/ehunter7/Eat-Da-Burger",
      description:
        "This was a fun project that has a user add Burgers to a list. The list is then divided between burgers that have been eaten and that is PENDING A SMASHING! Application utilized mySql to store the data that is entered.",
    },
  ];

  return (
    <div className="container text-white">
      <h2 className="work-header mt-5 mb-3">Work</h2>
      <div className="row">
        {myProjects.map((project) => {
          console.log(project);
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;
