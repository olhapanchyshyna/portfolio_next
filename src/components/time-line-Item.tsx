// components/Skills.js

import Image from "next/image";

const skillsData = [
  {
    column: [
      {
        icon: "experience--university",
        title: "NUBiP",
        subtitle: "Kyiv / 2020-2025",
        description: "Higher education in the specialty of Law",
      },
      {
        icon: "experience--courses",
        title: "Udemy",
        subtitle: "Landing the layout and creating themes on CMS WordPress",
        description:
          '"pulling" the layout on the engine of the content management system Wordpress. Creating themes for Wordpress. Creation of a complete product.Basic principles of working with content management systems (CMS).Working with plugins for WP.',
      },
      {
        icon: "experience--courses",
        title: "Result school",
        subtitle: "JavaScript + Git",
        description:
          'Hello world. Syntax. Data types. Type casting in JavaScript. Working with strings Actions. debug. Functions. Arrays. Objects. Date and Time in JavaScript. The keyword is "this". Classes + OOP. Working with the DOM Asynchrony. Callback + Event Loop. webpack, rollup. ES6 import export.',
      },
      {
        icon: "experience--courses",
        title: "Udemy",
        subtitle: "Web development courses",
        description:
          "Website development using BEM methodology, using Sass/Scss/Less preprocessors. using Git and GitHub. Creation of mobile adaptation of sites and applications. Optimize the speed of sites and validate the layout according to w3c standards. A robot with many ready-made plugins, install geo-maps on the site and work with fonts.",
      },
    ],
  },
  {
    column: [
      {
        icon: "experience--courses",
        title: "Udemy",
        subtitle: "Practical JavaScript (Advanced Level)",
        description:
          "Practical application of the JavaScript programming language on real projects. Projects in classical and OOP styles. Implementation of projects according to the terms of reference. Setting up project builds",
      },
      {
        icon: "experience--courses",
        title: "Udemy",
        subtitle: "The Complete JavaScript Course",
        description:
          "Fundamentals of programming and algorithms. Fundamentals ООП. AJAX, JSON. Promise, LocalStorages, Async/Await. npm, Gulp, Webpack",
      },
      {
        icon: "experience--courses",
        title: "Lemon school",
        subtitle: "Web development courses",
        description:
          "Creation of adaptive, easy-to-use sites. Working with graphic editors in the context of layout: Photoshop, Zeplin, Figma, Avocode. with animations and using libraries.",
      },
			{
        icon: "experience--courses",
        title: "Lemon school",
        subtitle: "Web development courses",
        description:
          "Creation of adaptive, easy-to-use sites. Working with graphic editors in the context of layout: Photoshop, Zeplin, Figma, Avocode. with animations and using libraries.",
      },
    ],
  },
];

export default function TimeLine (){
  return (
    <div className="mt-[60px] flex flex-col lg:flex-row items-center lg:items-start justify-between pl-[50px] py-[0]">
      {skillsData.map((col, colIndex) => (
        <div key={colIndex}>
          <div className='education__list max-w-[360px]' >
            <div className='education__li-sibtitle'>h</div>
            {col.column.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-[50px]">
                <div className='education__item_head'>
                  <div className='education__sibtitle'>
                    <Image
                      src="/education-icon.png"
                      width={16}
                      height={16}
                      alt=""
                      className="mb-[0] mt-[6px] h-[25px] w-[25px] text-white absolute"
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold leading-[21px] text-[rgba(255,_255,_255,_0.8901960784)]">
                      {item.title}
                    </div>
                    <div className="text-[12px] font-medium leading-[18px] text-[rgba(255,_255,_255,_0.8901960784)]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <div className="text-[14px] font-medium leading-[18px] text-[rgba(255,_255,_255,_0.8901960784)]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


