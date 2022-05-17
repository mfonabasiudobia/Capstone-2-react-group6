import React from 'react'

const styles = {
	sectionWrapper : `space-y-3`,
}

const EducationExperience = () => {
	return (<section className={styles.sectionWrapper}>
				<h1 className='title'>Educational Qualification</h1>
				<ul className={styles.sectionWrapper}>
					<li>Accounting Technician Scheme (ICAN) - 2019 </li>
					<li>West Afican Examinations Council (WAEC) -  2017</li>
				</ul> 
			</section>)
}

export default EducationExperience