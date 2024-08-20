import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testi1 from '../assets/images/steph.jpg';
import Testi2 from '../assets/images/ron.jpg';
import Testi3 from '../assets/images/abbi.jpg';
import Testi4 from '../assets/images/regel.jpg';
// import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// SwiperCore.use([Pagination]);

const References = () => {

    const colleagues = [
        {
            img: Testi1,
            review: "Ian has worked with the company as a Coding Bootcamp Instructor for several months. She has good interpersonal and communication skills. She is also flexible and willing to work on the tasks assigned to her and has established a good rapport with the team. I believe that she will be a valuable asset to any company she works with in her future endeavors."
        },
        {
            img: Testi2,
            review: "I have had the pleasure of working closely with Ian Gervacio at ONECODECAMP, where she serves as a Coding MERN Instructor. Ian's dedication to empowering future developers is truly commendable. Ian's journey into the world of technology is inspiring. Transitioning from a career in customer-facing support to becoming a passionate MERN Stack Developer and Coding Instructor reflects her unwavering commitment to personal growth and pursuit of her true passion. I've witnessed firsthand Ian's enthusiasm for building innovative apps and writing code. Her journey, which includes returning to school after nine years to complete her degree and completing a coding bootcamp, exemplifies her determination and perseverance. As a colleague, Ian brings a wealth of knowledge and expertise to the table. Her ability to effectively communicate complex concepts and mentor aspiring developers sets her apart. Ian's genuine desire to see her students succeed is evident in her approach to teaching. It's been a pleasure working alongside Ian, and I have no doubt that she will continue to make significant contributions to the tech community. I highly recommend Ian Gervacio as a developer."
        },
        {
            img: Testi3,
            review: "I had the pleasure of working alongside Ian at OneCodeCamp. Her dedication to her work and ability to collaborate effectively made a significant impact on our team's success. She single-handedly managed the teaching new trainees for all topics in Full-Stack Development and assessing trainees' performance. Consistently showing improvement in all aspects and all areas. Ian consistently demonstrated strong problem-solving skills, positive attitude, and light-hearted approach to things, which greatly contributed to our projects. I highly recommend her as her expertise and professionalism would be an asset to any organization."
        },
        {
            img: Testi4,
            review: "I am delighted to recommend Ian for any role or opportunity they pursue. Ian embodies kindness, empathy, and a contagious sense of joy that uplifts everyone around them. Their great personality and genuine interest in others create a positive and inclusive work environment where collaboration thrives. Not only is she a pleasure to be around, but they also bring a wealth of knowledge and expertise to their work. Their deep understanding of programming combined with their excellent communication skills makes them an invaluable asset to any team.       In addition to their professional competence, Ian is remarkably easy to work with. They approach tasks with enthusiasm and dedication, always willing to lend a helping hand and support their colleagues. Overall, I have no doubt that she will excel in any endeavor they pursue. Their combination of kindness, empathy, knowledge, and communication skills make them a standout professional and a joy to work alongside."
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Let's hear it from my former colleagues</span>
            <div className="blur t-blur1" ></div>
            <div className="blur t-blur2"></div>
        </div>
        
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {colleagues.map((colleague, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={colleague.img} alt="" />
                            <span>{colleague.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default References;
