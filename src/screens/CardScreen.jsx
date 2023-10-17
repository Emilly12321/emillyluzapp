import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardScreen() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Não possui imagem e nem link  - Carinha feliz - 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardScreen;