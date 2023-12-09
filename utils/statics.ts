import { TNav } from "@/components/Navbar";
import { CgMenuGridO } from "react-icons/cg";
import { FaAtom } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { TportFeature } from "@/components/partials/portFeature";

export const navRoutes: TNav[] = [
  {
    routename: "overview",
    Icon: CgMenuGridO,
  },
  {
    routename: "skills",
    Icon: FaAtom,
  },
  {
    routename: "experiences",
    Icon: FaCode,
  },
  {
    routename: "projects",
    Icon: BsBriefcase,
  },
  {
    routename: "testimonial",
    Icon: FaRegHandshake,
  },
  {
    routename: "documentation",
    Icon: IoDocumentSharp,
  },
  {
    routename: "settings",
    Icon: IoSettings,
  },
];

export const portFeaturesData: TportFeature[] = [
  {
    name: "Skills",
    route: "baseurl/api/v1/skills",
    desc: "Get your list of skills or competencies..",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/skills\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
  {
    name: "Testimonials",
    route: "baseurl/api/v1/testimonials",
    desc: "Get your testimonials or endorsements from clients, colleagues, or users. ",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/testimonials\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
  {
    name: "Projects",
    route: "baseurl/api/v1/projects",
    desc: "Get your portfolio of projects you've worked on. Include project details, descriptions, and images .",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/projects\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
  {
    name: "Experiences",
    route: "baseurl/api/v1/experiences",
    desc: "Get a comprehensive list of your professional experiences. ",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/experiences\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
  {
    name: "Specific Project",
    route: "baseurl/api/v1/projects/[id]",
    desc: "Get a full detail of a particular  project. ",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/projects/[id]\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
  {
    name: "Specific Experience",
    route: "baseurl/api/v1/experiences/[id]",
    desc: "Get a full detail of a particular experience.",
    code: `
    const portBackURL = 'paste-your-copied-url-here'; // Paste the URL you copied from PortBack
    fetch(\`\${portBackURL}/api/v1/experiences/[id]\`)
      .then(response => response.json())
      .then(data => {
        // Handle the data as needed in your application
        console.log('PortBack Data:', data);
      })
      .catch(error => {
        console.error('Error fetching PortBack data:', error);
      });
  `,
  },
];
