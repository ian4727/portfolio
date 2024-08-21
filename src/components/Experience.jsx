import React from 'react';

const Experience = () => {
    return (
        <section className="w-screen h-screen px-24 xl:px-32 pt-80 relative">
			<h1 className="text-6xl font-bold mb-32">Career History</h1>
			<ul className="flex items-center w-full justify-center">
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/telephone.png" alt="Phone" />
				</li>
				<div className="w-96 h-2 bg-darkblue"></div>
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/blackboard.png" alt="Phone" />
				</li>
				<div className="w-96 h-2 bg-darkblue"></div>	
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/programming.png" alt="Phone" />
				</li>
			</ul>
			<div className="flex pt-10 justify-center items-start gap-80">
				<div className="flex flex-col gap-4">
					<img src="/assets/images/fis.png" alt="FIS" className="w-20" />
					<img src="/assets/images/qb.png" alt="QuickBooks" className="w-36" />
					<img src="/assets/images/comcast.png" alt="Comcast" className="w-20" />
					<img src="/assets/images/twc.png" alt="Time Warner Cable" className="w-20" />
					<img src="/assets/images/att.png" alt="at&t" className="w-20" />
				</div>
				<img src="/assets/images/occ.png" alt="OneCodeCamp" className="w-44 h-14" />
				<div className="flex items-center">
					<img src="/assets/images/saib.png" alt="Softwarez at it's best" className="w-22 h-14" />
					<p className="text-black text-2xl font-extrabold">SAIB</p>	
				</div>
				
			</div>
			{/* <div className="absolute w-96 h-56 rounded-full filter blur-[50px] top-96 right-1 bg-darkblue"></div> */}
			<p className="pt-28 text-xl text-center">My career began with assisting major consumer brands, where I honed my skills in diagnosing issues and delivering effective solutions. This experience fueled my passion for customer satisfaction and communication. Eager to expand my technical expertise, I pursued a degree in Information Technology, which introduced me to web development and complex technical concepts. This path led me to become a coding instructor at a bootcamp, where I refined my ability to convey technical information clearly while mentoring aspiring developers. After almost a year of teaching, I felt a strong urge to apply my knowledge and fell in love with building applications. Now, as a Web Developer focusing on Frontend development, I’m excited to combine my technical skills with my passion for creating engaging user experiences.</p>
		</section>
    )
}
export default Experience;
