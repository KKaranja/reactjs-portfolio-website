import React from "react";
import "./portfolio.css";
import Project1 from "../../assets/project-1.webp";
import Project2 from "../../assets/project-2.webp";
import Project3 from "../../assets/project-3.webp";
import Project4 from "../../assets/website-1.jpeg";
import Project5 from "../../assets/website-2.jpeg";
import Project6 from "../../assets/website-4.jpeg";

const data = [
  {
    id: 1,
    image: Project1,
    title: "Project 1",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: Project2,
    title: "Project 2",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: Project3,
    title: "Project 3",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: Project4,
    title: "Project 4",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: Project5,
    title: "Project 5",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: Project6,
    title: "Project 6",
    github: "https://github.com",
    demo: "https://google.com",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                  className='btn'
                >
                  Github
                </a>
                <a
                  href={demo}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-primary'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
