import React, { Component } from 'react';

import Card from '../components/Card';

import spent from '../assets/img/spent.png';
import aplier from '../assets/img/aplier.png';
import shivaClothing from '../assets/img/shivaClothing.png';
import { Row, Container } from 'react-bootstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Shiva Clothing',
          subTitle:
            'Mock E-Commerce Site using React, Redux, Node.js, Firestore,and SASS ',
          imgSrc: shivaClothing,
          link: 'https://shiva-clothing.herokuapp.com/',
          selected: false,
        },
        {
          id: 1,
          title: '$$$pent',
          subTitle:
            'A personal expense tracker using D3.js, javascript, html, and css',
          imgSrc: spent,
          link: 'https://budgettracker-76199.firebaseapp.com/',
          selected: false,
        },
        {
          id: 2,
          title: 'Aplier',
          subTitle:
            'Progessive Web Applicationd designed to connect employers and candidates using GraphQL, React, Express, Node, and PostgresSQL. Produced for mobile view.',
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

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
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
