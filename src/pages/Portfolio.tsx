import classes from "./Portfolio.module.css";

const portfolioData = [
  {
    title: "Seraph Station",
    date: "September 2019",
    image: "seraph",
    alt: "seraph station image",
  },
  {
    title: "EEbox Building",
    date: "August 2017",
    image: "eebox",
    alt: "eebox building image",
  },
  {
    title: "Federal II Tower",
    date: "March 2017",
    image: "federal",
    alt: "federal II tower image",
  },
  {
    title: "Project Del Sol",
    date: "January 2016",
    image: "del-sol",
    alt: "project del sol image",
  },
  {
    title: "Le Prototype",
    date: "October 2015",
    image: "prototype",
    alt: "le prototype image",
  },
  {
    title: "228B Tower",
    date: "April 2015",
    image: "228b",
    alt: "228b tower image",
  },
  {
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
    image: "edelweiss",
    alt: "grand edelweiss hotel image",
  },
  {
    title: "Netcry Tower",
    date: "August 2012",
    image: "netcry",
    alt: "netcry tower image",
  },
  {
    title: "Hypers",
    date: "January 2012",
    image: "hypers",
    alt: "hypers image",
  },
  {
    title: "SXIV Tower",
    date: "March 2011",
    image: "sxiv",
    alt: "sxiv tower image",
  },
  {
    title: "Trinity Bank Tower",
    date: "September 2010",
    image: "trinity",
    alt: "trinity bank tower image",
  },
  {
    title: "Project Paramour",
    date: "February 2008",
    image: "paramour",
    alt: "project paramour image",
  },
];

const PortfolioPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {portfolioData.map((project) => (
          <a href="#" className={classes.item} key={project.title}>
            <picture>
              <source
                media="(min-width: 80rem)"
                srcSet={`/assets/portfolio/desktop/image-${project.image}.jpg`}
              />
              <source
                media="(min-width: 48rem)"
                srcSet={`/assets/portfolio/tablet/image-${project.image}.jpg`}
              />
              <img
                src={`/assets/portfolio/mobile/image-${project.image}.jpg`}
                alt={project.alt}
              />
            </picture>
            <div className={classes.itemGroup}>
              <h3>{project.title}</h3>
              <span>{project.date}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
