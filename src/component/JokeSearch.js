import { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const JokeSearch = ({ getJokeSerachData }) => {
  const jokeSearchItem = {
    types: [
      {
        label: 'Single',
        name: 'single',
        value: 'single',
      },
      {
        label: 'Two Part',
        name: 'twopart',
        value: 'twopart',
      },
    ],
    categories: [
      {
        label: 'Programming',
        name: 'Programming',
        value: 'Programming',
      },
      {
        label: 'Misc',
        name: 'Misc',
        value: 'Misc',
      },
      {
        label: 'Dark',
        name: 'Dark',
        value: 'Dark',
      },
      {
        label: 'Pun',
        name: 'Pun',
        value: 'Pun',
      },
      {
        label: 'Spooky',
        name: 'Spooky',
        value: 'Spooky',
      },
      {
        label: 'Christmas',
        name: 'Christmas',
        value: 'Christmas',
      },
    ],
  };
  const [jokeType, setJokeType] = useState([]);
  const [jokeCategory, setJokeCategory] = useState([]);

  const handleChangeJokeType = (e) => {
    let newJokeType = [...jokeType];
    if (e.target.checked) {
      newJokeType.push(e.target.value);
    } else {
      let index = newJokeType.indexOf(e.target.value);
      newJokeType.splice(index, 1);
    }
    setJokeType(newJokeType);
  };

  const handleChangeCategory = (e) => {
    let newJokeCategory = [...jokeCategory];
    if (e.target.checked) {
      newJokeCategory.push(e.target.value);
    } else {
      let index = newJokeCategory.indexOf(e.target.value);
      newJokeCategory.splice(index, 1);
    }
    setJokeCategory(newJokeCategory);
  };

  useEffect(() => {
    console.log(jokeCategory);
  });

  return (
    <Form action='/'>
      <Row>
        <Col md='6'>
          <Label for='jokeType'>Type</Label>
          {jokeSearchItem?.types.map((type) => (
            <FormGroup check key={type.value}>
              <Input
                name={type.name}
                type='checkbox'
                value={type.value}
                onChange={(e) => handleChangeJokeType(e)}
              />
              <Label>{type.label}</Label>
            </FormGroup>
          ))}
        </Col>

        <Col md='6'>
          <Label for='jokeType'>Category</Label>
          {jokeSearchItem.categories.map((category) => (
            <FormGroup check>
              <Input
                name={category.name}
                type='checkbox'
                value={category.value}
                onChange={(e) => handleChangeCategory(e)}
              />
              <Label>{category.label}</Label>
            </FormGroup>
          ))}
        </Col>
        <Col md='3'></Col>
      </Row>
      <Button
        type='button'
        onClick={() => getJokeSerachData(jokeType, jokeCategory)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default JokeSearch;
