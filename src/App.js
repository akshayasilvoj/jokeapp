import JokeCard from './component/JokeCard';
import JokeSearch from './component/JokeSearch';
import getJoke from './api/JokeAPI';
import { useEffect, useState } from 'react';
import AppFooter from './component/layout/AppFooter';
import { Container } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const AppHeader = styled.h1`
  color: #eae7b1;
  text-align: center;
  letter-spacing: 0.3rem;
`;

function App() {
  const [year, setYear] = useState('2023');
  const [joke, setJoke] = useState('');
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [jokeType, setJokeType] = useState('');

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  const submitJokeSerachData = (jokeType, jokeCategory) => {
    let type = '';
    if (jokeType.length === 1) {
      type = jokeType[0];
    }

    getJoke(type, jokeCategory).then((res) => {
      if (res.error) {
        alert('Error');
      } else {
        if (res.type === 'twopart') {
          setSetup(res.setup);
          setDelivery(res.delivery);
          setJokeType('twopart');
        } else {
          setJoke(res.joke);
          setJokeType('single');
        }
      }
    });
  };

  useEffect(() => {
    setYear(getYear());
  }, []);

  useEffect(() => {
    getJoke().then((res) => {
      if (res.error) {
        alert('Error');
      } else {
        if (res.type === 'twopart') {
          setSetup(res.setup);
          setDelivery(res.delivery);
          setJokeType('twopart');
        } else {
          setJoke(res.joke);
          setJokeType('single');
        }
      }
    });
  }, []);
  return (
    <div className='d-flex flex-column justify-content-between align-items-center h-100'>
      <AppHeader>Joke React</AppHeader>
      <Container className='d-flex flex-column align-items-center'>
        <JokeSearch getJokeSerachData={submitJokeSerachData} />
        <JokeCard
          joke={joke}
          jokeType={jokeType}
          setup={setup}
          delivery={delivery}
        />
      </Container>
      <AppFooter footerText={`Debajit Mallick ${year}`} />
    </div>
  );
}

export default App;
