import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import './JokeCard.css';
import PropTypes from 'prop-types';

const JokeCard = ({ joke }) => {
  return (
    <>
      <Card className='my-2 joke-card text-center p-3'>
        <CardBody className='joke-card-body'>
          <CardText className='joke-card-text'>{joke}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

JokeCard.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default JokeCard;
