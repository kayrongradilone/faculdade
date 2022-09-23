import axios from "axios";

import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function List() {
  const [personagens, setPersonages] = useState({char :[] });
  useEffect(() => {
    const personagensList = async () => {
      const { data } = await axios("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7");

      setPersonages({char : data});
      console.log(data);
    };
    personagensList();
  }, [setPersonages]);

  return (
    <div>
      {
        personagens.char && personagens.char.map((item) =>(
            <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>Name: {item.name}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text>Gender: {item.gender}</Card.Text>
        <Card.Text>Specie: {item.species}</Card.Text>
        <Button variant="primary">Poke your character</Button>
      </Card.Body>
    </Card>
    </>
        ))
      }
    </div>
  );
}

export default List;
