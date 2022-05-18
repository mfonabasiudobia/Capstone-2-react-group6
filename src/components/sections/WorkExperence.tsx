import React from 'react'

const styles = {
	sectionWrapper : `space-y-3`,
}


const WorkExperence = () => {
	return (
		<>
			<section className={styles.sectionWrapper}>
				<h1 className='title'>CORE SKILLS</h1>
				<div className={`grid grid-cols-3 gap-5`}> 
					<div>&bull; HTML</div>
					<div>&bull; CSS</div>
					<div>&bull; Vanilla Javascript</div>
					<div>&bull; React.js</div>
					<div>&bull; Next.js</div>
					<div>&bull; CSS3</div>
					<div>&bull; Boostrap CSS</div>
					<div>&bull; Tailwind CSS</div>
					<div>&bull; Jquery</div>
					<div>&bull; Git/Version Control</div>
					<div>&bull; Testing/Debugging</div>
					<div>&bull; Api Consumption</div>
					<div>&bull; Typescript</div>
					<div>&bull; Laravel</div>
					<div>&bull; SQL Database</div>
				</div> 
			</section>

			<section className={styles.sectionWrapper}>
				<h1 className='title'>WORK EXPERIENCE</h1>
				<ul className={`${styles.sectionWrapper} list-decimal list-inside`}>
					<li>Developing and maintaining the front end functionality of websites.</li>
					<li>Writing cross-browser compliant HTML, CSS & JavaScript.  </li>
					<li>Converting Figma designs to responsive html  and also paying attention to details.</li>
					<li>Knowledge of payment gateway, like Paystack and flutterwave.</li>
					<li>Can quickly understand business requirements and then translate these into functional requirements.  </li>
					<li>Knowledge of international web standards and protocols.</li>
					<li>Understanding of W3C standards, web accessibility & best practice. </li>
					<li>Having a passion for customer service & responding quickly to enquiries. </li>
					<li>Can manage multiple projects in a fast-paced, deadline-driven environment.  </li>
					<li>and able to quickly pick up new techniques.</li>
				</ul> 
			</section>
		</>
	)
}

export default WorkExperence