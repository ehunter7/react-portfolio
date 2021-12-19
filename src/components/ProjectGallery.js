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
import Google_Books_Search from "../Assets/Images/Google-Book-Search.png";
import Google_Books_Saved from "../Assets/Images/Google-Book-Saved.png";
import Employee_Tracker from "../Assets/Images/Employee-Tracker.jpg";
import Employee_Tracker_Filter from "../Assets/Images/Employee-Tracker-Filter.jpg";
import will_call_pending from "AssetsImageswill-call_pending.png";
import will_call_completed from "AssetsImageswill-call_completed.png";
import will_call_completed_open from "AssetsImageswill-call_completed_open.png";
import will_call_new from "AssetsImageswill-call_new.png";
import will_call_users from "AssetsImageswill-call_users.png";

const ProjectGallery = () => {
  const myProjects = [
    {
      title: "Will Call Pickup Manager",
      image: [
        will_call_pending,
        will_call_new,
        will_call_completed,
        will_call_completed_open,
        will_call_users,
      ],
      deployedLink: "https://enigmatic-journey-26123.herokuapp.com/",
      gitHubLink: "https://github.com/ehunter7/will-call",
      description:
        "The will Call manager allows users to create pickups, track there progress, and set a pickup to complete once picked up. The application allows an admin to create multiple users with different roles. Each role has different rules and parameters that the employee must follow on the site. The site was build using MongoDB, Express.js, React.js, and Node.js",
    },
    {
      title: "Employee Managment System",
      image: [
        Bubbles_login,
        Bubbles_admin,
        Bubbles_manage,
        Bubbles_pay,
        Bubbles_calendar,
      ],
      deployedLink: "https://peaceful-castle-79357.herokuapp.com/",
      gitHubLink: "https://github.com/ehunter7/Portal-Matriarch",
      description:
        "Bubbles is an Employee Management System that allows for better communication between employees and management. It houses a multitude of different tools that can be used by the employee and management staff. The application also contains payroll calculations. This site was built using MongoDB, Express, React, and Node.js.",
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
        "Ever wondered if a city is right for you? Look no further than ctyFaktz; city research made fun! The site utilizes multiple API calls including a Google maps API, Yelp API. The site also incorporates auto completion when typing in a city which was made possible by the Google API.",
    },
    {
      title: "Google Book Search",
      image: [Google_Books_Search, Google_Books_Saved],
      deployedLink: "https://calm-peak-82404.herokuapp.com/",
      gitHubLink: "https://github.com/ehunter7/google-book-search",
      description:
        "A site that allows users to search for books using Google's Book Search API. Users can search and save any book's of their liking. The application also contains payroll calculations. This site was built using MongoDB, Express, React, and Node.js.",
    },
    {
      title: "Burgers",
      image: [Burger_screenshot],
      deployedLink: "",
      gitHubLink: "https://github.com/ehunter7/Eat-Da-Burger",
      description:
        "This was a fun project that has a user add burgers to a list. The list is then divided between burgers that have been eaten and have not been eaten (aka PENDING A SMASHING!) This application utilized mySql to store the data that is entered.",
    },
    {
      title: "Employee Tracker",
      image: [Employee_Tracker, Employee_Tracker_Filter],
      deployedLink: "https://ehunter7.github.io/react-employee-tracker/",
      gitHubLink: "https://github.com/ehunter7/react-employee-tracker",
      description:
        "The Employer Tracker is an application that produces a list of employees generated from a random user API. List contains one hundred employees and is searchable by multiple fields such as: Name, E-mail, City, or Country. The list can also be filtered by Country, Username, and/ or E-mail. This site was built using MongoDB, Express, React, and Node.js.",
    },
  ];

  return (
    <div id="work" className="container text-white">
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
