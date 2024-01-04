import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub
} from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

import {BsMedium} from "react-icons/bs";


const menuConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/portfolio",
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Projects",
            path: "/projects",
            icon: <AiOutlineGithub size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Resume",
            path: "/resume",
            icon: <GrDocumentText size={35}/>,
            className: "nav-text"
        },

    ]

}

export default menuConfig
