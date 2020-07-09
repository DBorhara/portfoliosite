import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import ImageCarousel from '../components/ImageCarousel';
import me from '../assets/img/aboutMe.jpg';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <img
          src={me}
          alt="Depak and Daughter"
          width="300"
          style={{
            position: 'relative',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Content>
      <Content>
        I am currently a full stack software engineer looking for a company to
        call home. I learned my skill set in the immersive bootcamp at Full
        Stack Academy in NYC. I am passionate about web development and I am
        always learning best practices, frameworks, and languages to better
        myself as an engineer.{<br />}
        {<br />}I use to work at this really great startup where I was a
        community recruiter for their Software Development Fellowship. The
        fellowship focused on training software engineering and then using those
        skills as a means to escape poverty while also diversifying the tech
        industry. After spending a year there, and meeting great folks, I
        decided to make the jump to becoming an engineer. I was encouraged by a
        lot of the fellows who taught me javascript in their spare time. I
        finally made the jump to become a Software Engineer in July 2019 when I
        started my application for Full Stack Academy(FSA). I graduated from FSA
        in February 2020 and I am now looking for a company to call home.
        {<br />}
        {<br />}
        When I am not coding, I like to spend time with my wife, daughter, 2
        dogs, and cat. I also am an avid snowboarder,driving range golfer, and
        coffee enthusiast. I have also developed a new found respect and passion
        for learning algorithms, particularly heaps/priority queues and graph
        traversal. <strong>(Dijkstra's Shortest Path Algo 4 Lyfe)</strong>
        {<br />}
        {<br />}
        Below are the skills I am proficient in, and if you have any questions,
        or better yet want to hire me, please reach out to me by going to the
        contact form in the upper right.
        {<br />}
        {<br />}
        Looking forward to hearing from you. Thanks!
      </Content>

      <span> </span>

      <ImageCarousel />
    </div>
  );
}

export default AboutPage;
