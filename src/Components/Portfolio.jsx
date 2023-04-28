/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Stepping into Big Data with Azure Databricks and Apache Spark",
    description:
      "Created a beginner friendly article to help explain Big Data and Azure Databricks.",
    url: "https://medium.com/ms-club-of-sliit/stepping-into-big-data-with-azure-databricks-and-apache-spark-215353f71d9d,
  },
  {
    title: "Deploy a React web application with Azure App Service",
    description:
      "Wrote a beginner friendly article to help explain how to deploy a React web application with Azure App Service.",
    url: "https://medium.com/@dasuntheekshana/deploy-a-react-web-application-with-azure-app-service-d73e64cda0dd",
  },
  {
    title: "My Resume Site",
    description:
      "Created a simple resume site using HTML, CSS, Javascript and deployed it using Github Pages.",
    url: "https://dasuntm.github.io/",
  },
  {
    title: "Development and Tesing frameworks",
    description:
      "A video explaining development and testing frameworks done for undergraduate students at my university.",
    url: "https://www.youtube.com/watch?v=VhLmNM-z0L8&t=1s",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
