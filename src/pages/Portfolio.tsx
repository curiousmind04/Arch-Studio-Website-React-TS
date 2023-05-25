import classes from "./Portfolio.module.css";

const PortfolioPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-seraph.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-seraph.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-seraph.jpg"
              alt="seraph station image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Seraph Station</h3>
            <span>September 2019</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-eebox.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-eebox.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-eebox.jpg"
              alt="eebox building image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Eebox Building</h3>
            <span>August 2017</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-federal.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-federal.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-federal.jpg"
              alt="federal II tower image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Federal II Tower</h3>
            <span>March 2017</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-del-sol.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-del-sol.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-del-sol.jpg"
              alt="project del sol image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Project Del Sol</h3>
            <span>January 2016</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-prototype.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-prototype.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-prototype.jpg"
              alt="le prototype image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Le Prototype</h3>
            <span>October 2015</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-228b.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-228b.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-228b.jpg"
              alt="228b tower image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>228B Tower</h3>
            <span>April 2015</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-edelweiss.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-edelweiss.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-edelweiss.jpg"
              alt="grand edelweiss hotel image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Grand Edelweiss Hotel</h3>
            <span>December 2013</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-netcry.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-netcry.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-netcry.jpg"
              alt="netcry tower image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Netcry Tower</h3>
            <span>August 2012</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-hypers.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-hypers.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-hypers.jpg"
              alt="hypers image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Hypers</h3>
            <span>January 2012</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-sxiv.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-sxiv.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-sxiv.jpg"
              alt="sxiv tower image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>SXIV Tower</h3>
            <span>March 2011</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-trinity.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-trinity.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-trinity.jpg"
              alt="trinity bank tower image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Trinity Bank Tower</h3>
            <span>September 2010</span>
          </div>
        </a>
        <a href="#" className={classes.item}>
          <picture>
            <source
              media="(min-width: 80rem)"
              srcSet="/assets/portfolio/desktop/image-paramour.jpg"
            />
            <source
              media="(min-width: 48rem)"
              srcSet="/assets/portfolio/tablet/image-paramour.jpg"
            />
            <img
              src="/assets/portfolio/mobile/image-paramour.jpg"
              alt="project paramour image"
            />
          </picture>
          <div className={classes.itemGroup}>
            <h3>Project Paramour</h3>
            <span>February 2008</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PortfolioPage;
