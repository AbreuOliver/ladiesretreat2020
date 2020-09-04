import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
    	<div className={styles.container}>
			 <Head>
        		<title>Ladies Retreat 2020</title>
				<link rel="icon" href="/beaconlighthouse.ico" />
      		</Head>
			<div className={styles.left}>
				<nav className={[styles.navLeft, styles.blue].join(' ')}>
                <img className={styles.img} src="/beaconlighthouse.png" /> 
					&nbsp;&nbsp;
					<h2><a href="/">Beacon Baptist Church</a></h2>
				</nav>
				<main className={[styles.mainLeft, styles.blue].join(' ')}>
					<h1 className={styles.title}>Better</h1>
					<h1 className={styles.title}>Together</h1>
					<h2>Ladies Retreat</h2>
					<p>November 13-14</p>
				</main>
				<footer className={styles.footerLeft}>
					<img className={styles.img} src="/map-marker.png" />
					&nbsp;&nbsp;
					<a href="https://goo.gl/maps/xC8BG24kaKwPvVfr6" target="_blank"><p>2110&nbsp;Trawick&nbsp;Rd,&nbsp;Raleigh,&nbsp;NC&nbsp;27604 </p></a>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<img className={styles.img} src="/phone.png" /> 
					&nbsp;&nbsp;
					<p>919-872-2215</p>
				</footer>
			</div>

			<div className={styles.right}>
				<nav className={[styles.navRight, styles.blueFaded].join(' ')}>
					<a href="/speakers" className={[styles.underline, styles.underlineYellow].join(' ')}>Speakers</a>
					<a href="/schedule" className={[styles.underline, styles.underlineBlue].join(' ')}>Schedule</a>
					<a href="/contact" className={[styles.underline, styles.underlinePink].join(' ')}>Contact</a>
					<a href="https://beaconbaptist.aware3.net/form/JYmEfUB" className={[styles.underline, styles.underlinePurple].join(' ')}> Register</a>
				</nav>
				<main className={[styles.mainRight, styles.blueFaded].join(' ')}>
					<h1>Reteat Schedule</h1>
					<h2>The schedule will be listed here</h2>
				</main>
				<footer className={styles.footerRight}>
				</footer>
			</div>
    	</div>
	)
}