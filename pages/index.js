import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
    	<div className={styles.container}>
			 <Head>
        		<title>Ladies Retreat 2020</title>
				<link rel="icon" href="/lighthouse-black.ico" />
      		</Head>
			<div className={styles.left}>
				<nav className={[styles.navLeft, styles.green].join(' ')}>
				<img className={styles.img} src="/lighthouse-black.png" /> 
					&nbsp;&nbsp;
					<h2><a href="/" className={styles.black}>Beacon Baptist Church</a></h2>
				</nav>
				<main className={[styles.mainLeft, styles.green].join(' ')}>
					<h1 className={[styles.title, styles.black].join(' ')}>Better</h1>
					<h1 className={[styles.title, styles.black].join(' ')}>Together</h1>
					<h2 className={styles.black}>Ladies Retreat</h2>
					<p className={styles.black}>November 13-14, 2020</p>
				</main>
				<footer className={[styles.footerLeft, styles.black].join(' ')}>
					<img className={styles.img} src="/map-marker-black.png" />
					&nbsp;&nbsp;
					<a href="https://goo.gl/maps/xC8BG24kaKwPvVfr6" target="_blank"><p>2110&nbsp;Trawick&nbsp;Rd,&nbsp;Raleigh,&nbsp;NC&nbsp;27604 </p></a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<img className={styles.img} src="/phone-black.png" /> 
					&nbsp;&nbsp;
					<p>919-872-2215</p>
				</footer>
			</div>

			<div className={styles.right}>
				<nav className={[styles.navRight, styles.black].join(' ')}>
					<a href="/speakers" className={[styles.underline, styles.underlineYellow].join(' ')}>Speakers</a>
					<a href="/schedule" className={[styles.underline, styles.underlineBlue].join(' ')}>Schedule</a>
					<a href="/contact" className={[styles.underline, styles.underlinePink].join(' ')}>Contact</a>
					<a href="https://beaconbaptist.aware3.net/form/JYmEfUB" className={[styles.underline, styles.underlinePurple].join(' ')}> Register</a>
				</nav>
				<main className={styles.mainRight}>
					<img className={styles.heroImg} src="/milk-cookies.png"/>
				</main>
				<footer className={[styles.footerRight, styles.black].join(' ')}>
					<p>Psalm 133:1</p>
				</footer>
			</div>
    	</div>
	)
}
