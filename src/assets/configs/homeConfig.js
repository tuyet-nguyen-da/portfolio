import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Tuyet Nguyen</strong>
        </h1>,
    titles: [
        "Data Analyst"
    ],
    about: {
        start: "I'm a passionate data analyst, equipped with a Bachelor's degree in Computer Information Systems, and I thrive on the art of turning data into actionable insights. My academic journey laid the foundation for my skills in Excel, SQL, Python, and Tableau, which I've further honed through real-life projects. ",
        exit: "Beyond the technical realm, my experience in customer service has enriched my attention to detail, problem-solving abilities, and effective communication skills, making me a valuable collaborator."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "CareerFoundy bootcamp",
            company: "Data Analytics Program",
            description: "Gain a rigorous education in data analysis, testing, visualization, dashboarding, querying, and solve real customer problems",
            date: "01/2023-12/2023",
            icon: <DiCodeigniter/>,
            tags: ["tableau", "SQL", "Excel", "Python", "Pandas", "Numpy"]
        },
        {
            id: "work-2",
            title: "Vietnamese Interpreter",
            company: "LATN Language Solutions ",
            description: "•	Facilitate communication between English and Vietnamese speakers in a wide range of industries",
            date: "2021-2023",
            icon: <FaMobileAlt/>,
            tags: []
        },
        {
            id: "work-1",
            title: "Georgia State Universisty",
            company: "Bachelor's degree in Computer Information Systems",
            description: "",
            date: "2017-2021",
            icon: <GiCommercialAirplane/>,
            tags: []
        }
    ]
}


export default homeConfig