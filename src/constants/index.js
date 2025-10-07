import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Blender Developer",
      icon: web,
    },
    {
      title: "2d animator",
      icon: mobile,
    },
    {
      title: "Designer",
      icon: backend,
    },
    {
      title: "Illustrator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "The Cathedral High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2011 - April 2021",
      points: [
        "Higher Education, Grade I To X.",
        "Development of core requirements.",
        "Character and communication development",
        
      ],
    },
    {
      title: "Freelance",
      company_name: "Rachel's overseas Edu",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Ongoing",
      points: [
        "Designed logos and posters.",
        "Developed entire branding for the company.",
        "Implemented new marketing strategies based on design.",
        ,
      ],
    },
    
     
  ];
  
  const testimonials = [
    {
      testimonial:
        "She's hard working!",
      name: "Faculty 1",
      designation: "Teacher",
      company: "SJU faculty",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "She designed brand collaterals.",
      name: "Patric Andrews",
      designation: "Founder",
      company: "Rachel's Overseas Edu.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "She's creative",
      name: "Faculty 2",
      designation: "Teacher",
      company: "SJU faculty",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solar System",
      description:
        "Created Solar System in Unity.",
      tags: [
        {
          name: "planets",
          color: "blue-text-gradient",
        },
        {
          name: "galaxy",
          color: "green-text-gradient",
        },
        {
          name: "virtualspace",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://sathvick.com/231voa/solar/231voa32/index.html",
    },
    {
      name: "Obstacle course",
      description:
        "From playing games, to now creating my very own mini-game. A really fun experience to do it",
      tags: [
        {
          name: "fun",
          color: "blue-text-gradient",
        },
        {
          name: "unitygame",
          color: "green-text-gradient",
        },
        {
          name: "singleplayer",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://sathvick.com/231voa/obstacle/231voa32/",
    },
    {
      name: "Ineractive Table",
      description:
        "A project where we can chage the materials of the assets with other materials.",
      tags: [
        {
          name: "furtniture",
          color: "blue-text-gradient",
        },
        {
          name: "interactiveelements",
          color: "green-text-gradient",
        },
        {
          name: "3dmodel",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://sathvick.com/231voa/i3d/231voa32/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };