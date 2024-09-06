export type Skill = {
  title: string;
  descr: string;
  img: string;
  bsh: string;
  widthImg?: string;
};

export const skills: Skill[] = [
  {
    title: "HTML5",
    descr:
      "Used to create and structure content on web pages",
    img: "/html5.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "CSS3",
    descr: "Used to describe the appearance and formatting of HTML documents.",
    img: "/css3.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "JavaScript",
    descr:
      "Is a programming language that is used to create dynamic and interactive elements on web pages",
    img: "/js.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "React",
    descr: "Allows developers to build components that can manage their state and render the user interface based on those states",
    img: "/react.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Next.js",
    descr:
      "A popular framework for React that makes it easy to create modern web applications and websites",
    img: "/nextjs.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "TypeScript",
    descr: "A strongly typed programming language based on JavaScript that adds static typing to code",
    img: "/typescript.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Tailwind",
    descr:
      "A CSS framework that provides a set of ready-made classes for quickly and easily creating user interfaces",
    img: "/tailwind.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "Shadcn",
    descr:
      "Shadcn is a collection of high-quality, accessible UI components for building modern web applications with React. ",
    img: "/shadcn.jpeg",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Auth.js",
    descr:
      "Is a JavaScript library or module that is used to manage authentication and authorization in web applications.",
    img: "/nextauth.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "PostgreSQL",
    descr:
      "Is a powerful object-relational database management system",
    img: "/postgresql.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Zustand",
    descr:
      "This is a library for managing state in React applications.",
    img: "/zustand.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Stripe",
    descr:
      "This is a payment platform that provides tools for accepting payments via the Internet.",
    img: "/stripe.svg",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Prisma",
    descr:
      "Is a modern ORM for Node.js and TypeScript that simplifies interaction with databases",
    img: "/prisma.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Wordpress",
    descr: "Is a popular free content management system (CMS) for creating and managing websites and blogs",
    img: "/wordpress.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Figma",
    descr: "It is an online user interface design tool that allows designers to create and collaborate on projects in real time",
    img: "/figma.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "FSD",
    descr: "The FSD architecture allows developers to work across different layers of an application, integrating and coordinating functionality for seamless development.",
    img: "/fsd.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
    widthImg: 'w-[100px]'
  },
  {
    title: "GSAP",
    descr: "Is a powerful JavaScript library for creating animations in web applications",
    img: "/gsap.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
    widthImg: 'w-[100px]'
  },
  {
    title: "i18n",
    descr: "Is the process of preparing an application to support multiple languages ​​and cultures",
    img: "/translation.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
    widthImg: 'w-[60px]'
  },
];