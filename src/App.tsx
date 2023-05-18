import JokeCard from './component/JokeCard';
import JokeSearch from './component/JokeSearch';
import getJoke from './api/JokeAPI';
import { useEffect, useState } from 'react';
import AppFooter from './component/layout/AppFooter';
import { Container } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const AppHeader = styled.h1`
  color: #eae7b1;
  text-align: center;
  letter-spacing: 0.3rem;
`;

const App: React.FC = () => {
  const [year, setYear] = useState<number>(2023);
  const [joke, setJoke] = useState<string>('');
  const [setup, setSetup] = useState<string>('');
  const [delivery, setDelivery] = useState<string>('');
  const [jokeType, setJokeType] = useState<string>('');

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  const submitJokeSerachData = (jokeType: string[], jokeCategory: string[]) => {
    let type: string = '';
    if (jokeType.length === 1) {
      type = jokeType[0];
    }

    getJoke(type, jokeCategory).then((res) => {
      if (res.error) {
        toast.error(res.message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
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
        <JokeSearch getJokeSearchData={submitJokeSerachData} />
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
};

export default App;
