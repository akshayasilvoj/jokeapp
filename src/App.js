import './App.css';
import JokeCard from './component/JokeCard';
import JokeSearch from './component/JokeSearch';
import getJoke from './api/JokeAPI';
import { useEffect, useState } from 'react';
import AppFooter from './component/layout/AppFooter';
import { Container } from 'reactstrap';

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

  const submitJokeSerachData = (jokeType) => {
    let type = '';
    if (jokeType.single === jokeType.twopart) {
      type = 'Any';
    } else if (jokeType.single) {
      type = 'single';
    } else if (jokeType.twopart) {
      type = 'twopart';
    }

    getJoke(type).then((res) => {
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
    getJoke('Any').then((res) => {
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
      <h1 className='app-header'>React Jokes App</h1>
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
