import { Card, CardBody, CardText, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

const JokeCardWrapper = styled.div`
  & .card {
    width: 80vw;
    background-color: #3c6255 !important;
    color: #eae7b1;
  }

  & .joke-card-btn {
    background-color: #a6bb8d !important;
  }
`;

const JokeCard: React.FC<{
  joke: string;
  jokeType: string;
  setup: string;
  delivery: string;
}> = ({ joke, jokeType, setup, delivery }) => {
  async function copyJokeToClipboard(joke: string) {
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
      <JokeCardWrapper>
        <Card className='my-2 joke-card text-center'>
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
                className='p-1 d-flex align-items-center joke-card-btn'
                onClick={() =>
                  copyJokeToClipboard(
                    jokeType === 'single'
                      ? joke
                      : `Setup: ${setup}. Delivery: ${delivery} `
                  )
                }
              >
                <span className='material-symbols-outlined'>content_copy</span>
              </Button>
            </section>
          </CardBody>
        </Card>
      </JokeCardWrapper>
    </>
  );
};

export default JokeCard;
