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
					<p>November 13-14, 2020</p>
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
					<a href="/contact" className={[styles.underline, styles.underlinePink].join(' ')}>FAQ</a>
					<a href="https://beaconbaptist.aware3.net/form/JYmEfUB" className={[styles.underline, styles.underlinePurple].join(' ')}> Register</a>
				</nav>
				<main className={[styles.mainRight, styles.blueFaded].join(' ')}>
					<h1>Retreat Schedule</h1>
					<div className={[styles.flexColumn, styles.scheduleText].join(' ')}>
						<h2>Friday, November 13</h2>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>3:00 PM&nbsp;-&nbsp;6:25 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Registration&nbsp;&nbsp;-&nbsp;&nbsp;Vendors Open</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>3:00 PM&nbsp;-&nbsp;6:00 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Dinner</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>6:30 PM&nbsp;-&nbsp;8:30 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Main Session I&nbsp;&nbsp;-&nbsp;&nbsp;Francie Taylor</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>8:30 PM&nbsp;-&nbsp;9:30 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Vendors Open</p>
						</div>
					</div>
					<div className={[styles.flexColumn, styles.scheduleText].join(' ')}>
						<h2>Saturday, November 14</h2>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>7:30 AM&nbsp;-&nbsp;8:25 AM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Shop and Fellowship</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>8:30 AM&nbsp;-&nbsp;9:40 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Main Session II&nbsp;&nbsp;-&nbsp;&nbsp;Bethlie Young</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>9:40 AM&nbsp;-&nbsp;10:25 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Snack Break</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>10:30 AM&nbsp;-&nbsp;11:10 AM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Workshops</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>11:15 AM&nbsp;-&nbsp;12:05 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Q&A</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>12:05 PM&nbsp;-&nbsp;1:30 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<div className={styles.flexColumn}>
								<p>Lunch</p>
								<p>Vendors Open</p>
								<p>Senior Pastor's Wives Luncheon</p>
							</div>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>1:35 AM&nbsp;-&nbsp;2:15 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Main Session III&nbsp;&nbsp;-&nbsp;&nbsp;Francie Taylor</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>2:20 PM&nbsp;-&nbsp;3:25 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Main Session IV&nbsp;&nbsp;-&nbsp;&nbsp;Bethlie Young</p>
						</div>
						<div className={[styles.flexRow, styles.flexStart].join(' ')}>
							<p>3:35 PM&nbsp;-&nbsp;4:30 PM</p>&nbsp;&nbsp;&nbsp;&nbsp;
							<p>Vendors</p>
						</div>
					</div>
				</main>
				<footer className={styles.footerRight}>
				</footer>
			</div>
    	</div>
	)
}