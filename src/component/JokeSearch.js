import { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const JokeSearch = ({ getJokeSerachData }) => {
  const [jokeType, setJokeType] = useState({ single: false, twopart: false });

  const handleChangeJokeType = (e) => {
    let newJokeType = { ...jokeType };
    if (e.target.name === 'single') {
      newJokeType.single = e.target.checked;
    } else {
      newJokeType.twopart = e.target.checked;
    }
    setJokeType(newJokeType);
  };

  return (
    <Form action='/'>
      <Row>
        <Col md='3'>
          <Label for='jokeType'>Type</Label>
          <FormGroup check>
            <Input
              name='single'
              type='checkbox'
              value='single'
              onChange={(e) => handleChangeJokeType(e)}
            />
            <Label>Single</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name='twopart'
              type='checkbox'
              value='twopart'
              onChange={(e) => handleChangeJokeType(e)}
            />
            <Label>Two Part</Label>
          </FormGroup>
        </Col>

        <Col md='3'></Col>
        <Col md='3'></Col>
      </Row>
      <Button type='button' onClick={() => getJokeSerachData(jokeType)}>
        Submit
      </Button>
    </Form>
  );
};

export default JokeSearch;
