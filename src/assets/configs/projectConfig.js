import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import { IoLogoTableau } from "react-icons/io5";
import {ImBook} from "react-icons/im";
import { HiDocumentReport } from "react-icons/hi";
import { BsDiagram2Fill } from "react-icons/bs";
import { BsFiletypeSql } from "react-icons/bs";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"
import influenza from "../images/influenza.webp"
import rockbuster from "../images/rockbuster.PNG"
import airbnb from "../images/airbnb.PNG"
import pigbank from "../images/pigbank.PNG"
import instacart from "../images/instacart.PNG"
import gameco from "../images/gameco.PNG"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Influenza Preparation",
        links: [
            {
                name: "presentation",
                url: "https://docs.google.com/presentation/d/15Rw6mvGklTCKRjXKyk56z6oIp5KOcyYySE066-k9yCc/edit?fbclid=IwAR13vl9d56UghkR89OdoN808a10aw1WQNGF5WYCdFFxHeG8zy0GN_OLDsNE#slide=id.g21d5bf1ff46_0_3",
                icon: <HiDocumentReport/>,
            },
            {
                name: "tableau",
                url: "https://public.tableau.com/app/profile/tuyet.nguyen7057/viz/StaffingPlanforFluSeason-Storyboardsize/StaffingPlanforFluSeason",
                icon: <IoLogoTableau/>,
            }
        ],
        image: influenza,
        description: "Leveraging Excel and Tableau to examine trends in influenza and how they can be used to proactively plan for staffing needs across the country.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Rockbuster",
        links: [
            {
                name: "report",
                url: "https://docs.google.com/presentation/d/1N0PR0QhaZshPm_pUTMEgAtl6b2q9SDeU/edit?fbclid=IwAR0JUOV_vtoyuOvBc9Q5h-duw51XDEKuR44O7I9-7dd9WOyYtztkjrjnKq4#slide=id.p1",
                icon: <HiDocumentReport/>,
            },
            {
                name: "repo",
                url: "https://github.com/tuyet-nguyen-da/Rockbuster-Stealth_SQL",
                icon: <AiFillGithub/>,
            },
            {
                name: "Entity Relationship Diagram",
                url: "https://drive.google.com/file/d/1-u-nVDF9zW3etCCPwSdBLH9N8mddUAjR/view",
                icon: <BsDiagram2Fill/>,
            },
            {
                name: "sql",
                url: "https://docs.google.com/spreadsheets/d/1CRAe1r5gtNbIVqyCanDdG9lfqXs71aW2/edit#gid=1813020793",
                icon: <BsFiletypeSql/>,
            }
        ],
        image: rockbuster,
        description: "Using SQL to analyze data and address ad-hoc business inquiries, aiding the launch strategy for the new online video service.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Instacart",
        links: [
            {
                name: "report",
                url: "https://docs.google.com/presentation/d/1GLjXAi1pe0zP_ylVsLXeba9_4dV5L7sknKHU8IuFGMc/edit#slide=id.g26dcbe4c488_0_1880",
                icon: <HiDocumentReport/>
            },
            {
                name: "repo",
                url: "https://github.com/tuyet-nguyen-da/Instacart-Python/tree/main",
                icon: <AiFillGithub/>
            }
        ],
        image: instacart,
        description: "Using Python to conduct exploratory analysis for improved customer segmentation.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Seattle Airbnb Market",
        links: [
            {
                name: "report",
                url: "https://docs.google.com/presentation/d/1GLjXAi1pe0zP_ylVsLXeba9_4dV5L7sknKHU8IuFGMc/edit#slide=id.g2621ad39f2c_0_0",
                icon: <HiDocumentReport/>
            },
            {
                name: "repo",
                url: "https://github.com/tuyet-nguyen-da/seattle-airbnb",
                icon: <AiFillGithub/>
            },
            {
                name: "tableau",
                url: "https://public.tableau.com/app/profile/tuyet.nguyen7057/viz/SeattleAirbnbListingsAnalysis/Story1?publish=yes",
                icon: <IoLogoTableau/>,
            }
        ],
        image: airbnb,
        description: "Using Python and Tableau to identify key factors impacting listing prices",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "GameCo",
        links: [
            {
                name: "report",
                url: "https://docs.google.com/presentation/d/1Zo9hJJMhx8HQ2kD1XrL_Wi13Ybk6nNp0/edit#slide=id.p1",
                icon: <HiDocumentReport/>
            }
        ],
        image: gameco,
        description: "Using Excel for descriptive analysis of video game data to understand market potential for GameCo's new releases.",
        target: "_blank"
    }
]

export default projectConfig