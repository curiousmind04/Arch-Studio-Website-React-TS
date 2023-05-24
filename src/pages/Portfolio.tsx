import classes from "./Portfolio.module.css";

const PortfolioPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-seraph.jpg"
            alt="seraph station image"
          />
          <div className={classes.itemGroup}>
            <h3>Seraph Station</h3>
            <span>September 2019</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-eebox.jpg"
            alt="eebox building image"
          />
          <div className={classes.itemGroup}>
            <h3>Eebox Building</h3>
            <span>August 2017</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-federal.jpg"
            alt="federal II tower image"
          />
          <div className={classes.itemGroup}>
            <h3>Federal II Tower</h3>
            <span>March 2017</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-del-sol.jpg"
            alt="project del sol image"
          />
          <div className={classes.itemGroup}>
            <h3>Project Del Sol</h3>
            <span>January 2016</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-prototype.jpg"
            alt="le prototype image"
          />
          <div className={classes.itemGroup}>
            <h3>Le Prototype</h3>
            <span>October 2015</span>
          </div>
        </div>

        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-228b.jpg"
            alt="228b tower image"
          />
          <div className={classes.itemGroup}>
            <h3>228B Tower</h3>
            <span>April 2015</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-edelweiss.jpg"
            alt="grand edelweiss hotel image"
          />
          <div className={classes.itemGroup}>
            <h3>Grand Edelweiss Hotel</h3>
            <span>December 2013</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-netcry.jpg"
            alt="netcry tower image"
          />
          <div className={classes.itemGroup}>
            <h3>Netcry Tower</h3>
            <span>August 2012</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-hypers.jpg"
            alt="hypers image"
          />
          <div className={classes.itemGroup}>
            <h3>Hypers</h3>
            <span>January 2012</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-sxiv.jpg"
            alt="sxiv tower image"
          />
          <div className={classes.itemGroup}>
            <h3>SXIV Tower</h3>
            <span>March 2011</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-trinity.jpg"
            alt="trinity bank tower image"
          />
          <div className={classes.itemGroup}>
            <h3>Trinity Bank Tower</h3>
            <span>September 2010</span>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="/assets/portfolio/mobile/image-paramour.jpg"
            alt="project paramour image"
          />
          <div className={classes.itemGroup}>
            <h3>Project Paramour</h3>
            <span>February 2008</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
