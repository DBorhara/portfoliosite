import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import apolloclient from '../assets/img/TechnicalImages/apolloclient.png';
import aws from '../assets/img/TechnicalImages/aws.png';
import expressjs from '../assets/img/TechnicalImages/expressjs.png';
import firebase from '../assets/img/TechnicalImages/firebase.png';
import git from '../assets/img/TechnicalImages/git.png';
import github from '../assets/img/TechnicalImages/github.png';
import graphql from '../assets/img/TechnicalImages/graphql.png';
import heroku from '../assets/img/TechnicalImages/heroku.png';
import nodejs from '../assets/img/TechnicalImages/nodejs.png';
import npm from '../assets/img/TechnicalImages/npm.png';
import postgressql from '../assets/img/TechnicalImages/postgressql.png';
import react from '../assets/img/TechnicalImages/reactjs.png';
import redux from '../assets/img/TechnicalImages/redux.png';

const ImageCarousel = () => {
  return (
    <div>
      <h1 className="centerText">Technical Skills</h1>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0}
        sideSize={1}
        slidesToScroll={1}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        <div>
          <img className="techimg" alt="Apollo Client" src={apolloclient} />
        </div>
        <div>
          <img className="techimg" alt="Amazon Web Services" src={aws} />
        </div>
        <div>
          <img className="techimg" alt="ExpressJS" src={expressjs} />
        </div>
        <div>
          <img className="techimg" alt="Firebase Hosting" src={firebase} />
        </div>
        <div>
          <img className="techimg" alt="Git Version Control" src={git} />
        </div>
        <div>
          <img className="techimg" alt="Github" src={github} />
        </div>
        <div>
          <img className="techimg" alt="Graph QL" src={graphql} />
        </div>
        <div>
          <img className="techimg" alt="Heroku Web Hosting" src={heroku} />
        </div>
        <div>
          <img className="techimg" alt="Node JavaScript" src={nodejs} />
        </div>
        <div>
          <img className="techimg" alt="Node Package Manager" src={npm} />
        </div>
        <div>
          <img className="techimg" alt="Postgres SQL" src={postgressql} />
        </div>
        <div>
          <img className="techimg" alt="React Javascript" src={react} />
        </div>
        <div>
          <img className="techimg" alt="Redux State Management" src={redux} />
        </div>
      </InfiniteCarousel>
    </div>
  );
};

export default ImageCarousel;
