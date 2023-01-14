import { Card, CardBody, CardText } from 'reactstrap';
import './JokeCard.css';
import PropTypes from 'prop-types';

const JokeCard = ({ joke, jokeType, setup, delivery }) => {
  return (
    <>
      <Card className='my-2 joke-card text-center p-3'>
        <CardBody className='joke-card-body'>
          {jokeType === 'single' ? (
            <CardText className='joke-card-text'>{joke}</CardText>
          ) : (
            <CardText className='joke-card-text'>
              <strong>Setup: </strong> {setup}
              <br />
              <strong>Delivery: </strong>
              {delivery}
            </CardText>
          )}
        </CardBody>
      </Card>
    </>
  );
};

JokeCard.propTypes = {
  joke: PropTypes.string.isRequired,
  jokeType: PropTypes.string.isRequired,
};

export default JokeCard;
