import { Card, CardBody, CardText, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import './JokeCard.css';
import PropTypes from 'prop-types';

const JokeCard = ({ joke, jokeType, setup, delivery }) => {
  async function copyJokeToClipboard(joke) {
    try {
      await navigator.clipboard.writeText(joke);
      toast.success('Joke Copied Successfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (err) {
      if (err) {
        toast.error('Failed to Copy The Joke!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    }
  }

  return (
    <>
      <ToastContainer />
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
          <section className='option-container d-flex justify-content-center'>
            <Button
              className='p-1 d-flex align-items-center'
              onClick={() =>
                copyJokeToClipboard(
                  jokeType === 'single'
                    ? joke
                    : `Setup: ${setup}. Delivery: ${delivery} `
                )
              }
            >
              <span class='material-symbols-outlined'>content_copy</span>
            </Button>
          </section>
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
