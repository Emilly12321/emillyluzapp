import Dropdown from 'react-bootstrap/Dropdown';

function ExercicioScreen() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="botao">
        Apenas um botão aleatório.
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">?</Dropdown.Item>
        <Dropdown.Item href="#/action-2">??</Dropdown.Item>
        <Dropdown.Item href="#/action-3">???</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ExercicioScreen;