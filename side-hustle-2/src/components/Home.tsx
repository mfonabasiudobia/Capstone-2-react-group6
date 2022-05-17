import React from 'react'
import GeneralInformation from "./sections/GeneralInformation";
import EducationalExperience from "./sections/EducationalExperience";
import WorkExperence from "./sections/WorkExperence";

const styles = {
	pageWrapper : `p-5 md:p-10 space-y-5`,
}

const Home = () => {
	return (
		<div className={styles.pageWrapper}>
			

			<GeneralInformation />

			<EducationalExperience />

			<WorkExperence />
			

		</div>
	)
}

export default Home