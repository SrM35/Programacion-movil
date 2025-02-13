import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tienda de peluches</h1>
      <div className="card">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/122354076_01/w=286,h=180,fit=pad" />
      <Card.Body>
        <Card.Title>Patricio estrella Peluche</Card.Title>
        <Card.Text>
          Este peluche esta bieeeeenn chingon
        </Card.Text>
        <Card.Text>
          $50.00
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
      </div>
    </>
      
  )
}

export default App
