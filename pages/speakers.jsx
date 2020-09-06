import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Speakers() {
	return (
    	<div className={styles.container}>
			 <Head>
        		<title>Ladies Retreat 2020</title>
				<link rel="icon" href="/beaconlighthouse.ico" />
      		</Head>
			<div className={styles.left}>
				<nav className={[styles.navLeft, styles.yellow].join(' ')}>
					<img className={styles.img} src="/lighthouse-grey.png" /> 
					&nbsp;&nbsp;
					<h2><a href="/" className={styles.darkgrey}>Beacon Baptist Church</a></h2>
				</nav>
				<main className={[styles.mainLeft, styles.yellow].join(' ')}>
					<h1 className={[styles.title, styles.darkgrey].join(' ')}>Better</h1>
					<h1 className={[styles.title, styles.darkgrey].join(' ')}>Together</h1>
					<h2 className={styles.darkgrey}>Ladies Retreat</h2>
					<p className={styles.darkgrey}>November 13-14</p>
				</main>
				<footer className={styles.footerLeft}>
					<img className={styles.img} src="/map-marker-grey.png" />
					&nbsp;&nbsp;
					<a className={styles.darkgrey} href="https://goo.gl/maps/xC8BG24kaKwPvVfr6" target="_blank"><p>2110&nbsp;Trawick&nbsp;Rd,&nbsp;Raleigh,&nbsp;NC&nbsp;27604 </p></a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<img className={styles.img} src="/phone-grey.png" /> 
					&nbsp;&nbsp;
					<p className={styles.darkgrey}>919-872-2215</p>
				</footer>
			</div>

			<div className={[styles.right, styles.darkgrey].join(' ')}>
				<nav className={[styles.navRight, styles.yellowFaded].join(' ')}>
					<a href="/speakers" className={[styles.underline, styles.underlineYellow].join(' ')}>Speakers</a>
					<a href="/schedule" className={[styles.underline, styles.underlineBlue].join(' ')}>Schedule</a>
					<a href="/contact" className={[styles.underline, styles.underlinePink].join(' ')}>FAQ</a>
					<a href="https://beaconbaptist.aware3.net/form/JYmEfUB" className={[styles.underline, styles.underlinePurple].join(' ')}> Register</a>
				</nav>
				<main className={[styles.mainRight, styles.yellowFaded].join(' ')}>
                    <h1>Retreat Speakers</h1>
					<div className={styles.profile}>
                        <img className={styles.medImg} src="/SharonRabon.png"/>
					    <div className={styles.description}>
                            <h2>Sharon Rabon</h2>
                            <p>Sharon grew up in a Chrisian home in Midland City, Alabama. She trusted Christ as her Savior when she was a child and gave her life to serve the Lord in lifetime ministry as a teenager. Sharon married her high school sweetheart, Tim Rabon, July 27, 1979. In 1981 they were asked to join the staff of Beacon Baptist Church in Raleigh, NC and in 1997 her husband became the pastor. Sharon is the director of ladies' ministries and serves as her husband's secretary. She is the mom of two sons and one daighter, all of whom are married and serve in lifetime ministry. She is known as Nana to eight cute kids!</p>
                        </div>
                    </div>
                    <div className={styles.profile}>
                        <img className={styles.medImg} src="/BethlieYoung.png"/>
                        <div className={styles.description}>
                            <h2>Bethlie Young</h2>
                            <p>Bethlie Young is wife to Evangelist Dave Young and mom to five amazing children. She serves alongside David in their revival meetings and family conferences, as well as their Keeping It Young podcast Bethlie is a homeschool mama who endeavors to live their family life verse, "Serve the Lord with gladness." Psalm 100:2.</p>
                        </div>
                    </div>
                    <div className={styles.profile}>
                        <img className={styles.medImg} src="/FrancieTaylor.png"/>
					    <div className={styles.description}>
                            <h2>Francie Taylor</h2>
                            <p>Francie is the wife of the late Norman Taylor and mom to three adult children: Austen (and wife Jessica), Hillary, and Collin. She has been a conference speaker since 1992, and has touched the lives of thousands. In the final week of Norman's life, he gave Francie many instructions including, "Don't stop teaching." Through the ministry of <span className={styles.italic}>Keep the Heart</span> she continues to help ladies to "keep thy heart with all diligence." Proverbs 4:23.</p>
                        </div>
                    </div>
				</main>
				<footer className={styles.footerRight}>
				</footer>
			</div>
    	</div>
	)
}
