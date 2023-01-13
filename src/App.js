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

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
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
          let newJoke = `Setup: ${res.setup}.\nDelivery: ${res.delivery}`;
          setJoke(newJoke);
        } else {
          setJoke(res.joke);
        }
      }
    });
  }, []);
  return (
    <Container>
      <h1 className='app-header'>React Jokes App</h1>
      <main>
        <JokeSearch />
        <JokeCard joke={joke} />
      </main>
      <AppFooter footerText={`&copy; Debajit Mallick ${year}`} />
    </Container>
  );
}

export default App;
