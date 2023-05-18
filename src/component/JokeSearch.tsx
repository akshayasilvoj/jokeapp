import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3c6255 !important;
  border: none;
`;

const JokeSearch: React.FC<{
  getJokeSearchData: (type: string[], category: string[]) => void;
}> = ({ getJokeSearchData }) => {
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
  const [jokeType, setJokeType] = useState<string[]>([]);
  const [jokeCategory, setJokeCategory] = useState<string[]>([]);

  const handleChangeJokeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newJokeType = [...jokeType];
    if (e.target.checked) {
      newJokeType.push((e.target as HTMLInputElement).value);
      console.log(newJokeType);
    } else {
      let index = newJokeType.indexOf((e.target as HTMLInputElement).value);
      newJokeType.splice(index, 1);
      console.log(newJokeType);
    }
    setJokeType(newJokeType);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newJokeCategory = [...jokeCategory];
    if (e.target.checked) {
      newJokeCategory.push((e.target as HTMLInputElement).value);
    } else {
      let index = newJokeCategory.indexOf((e.target as HTMLInputElement).value);
      newJokeCategory.splice(index, 1);
    }
    setJokeCategory(newJokeCategory);
  };

  return (
    <Form action='/'>
      <Row>
        <Col md='3'>
          <Label for='jokeType' className='fw-bold'>
            Type
          </Label>
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

        <Col md='9'>
          <Label for='jokeType' className='fw-bold'>
            Category
          </Label>
          <Row>
            {jokeSearchItem?.categories.map((category) => (
              <Col md='4' key={category.name}>
                <FormGroup check key={category.value}>
                  <Input
                    name={category.name}
                    type='checkbox'
                    value={category.value}
                    onChange={(e) => handleChangeCategory(e)}
                  />
                  <Label>{category.label}</Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md='3'></Col>
      </Row>
      <Row>
        <Col className='text-center mt-3 mb-3'>
          <Button
            type='button'
            className='btn text-white'
            onClick={() => getJokeSearchData(jokeType, jokeCategory)}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default JokeSearch;
