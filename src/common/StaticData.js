import {
    hitachi,
    talech,
    mulodo,
    nashtech,
    bk,
    maharishi
} from "./assets";

import {
    SiNodedotjs,
    SiTypescript,
    SiJquery,
    SiVisualstudiocode,
    SiPostman,
    SiGit,
    SiJava,
    SiPhp,
    SiPerl,
    SiLaravel,
    SiSpringboot,
    SiSpringsecurity,
    SiAmazonaws,
    SiPostgresql,
    SiDocker,
    SiEclipseide,
    SiIntellijidea,
    SiSubversion,
    SiJenkins,
    SiCakephp,
    SiCodeigniter,
    SiWordpress,
    SiExpress,
    SiNextdotjs,
    SiMongodb,
    SiTwilio,
    SiJson,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiApache,
    SiNginx,
    SiApachetomcat
} from "react-icons/si";

import {
    AiFillGithub,
    AiOutlineGitlab,
} from "react-icons/ai";

import {
    GrMysql,
} from "react-icons/gr";

import {
    GiSoap
} from "react-icons/gi";

const StaticData = {
    getSkills: function () {
        return [
            {
                title: "Programming Languages",
                items: [
                    {
                        id: "pl-1",
                        icon: SiPhp,
                        name: "PHP",
                    },
                    {
                        id: "pl-1",
                        icon: SiJava,
                        name: "Java",
                    },
                    {
                        id: "pl-3",
                        icon: SiPerl,
                        name: "Perl",
                    },
                    {
                        id: "pl-4",
                        icon: SiNodedotjs,
                        name: "Node.js",
                    },
                    {
                        id: "pl-5",
                        icon: SiTypescript,
                        name: "Typescript",
                    }
                ],
            },
            {
                title: "Frameworks/Libraries",
                items: [
                    {
                        id: "f-0-0",
                        icon: SiLaravel,
                        name: "Laravel",
                    },
                    {
                        id: "f-0-1",
                        icon: SiCakephp,
                        name: "CakePHP",
                    },
                    {
                        id: "f-0-2",
                        icon: SiCodeigniter,
                        name: "Codeigniter",
                    },
                    {
                        id: "f-0-3",
                        icon: SiWordpress,
                        name: "Wordpress",
                    },
                    {
                        id: "f-1-0",
                        icon: SiSpringboot,
                        name: "Spring Boot",
                    },
                    {
                        id: "f-1-1",
                        icon: SiSpringsecurity,
                        name: "Spring Security",
                    },
                    {
                        id: "f-2",
                        icon: SiExpress,
                        name: "Express.js",
                    },
                    {
                        id: "f-3",
                        icon: SiNextdotjs,
                        name: "Next.js",
                    },
                    {
                        id: "f-4",
                        icon: SiJquery,
                        name: "jQuery",
                    },
                ],
            },
            {
                title: "Web",
                items: [
                    {
                        id: "w-1",
                        icon: SiJavascript,
                        name: "Javascript",
                    },
                    {
                        id: "w-2",
                        icon: SiHtml5,
                        name: "HTML",
                    },
                    {
                        id: "w-3",
                        icon: SiCss3,
                        name: "CSS",
                    },
                    {
                        id: "w-4",
                        icon: SiBootstrap,
                        name: "Bootstrap",
                    }
                ],
            },
            {
                title: "Web/App Servers",
                items: [
                    {
                        id: "ws-1",
                        icon: SiApache,
                        name: "Apache",
                    },
                    {
                        id: "ws-2",
                        icon: SiNginx,
                        name: "Nginx",
                        
                    },
                    {
                        id: "ws-3",
                        icon: SiApachetomcat,
                        name: "Apache Tomcat",
                    }
                ],
            },
            {
                title: "Web Services",
                items: [
                    {
                        id: "dp-1",
                        icon: SiJson,
                        name: "Json",
                    },
                    {
                        id: "dp-2",
                        icon: GiSoap,
                        name: "Soap",
                        
                    },
                    {
                        id: "dp-3",
                        icon: SiTwilio,
                        name: "Twilio",
                    }
                ],
            },
            {
                title: "Cloud",
                items: [
                    {
                        id: "c-1",
                        icon: SiAmazonaws,
                        name: "AWS",
                    }
                ],
            },
            {
                title: "Database",
                items: [
                    {
                        id: "db-1",
                        icon: GrMysql,
                        name: "MySQL",
                    },
                    {
                        id: "db-2",
                        icon: SiPostgresql,
                        name: "Postgresql",
                        
                    },
                    {
                        id: "db-3",
                        icon: SiMongodb,
                        name: "MongoDB",
                    }
                ],
            },
            {
                title: "Tools",
                items: [
                    {
                        id: "t-1",
                        icon: SiDocker,
                        name: "Docker",
                    },
                    {
                        id: "t-2",
                        icon: SiPostman,
                        name: "Postman",
                    },
                    {
                        id: "t-3",
                        icon: SiJenkins,
                        name: "Jenkins",
                    },
                    {
                        id: "t-4.0",
                        icon: SiSubversion,
                        name: "SVN",
                    },
                    {
                        id: "t-4.1",
                        icon: SiGit,
                        name: "Git",
                    },
                    {
                        id: "t-5",
                        icon: AiFillGithub,
                        name: "GitHub",
                    },
                    {
                        id: "t-6",
                        icon: AiOutlineGitlab,
                        name: "Gitlab",
                    },
                    {
                        id: "t-8",
                        icon: SiVisualstudiocode,
                        name: "VS Code",
                    },
                    {
                        id: "t-9",
                        icon: SiEclipseide,
                        name: "Eclipse",
                    },
                    {
                        id: "t-10",
                        icon: SiIntellijidea,
                        name: "Intellij",
                    }
                ],
            },
        ]
    },

    getExperience: function () {
        return [
            {
                organisation: "Talech (U.S. Bank)",
                logo: talech,
                link: "https://www.talech.com/",
                positions: [
                    {
                        title: "PHP Developer",
                        duration: "Mar 2023 - Dec 2023",
                        content: [
                            {
                                text: "Responsible for designing, developing, testing products using PHP/React.js frameworks.",
                                link: "",
                            },
                            {
                                text: "Takes feedback from code review and apply changes to meet standards.",
                                link: "",
                            },
                            {
                                text: "Conducts code reviews to provide guidance on compliance with development procedures.",
                                link: "",
                            },
                            {
                                text: "Build, optimize, and utilize REST APIs.",
                                link: "",
                            },
                            {
                                text: "Accountable for ensuring all aspects of product development follow compliance and security best practices.",
                                link: "",
                            },
                            {
                                text: "Takes full stack ownership by consistently writing production-ready and testable code.",
                                link: "",
                            },
                            {
                                text: "Consistently creates optimal design adhering to architectural best practices; considers scalability, reliability and performance of systems/contexts affected when defining technical designs.",
                                link: "",
                            },
                            {
                                text: "Accountable for ensuring all aspects of product development follow compliance and security best practices.",
                                link: "",
                            },
                            {
                                text: "Exhibits relentless focus in software reliability engineering standards embedded into development standards.",
                                link: "",
                            }
                        ],
                    },
                ],
            },
            {
                organisation: "HITACHI VANTARA VIETNAM",
                logo: hitachi,
                link: "https://www.hitachivantara.com/en-us/home.html",
                positions: [
                    {
                        title: "Developer / Team Lead",
                        duration: "Oct 2019 - Apr 2022",
                        content: [
                            {
                                text: "Implemented functionalities for both backend and frontend integration of web application.",
                                LINK: "",
                            },
                            {
                                text: "Created highly scalable RESTful APIs following to business requirements.",
                                LINK: "",
                            },
                            {
                                text: "Built RESTful APIs document using Swagger while working with backend and frontend.",
                                LINK: "",
                            },
                            {
                                text: "Handled system analysis and testing to determine root cause and develop solutions.",
                                LINK: "",
                            },
                            {
                                text: "Created functional design and technical documentation.",
                                LINK: "",
                            },
                            {
                                text: "Developed large-scale complex application using Java or PHP.",
                                LINK: "",
                            },
                            {
                                text: "Wrote unit tests for backend and frontend using PHPUnit, Junit, Mockito, Mocha, Jasmine, Jest.",
                                LINK: "",
                            },
                            {
                                text: "Researched and implemented current trends in web application technology.",
                                LINK: "",
                            },
                            {
                                text: "Contributed to all phases (requirement analysis, design, coding, testing…) of software development life cycle using Waterfall or Agile / Scrum methodologies.",
                                LINK: "",
                            },
                            {
                                text: "Handle difficult bugs related to web security, performance issues.",
                                LINK: "",
                            },
                            {
                                text: "Implemented training plan, technical training for new team members.",
                                LINK: "",
                            },
                            {
                                text: "Created timelines and monitor progress to streamline development.",
                                LINK: "",
                            },
                            {
                                text: "Designed and implemented IAM roles and policies for Dev, QA, built on AWS using EC2, Lambda, S3.",
                                LINK: "",
                            }
                        ],
                    },
                ],
            },
            {
                organisation: "Mulodo Vietnam",
                logo: mulodo,
                link: "https://sharing-innovations.com/",
                positions: [
                    {
                        title: "Developer",
                        duration: "Jun 2015 - Oct 2019",
                        content: [
                            {
                                text: "Developed new projects based on client’s requirements.",
                                link: "",
                            },
                            {
                                text: "Maintained and enhanced existing systems following company standards.",
                                link: "",
                            },
                            {
                                text: "Built Restful APIs to provide the functionality to integrate with other services.",
                                link: "",
                            },
                            {
                                text: "Implemented development in Agile / Scrum environment.",
                                link: "",
                            },
                            {
                                text: "Wrote unit test for frontend and backend using PHPUnit or JUnit.",
                                link: "",
                            },
                            {
                                text: "Executed code review based on Review Checklist.",
                                link: "",
                            },
                            {
                                text: "Performed testing of applications prior to client release.",
                                link: "",
                            },
                            {
                                text: "Created transfer plan, training plan for new members.",
                                link: "",
                            }
                        ],
                    },
                ],
            },
            {
                organisation: "NASHTECH VIETNAM",
                logo: nashtech,
                link: "http://www.nashtechglobal.com",
                positions: [
                    {
                        title: "Developer",
                        duration: "Oct 2009 - Jun 2015",
                        content: [
                            {
                                text: "Created design documentation.",
                                link: "",
                            },
                            {
                                text: "Established plan to transfer system to client for use.",
                                link: "",
                            },
                            {
                                text: "Provided support to team to meet deadlines according to client’s release planning.",
                                link: "",
                            },
                            {
                                text: "Oversaw coding and testing phases",
                                link: "",
                            }
                        ],
                    },
                ],
            },
        ];
    },

    getEducation: function () {
        return [
            {
                "title": "Maharishi International University",
                "contain": "1000 N 4th St, Fairfield, IA 52557",
                "years": "May 2022 - Dec 2024",
                "logo": maharishi,
                "link": "https://www.miu.edu/",
                "mainBadges": ["Master of Computer Science"],
                "badges": []
            },
            {
                "title": "HCM city University of Technology",
                "contain": "Ho Chi Minh City - Vietnam",
                "years": "Sep 2000 - May 2005",
                "logo": bk,
                "link": "https://hcmut.edu.vn/en",
                "mainBadges": ["Bachelor of Computer Science"],
                "badges": []
            }
        ]
    },

    getCertification: function () {
        return []
    },

    getAboutMe: function () {
        return [
            {
                id: "first-p-about",
                content: "Skilled Developer with 17 years of professional experience including 7 years of experience working with PHP in coordinating technical resources, creating functional design, code review and technical document. Effective team member who performs analysis to identify root cause, develop solutions, and implement improvements."
            },
            {
                id: "second-p-about",
                content: "Advanced expertise spanning Object-Oriented Programming, dependency injection, database development, and design patterns."
            },
            {
                id: "third-p-about",
                content: "Technically adept team member with history of success researching and applying emerging technologies to improve software performance."
            },
            {
                id: "four-p-about",
                content: "Deployed several applications through complete Software Development Life Cycle (SDLC) using Web services, Design patterns, and advanced frameworks for Front End and Back End modules."
            }
        ]
    }
}

export default StaticData;