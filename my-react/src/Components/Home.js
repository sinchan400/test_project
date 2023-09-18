import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  // Sample data for the famous books
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      imageSrc: 'https://th.bing.com/th?id=OIP.Ki_BR3KdIyKfhEwVmzVhGgHaLE&w=204&h=305&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is a classic of modern American literature and won the Pulitzer Prize.',
    },
    {
      title: '1984',
      author: 'George Orwell',
      imageSrc: 'https://th.bing.com/th/id/OIP.Z5KLQbybGAxlM5JdjOWeWwHaKe?w=200&h=283&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description:
        '1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war.',
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        imageSrc: 'https://th.bing.com/th?id=OIP.fFaX7nKq5_5gf2nSI3QEUgHaLK&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        description:
          'The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. It explores themes of decadence, idealism, and the American Dream.',
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        imageSrc: 'https://th.bing.com/th?id=OIP.nPa6H8JOp7t2NtQdyqX2GQHaKW&w=211&h=295&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        description:
          'Pride and Prejudice is a novel by Jane Austen published in 1813. It follows the emotional development of Elizabeth Bennet, one of the most beloved heroines in English literature.',
      },
  ];

  return (
    <Container className="mt-4">
      <h1>My Library</h1>
      <Row>
        {books.map((book, index) => (
          <Col md={3} key={index}>
            <Card>
              <Card.Img variant="top" src={book.imageSrc} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
