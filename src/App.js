import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import product from './product';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image.js';


const firstName = ""; 

const App = () => {
  return (
    <div className="App">
      <h1>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h1>
      <Card className="product-card">
        <Card.Body>
          <Card.Title>
          <Image src={product.image} alt={product.name} />
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
          </Card.Text>
          <Card.Text>
            <Description description={product.description} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
