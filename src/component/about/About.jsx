import "./about.css";
import Award from "../../img/award.png";
const About = () => {
    return(
        <div className="a">
             <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg" alt="webdev" className="a-img" />
                 </div>
             </div>
             <div className="a-right">
                 <h1 className="a.title"> About me</h1>
                 <p className="a-sub">
                 Right now I am in 3rd semester (2nd year). In my past three years, I've completed a great deal of 
                 coursework in the field of Software development and Android Application development.
                 </p>
                 <p className="a-desc">
                 My skills are 
                 C/C++, Java, Python, JavaScript, React.js, Android Application, and WordPress. I’ve completed my 
                 certification course in "project management" through Coursera which is powered by Google. 
                 I also did Android application and WordPress certification. I am an enthusiastic student working on
                 new technologies for web development like JavaScript, Angular, Node.js, django and ready to explore more 
                 organizations technology and have courage to deal with any obstacles.

                 </p>
                 <div className="a-award">
                     <img src={Award} alt="" className="a-award-img" />
                     <div className="a-award-texts">
                         <h4 className="a-award-title">Achievement and Awards</h4>
                         <p className="a-award-desc">
                             well i am not an actor... but still i got many awards like student of  the year
                             Best jazz performer and national quiz competetion and so on..
                             I also received sports award, like inter college badminton championship, football tournament
                             and university level top 7 squash national trial. 
                         </p>
                     </div>
                 </div>
                 </div> 

        </div>

    );
};

export default About;