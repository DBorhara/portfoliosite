import React, { Component } from 'react';

import Card from '../components/Card';

import aboutMe from '../assets/img/aboutMe.jpg';
import aplier from '../assets/img/aplier.jpg';
import marvelrelics from '../assets/img/marvelrelics.jpg';
import { Row, Container } from 'react-bootstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Marvel Relics',
          subTitle: 'Mock E-Commerce Site',
          imgSrc: marvelrelics,
          link: 'https://marvel-relics.herokuapp.com/',
          selected: false,
        },
        {
          id: 1,
          title: 'My Story',
          subTitle: 'Learn more about my journey',
          imgSrc: aboutMe,
          link: '../pages/AboutPage.js',
          selected: false,
        },
        {
          id: 2,
          title: 'Aplier',
          subTitle: 'A progressive web app to connect companies and candidates',
          imgSrc: aplier,
          link: 'http://apliercapstone.us-east-1.elasticbeanstalk.com/',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
