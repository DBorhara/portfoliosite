import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { Row, Container } from 'react-bootstrap';

import Hero from '../components/Hero';
import Content from '../components/Content';

const ContactPage = (props) => (
  <div>
    <Hero title={props.title} />

    <Container fluid={true}>
      <Row className="justify-content-around">
        <Link
          to={{ pathname: 'mailto:depakborhara@gmail.com' }}
          target="_blank"
          style={{ paddingBottom: '30px', color: 'red' }}
        >
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            <FiMail />
          </h2>
          depakborhara@gmail.com
        </Link>
      </Row>
      <Row className="justify-content-around">
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/depakborhara/' }}
          target="_blank"
          style={{ paddingBottom: '30px' }}
        >
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            <FiLinkedin />
          </h2>
          https://www.linkedin.com/in/depakborhara/
        </Link>
      </Row>
      <Row className="justify-content-around">
        <Link
          to={{ pathname: 'https://www.github.com/DBorhara' }}
          target="_blank"
          style={{ paddingBottom: '30px', color: 'black' }}
        >
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            <FiGithub />
          </h2>
          https://www.github.com/DBorhara
        </Link>
      </Row>
    </Container>
  </div>
);

export default ContactPage;
