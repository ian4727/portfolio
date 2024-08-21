import React from 'react';

const Experience = () => {
    return (
        <section className="xl:w-screen xl:h-screen px-10 xl:px-32 pt-80">
			<h1 className="text-4xl xl:text-6xl font-bold mb-32 text-center xl:text-left">Career History</h1>
			<ul className="flex flex-col xl:flex-row items-center w-full justify-center relative">
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/telephone.png" alt="Phone" />
				</li>
					<img src="/assets/images/fis.png" alt="FIS" className="w-16 absolute top-28 left-16 xl:hidden" />
					<img src="/assets/images/qb.png" alt="QuickBooks" className="w-16 absolute top-32 right-16 xl:hidden" />
					<img src="/assets/images/comcast.png" alt="Comcast" className="w-16 absolute top-40 left-16 xl:hidden" />
					<img src="/assets/images/twc.png" alt="Time Warner Cable" className="w-16 absolute top-44 right-16 xl:hidden" />
					<img src="/assets/images/att.png" alt="at&t" className="w-16 absolute top-56 left-16 xl:hidden" />
				<div className="w-2 xl:w-96 h-40 xl:h-2 bg-darkblue"></div>
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/blackboard.png" alt="Phone" />
				</li>
				<div className="w-2 xl:w-96 h-40 xl:h-2 bg-darkblue"></div>	
				<li className="border-8 rounded-full p-4 border-darkblue">
					<img src="/assets/images/programming.png" alt="Phone" />
				</li>
				<img src="/assets/images/occ.png" alt="OneCodeCamp" className="w-16 absolute top-80 left-8 xl:hidden" />
				<div className="absolute bottom-10 left-6 xl:hidden">
					<div className="flex items-center">
						<img src="/assets/images/saib.png" alt="Softwarez at it's best" className="w-8 " />
						<p className="text-black text-sm xl:text-2xl font-extrabold">SAIB</p>	
					</div>
				</div>
			</ul>
			
			<div className="hidden xl:flex pt-10 justify-center items-start gap-80">
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
			<div className="relative">
				<p className="pt-28 xl:text-xl text-center z-10 relative">My career began with assisting major consumer brands, where I honed my skills in diagnosing issues and delivering effective solutions. This experience fueled my passion for customer satisfaction and communication. Eager to expand my technical expertise, I pursued a degree in Information Technology, which introduced me to web development and complex technical concepts. This path led me to become a coding instructor at a bootcamp, where I refined my ability to convey technical information clearly while mentoring aspiring developers. After almost a year of teaching, I felt a strong urge to apply my knowledge and fell in love with building applications. Now, as a Web Developer focusing on Frontend development, I’m excited to combine my technical skills with my passion for creating engaging user experiences.</p>
				<div className="absolute w-96 h-56 rounded-full filter blur-[50px] top-56 left-2 bg-pink z-0"></div>
				<div className="absolute w-96 h-56 rounded-full filter blur-[100px] top-[400px] right-2 bg-blue z-0"></div>
				</div>
		</section>
    )
}
export default Experience;
